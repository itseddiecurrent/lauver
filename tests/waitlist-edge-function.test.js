const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const functionPath = path.join(root, 'supabase/functions/join-waitlist/index.ts');
const validationPath = path.join(root, 'supabase/functions/join-waitlist/validation.mjs');
const functionSource = fs.readFileSync(functionPath, 'utf8');

const validationModule = import(pathToFileURL(validationPath).href);

test('normalizes a valid waitlist signup', async () => {
  const { normalizeWaitlistPayload } = await validationModule;

  assert.deepEqual(
    normalizeWaitlistPayload({
      email: '  Athlete@Example.COM ',
      locale: 'zh',
      source: 'homepage_hero',
    }),
    {
      email: 'athlete@example.com',
      locale: 'zh',
      source: 'homepage_hero',
      consentVersion: 'waitlist-v1',
    },
  );
});

test('uses safe defaults for locale and source', async () => {
  const { normalizeWaitlistPayload } = await validationModule;

  const signup = normalizeWaitlistPayload({ email: 'runner@example.com' });
  assert.equal(signup.locale, 'en');
  assert.equal(signup.source, 'homepage_waitlist');
});

test('rejects malformed or oversized email addresses', async () => {
  const { normalizeWaitlistPayload, WaitlistValidationError } = await validationModule;
  const invalidEmails = [
    '',
    'not-an-email',
    'missing-domain@',
    '@missing-local.example',
    `${'a'.repeat(245)}@example.com`,
  ];

  for (const email of invalidEmails) {
    assert.throws(
      () => normalizeWaitlistPayload({ email }),
      (error) => error instanceof WaitlistValidationError && error.code === 'invalid_email',
    );
  }
});

test('rejects unsupported locale and source values', async () => {
  const { normalizeWaitlistPayload, WaitlistValidationError } = await validationModule;

  assert.throws(
    () => normalizeWaitlistPayload({ email: 'runner@example.com', locale: 'fr' }),
    (error) => error instanceof WaitlistValidationError && error.code === 'invalid_locale',
  );
  assert.throws(
    () => normalizeWaitlistPayload({ email: 'runner@example.com', source: 'untrusted' }),
    (error) => error instanceof WaitlistValidationError && error.code === 'invalid_source',
  );
});

test('edge function keeps privileged access server-side and handles duplicates safely', () => {
  assert.match(functionSource, /Deno\.env\.get\('SUPABASE_SERVICE_ROLE_KEY'\)/);
  assert.match(functionSource, /error\.code !== '23505'/);
  assert.match(functionSource, /request\.method !== 'POST'/);
  assert.match(functionSource, /Access-Control-Allow-Origin/);
  assert.doesNotMatch(functionSource, /service_role\s*[:=]\s*['"][A-Za-z0-9._-]+/);
});
