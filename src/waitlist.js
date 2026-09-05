import { getLang, translate } from './i18n.js';
import { submitWaitlistSignup } from './waitlist-client.mjs';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

function setTranslatedText(element, key) {
  element.dataset.i18n = key;
  element.textContent = translate(key);
}

export function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  if (!form) return;

  const emailInput = document.getElementById('waitlist-email');
  const submitButton = form.querySelector('.waitlist-submit');
  const status = document.getElementById('waitlist-status');

  if (!emailInput || !submitButton || !status) return;

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      emailInput.focus();
      return;
    }

    submitButton.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.className = 'waitlist-status';
    delete status.dataset.i18n;
    status.textContent = '';
    setTranslatedText(submitButton, 'waitlist.sending');

    try {
      await submitWaitlistSignup({
        supabaseUrl: SUPABASE_URL,
        publishableKey: SUPABASE_PUBLISHABLE_KEY,
        email: emailInput.value,
        locale: getLang(),
      });

      form.reset();
      status.classList.add('success');
      setTranslatedText(status, 'waitlist.success');
    } catch {
      status.classList.add('error');
      setTranslatedText(status, 'waitlist.error');
    } finally {
      submitButton.disabled = false;
      form.removeAttribute('aria-busy');
      setTranslatedText(submitButton, 'waitlist.btn');
    }
  });
}
