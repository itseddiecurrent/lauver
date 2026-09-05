import { createClient } from 'npm:@supabase/supabase-js@2.103.0';
import {
  normalizeWaitlistPayload,
  WaitlistValidationError,
} from './validation.mjs';

const DEFAULT_ALLOWED_ORIGINS = [
  'https://lauver.ai',
  'https://www.lauver.ai',
  'http://localhost:5179',
  'http://127.0.0.1:5179',
];

const MAX_BODY_BYTES = 4096;

function allowedOrigins() {
  const configured = Deno.env.get('WAITLIST_ALLOWED_ORIGINS');
  if (!configured) return new Set(DEFAULT_ALLOWED_ORIGINS);

  return new Set(
    configured
      .split(',')
      .map((origin) => origin.trim())
      .filter(Boolean),
  );
}

function corsHeaders(origin: string | null) {
  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Vary': 'Origin',
  };

  if (origin && allowedOrigins().has(origin)) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}

function jsonResponse(status: number, body: Record<string, unknown>, origin: string | null) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(origin),
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

Deno.serve(async (request) => {
  const origin = request.headers.get('Origin');

  if (origin && !allowedOrigins().has(origin)) {
    return jsonResponse(403, { ok: false, error: 'origin_not_allowed' }, null);
  }

  if (request.method === 'OPTIONS') {
    return new Response(null, { status: 204, headers: corsHeaders(origin) });
  }

  if (request.method !== 'POST') {
    return jsonResponse(405, { ok: false, error: 'method_not_allowed' }, origin);
  }

  if (!request.headers.get('Content-Type')?.toLowerCase().startsWith('application/json')) {
    return jsonResponse(415, { ok: false, error: 'json_required' }, origin);
  }

  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > MAX_BODY_BYTES) {
      return jsonResponse(413, { ok: false, error: 'request_too_large' }, origin);
    }

    let payload: unknown;
    try {
      payload = JSON.parse(rawBody);
    } catch {
      return jsonResponse(400, { ok: false, error: 'invalid_json' }, origin);
    }

    const signup = normalizeWaitlistPayload(payload);
    const supabaseUrl = Deno.env.get('SUPABASE_URL');
    const serviceRoleKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY');

    if (!supabaseUrl || !serviceRoleKey) {
      console.error('join-waitlist is missing required Supabase environment variables');
      return jsonResponse(500, { ok: false, error: 'service_unavailable' }, origin);
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
      },
    });

    const { error } = await supabase.from('waitlist_signups').insert({
      email: signup.email,
      locale: signup.locale,
      source: signup.source,
      consent_version: signup.consentVersion,
    });

    // PostgreSQL code 23505 means the unique email constraint already exists.
    // Return the same response for new and repeat signups to avoid email enumeration.
    if (error && error.code !== '23505') {
      console.error('join-waitlist database insert failed', error.code ?? 'unknown');
      return jsonResponse(500, { ok: false, error: 'service_unavailable' }, origin);
    }

    return jsonResponse(200, {
      ok: true,
      message: 'Waitlist signup accepted.',
    }, origin);
  } catch (error) {
    if (error instanceof WaitlistValidationError) {
      return jsonResponse(400, { ok: false, error: error.code }, origin);
    }

    console.error('join-waitlist request failed unexpectedly');
    return jsonResponse(500, { ok: false, error: 'service_unavailable' }, origin);
  }
});
