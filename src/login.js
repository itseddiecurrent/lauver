import { supabase } from './supabase.js';

// Already logged in → go to dashboard
supabase.auth.getSession().then(({ data: { session } }) => {
  if (session) window.location.href = 'dashboard.html';
});

let mode = 'signin'; // 'signin' | 'signup'

// ── Tab switching ────────────────────────────────
const tabSignin   = document.getElementById('tab-signin');
const tabSignup   = document.getElementById('tab-signup');
const nameGroup   = document.getElementById('name-group');
const submitBtn   = document.getElementById('submit-btn');
const formTitle   = document.getElementById('form-title');
const formSubtitle = document.getElementById('form-subtitle');
const switchLink  = document.getElementById('switch-link');
const switchText  = document.getElementById('switch-text');

function setMode(m) {
  mode = m;
  tabSignin.classList.toggle('active', m === 'signin');
  tabSignup.classList.toggle('active', m === 'signup');
  nameGroup.style.display   = m === 'signup' ? 'flex' : 'none';
  submitBtn.textContent     = m === 'signin' ? 'Sign In' : 'Create Account';
  formTitle.textContent     = m === 'signin' ? 'Welcome back' : 'Join the pack';
  formSubtitle.textContent  = m === 'signin'
    ? 'Sign in to your Lauver account'
    : 'Create your free Lauver account';
  switchText.textContent    = m === 'signin' ? "Don't have an account? " : 'Already have an account? ';
  switchLink.textContent    = m === 'signin' ? 'Sign up' : 'Sign in';
  clearError();
}

tabSignin.addEventListener('click', () => setMode('signin'));
tabSignup.addEventListener('click', () => setMode('signup'));
switchLink.addEventListener('click', (e) => {
  e.preventDefault();
  setMode(mode === 'signin' ? 'signup' : 'signin');
});

// ── Google sign-in ───────────────────────────────
document.getElementById('btn-google').addEventListener('click', async () => {
  clearError();
  setLoading(true, 'btn-google');
  const redirectTo = new URL('dashboard.html', window.location.href).href;
  const { error } = await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: { redirectTo },
  });
  if (error) {
    setLoading(false, 'btn-google');
    showError(friendlyError(error.message));
  }
  // on success the browser redirects to Google — no further action needed
});

// ── Email / password form ────────────────────────
document.getElementById('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearError();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  setLoading(true, 'submit-btn');
  let error;

  if (mode === 'signin') {
    ({ error } = await supabase.auth.signInWithPassword({ email, password }));
  } else {
    const name = document.getElementById('name').value.trim();
    ({ error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } },
    }));
  }

  if (error) {
    setLoading(false, 'submit-btn');
    showError(friendlyError(error.message));
    return;
  }

  window.location.href = 'dashboard.html';
});

// ── Helpers ──────────────────────────────────────
function showError(msg) {
  const el = document.getElementById('auth-error');
  el.textContent = msg;
  el.style.display = 'block';
}
function clearError() {
  const el = document.getElementById('auth-error');
  el.style.display = 'none';
}
function setLoading(on, btnId) {
  const btn = document.getElementById(btnId);
  btn.disabled = on;
  btn.style.opacity = on ? '.6' : '1';
}
function friendlyError(message) {
  if (!message) return 'Something went wrong. Please try again.';
  const m = message.toLowerCase();
  if (m.includes('invalid login credentials') || m.includes('invalid email or password'))
    return 'Incorrect email or password.';
  if (m.includes('user already registered') || m.includes('already been registered'))
    return 'An account already exists with this email.';
  if (m.includes('password should be at least'))
    return 'Password must be at least 6 characters.';
  if (m.includes('unable to validate email address'))
    return 'Please enter a valid email address.';
  if (m.includes('email rate limit') || m.includes('too many requests'))
    return 'Too many attempts. Please try again later.';
  if (m.includes('network') || m.includes('fetch'))
    return 'Network error. Check your connection.';
  return 'Something went wrong. Please try again.';
}
