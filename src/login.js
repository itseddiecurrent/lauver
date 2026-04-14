import { auth } from './firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

// Already logged in → go to dashboard
onAuthStateChanged(auth, (user) => {
  if (user) window.location.href = 'dashboard.html';
});

const provider = new GoogleAuthProvider();
let mode = 'signin'; // 'signin' | 'signup'

// ── Tab switching ────────────────────────────────
const tabSignin = document.getElementById('tab-signin');
const tabSignup = document.getElementById('tab-signup');
const nameGroup = document.getElementById('name-group');
const submitBtn = document.getElementById('submit-btn');
const formTitle = document.getElementById('form-title');
const formSubtitle = document.getElementById('form-subtitle');
const switchLink = document.getElementById('switch-link');
const switchText = document.getElementById('switch-text');

function setMode(m) {
  mode = m;
  tabSignin.classList.toggle('active', m === 'signin');
  tabSignup.classList.toggle('active', m === 'signup');
  nameGroup.style.display      = m === 'signup' ? 'flex' : 'none';
  submitBtn.textContent        = m === 'signin' ? 'Sign In' : 'Create Account';
  formTitle.textContent        = m === 'signin' ? 'Welcome back' : 'Join the pack';
  formSubtitle.textContent     = m === 'signin'
    ? 'Sign in to your Lauver account'
    : 'Create your free Lauver account';
  switchText.textContent       = m === 'signin' ? "Don't have an account? " : 'Already have an account? ';
  switchLink.textContent       = m === 'signin' ? 'Sign up' : 'Sign in';
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
  try {
    await signInWithPopup(auth, provider);
    window.location.href = 'dashboard.html';
  } catch (err) {
    setLoading(false, 'btn-google');
    showError(friendlyError(err.code));
  }
});

// ── Email / password form ────────────────────────
document.getElementById('auth-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  clearError();
  const email    = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  setLoading(true, 'submit-btn');
  try {
    if (mode === 'signin') {
      await signInWithEmailAndPassword(auth, email, password);
    } else {
      const name = document.getElementById('name').value.trim();
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      if (name) await updateProfile(user, { displayName: name });
    }
    window.location.href = 'dashboard.html';
  } catch (err) {
    setLoading(false, 'submit-btn');
    showError(friendlyError(err.code));
  }
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
function friendlyError(code) {
  const map = {
    'auth/invalid-email':          'Please enter a valid email address.',
    'auth/user-not-found':         'No account found with this email.',
    'auth/invalid-credential':     'Incorrect email or password.',
    'auth/wrong-password':         'Incorrect password.',
    'auth/email-already-in-use':   'An account already exists with this email.',
    'auth/weak-password':          'Password must be at least 6 characters.',
    'auth/too-many-requests':      'Too many attempts. Please try again later.',
    'auth/popup-closed-by-user':   'Sign-in popup was closed.',
    'auth/popup-blocked':          'Popup blocked by browser. Please allow popups for this site.',
    'auth/network-request-failed': 'Network error. Check your connection.',
  };
  return map[code] || 'Something went wrong. Please try again.';
}
