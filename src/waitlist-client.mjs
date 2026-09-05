export class WaitlistSubmissionError extends Error {
  constructor(code, message = 'Waitlist submission failed.') {
    super(message);
    this.name = 'WaitlistSubmissionError';
    this.code = code;
  }
}

export async function submitWaitlistSignup({
  supabaseUrl,
  publishableKey,
  email,
  locale,
  source = 'homepage_waitlist',
  fetchImpl = globalThis.fetch,
}) {
  if (!supabaseUrl || !publishableKey) {
    throw new WaitlistSubmissionError('configuration_missing');
  }

  if (typeof fetchImpl !== 'function') {
    throw new WaitlistSubmissionError('fetch_unavailable');
  }

  const endpoint = `${supabaseUrl.replace(/\/$/, '')}/functions/v1/join-waitlist`;

  let response;
  try {
    response = await fetchImpl(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': publishableKey,
      },
      body: JSON.stringify({ email, locale, source }),
    });
  } catch {
    throw new WaitlistSubmissionError('network_error');
  }

  let result = null;
  try {
    result = await response.json();
  } catch {
    // A non-JSON response is handled as a generic service error below.
  }

  if (!response.ok || result?.ok !== true) {
    throw new WaitlistSubmissionError(result?.error ?? 'service_unavailable');
  }

  return result;
}
