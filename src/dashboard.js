import { auth } from './firebase.js';
import { onAuthStateChanged, signOut } from 'firebase/auth';

// Guard — redirect to login if not authenticated
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = '/login.html';
    return;
  }
  renderUser(user);
});

function renderUser(user) {
  document.getElementById('user-name').textContent =
    user.displayName || user.email.split('@')[0];
  document.getElementById('user-email').textContent = user.email;

  const avatar = document.getElementById('user-avatar');
  const fallback = document.getElementById('user-avatar-fallback');

  if (user.photoURL) {
    avatar.src = user.photoURL;
    avatar.style.display = 'block';
    fallback.style.display = 'none';
  } else {
    const initial = (user.displayName || user.email)[0].toUpperCase();
    fallback.textContent = initial;
    fallback.style.display = 'flex';
    avatar.style.display = 'none';
  }

  // Show provider badge
  const providers = user.providerData.map(p => p.providerId);
  const badge = document.getElementById('provider-badge');
  badge.textContent = providers.includes('google.com') ? 'Google Account' : 'Email Account';
}

document.getElementById('btn-signout').addEventListener('click', async () => {
  await signOut(auth);
  window.location.href = '/';
});
