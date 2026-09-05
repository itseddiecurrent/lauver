export class WaitlistValidationError extends Error {
  constructor(code, message) {
    super(message);
    this.name = 'WaitlistValidationError';
    this.code = code;
  }
}

const ALLOWED_LOCALES = new Set(['en', 'zh']);
const ALLOWED_SOURCES = new Set([
  'homepage_waitlist',
  'homepage_hero',
  'homepage_footer',
]);

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/u;

export function normalizeWaitlistPayload(payload) {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
    throw new WaitlistValidationError('invalid_request', 'A JSON object is required.');
  }

  if (typeof payload.email !== 'string') {
    throw new WaitlistValidationError('invalid_email', 'A valid email address is required.');
  }

  const email = payload.email.trim().toLowerCase();
  if (email.length < 3 || email.length > 254 || !EMAIL_PATTERN.test(email)) {
    throw new WaitlistValidationError('invalid_email', 'A valid email address is required.');
  }

  const locale = payload.locale ?? 'en';
  if (typeof locale !== 'string' || !ALLOWED_LOCALES.has(locale)) {
    throw new WaitlistValidationError('invalid_locale', 'The selected locale is not supported.');
  }

  const source = payload.source ?? 'homepage_waitlist';
  if (typeof source !== 'string' || !ALLOWED_SOURCES.has(source)) {
    throw new WaitlistValidationError('invalid_source', 'The signup source is not supported.');
  }

  return {
    email,
    locale,
    source,
    consentVersion: 'waitlist-v1',
  };
}
