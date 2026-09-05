const test = require('node:test');
const assert = require('node:assert/strict');
const path = require('node:path');
const { pathToFileURL } = require('node:url');

const root = path.resolve(__dirname, '..');
const clientModule = import(pathToFileURL(path.join(root, 'src/waitlist-client.mjs')).href);

const baseSignup = {
  supabaseUrl: 'https://project-ref.supabase.co/',
  publishableKey: 'sb_publishable_test',
  email: 'runner@example.com',
  locale: 'en',
};

test('waitlist client sends the expected request to the Edge Function', async () => {
  const { submitWaitlistSignup } = await clientModule;
  let request;

  const result = await submitWaitlistSignup({
    ...baseSignup,
    fetchImpl: async (url, options) => {
      request = { url, options };
      return {
        ok: true,
        json: async () => ({ ok: true, message: 'accepted' }),
      };
    },
  });

  assert.equal(request.url, 'https://project-ref.supabase.co/functions/v1/join-waitlist');
  assert.equal(request.options.method, 'POST');
  assert.equal(request.options.headers.apikey, 'sb_publishable_test');
  assert.deepEqual(JSON.parse(request.options.body), {
    email: 'runner@example.com',
    locale: 'en',
    source: 'homepage_waitlist',
  });
  assert.equal(result.ok, true);
});

test('waitlist client rejects missing build configuration', async () => {
  const { submitWaitlistSignup, WaitlistSubmissionError } = await clientModule;

  await assert.rejects(
    submitWaitlistSignup({ ...baseSignup, supabaseUrl: '' }),
    (error) => error instanceof WaitlistSubmissionError && error.code === 'configuration_missing',
  );
});

test('waitlist client converts network and server failures into safe errors', async () => {
  const { submitWaitlistSignup, WaitlistSubmissionError } = await clientModule;

  await assert.rejects(
    submitWaitlistSignup({
      ...baseSignup,
      fetchImpl: async () => { throw new Error('private network detail'); },
    }),
    (error) => error instanceof WaitlistSubmissionError && error.code === 'network_error',
  );

  await assert.rejects(
    submitWaitlistSignup({
      ...baseSignup,
      fetchImpl: async () => ({
        ok: false,
        json: async () => ({ ok: false, error: 'service_unavailable' }),
      }),
    }),
    (error) => error instanceof WaitlistSubmissionError && error.code === 'service_unavailable',
  );
});
