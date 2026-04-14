import { supabase } from './supabase.js';

// Guard — redirect to login if not authenticated
supabase.auth.getSession().then(({ data: { session } }) => {
  if (!session) {
    window.location.href = 'login.html';
    return;
  }
  renderUser(session.user);
});

function renderUser(user) {
  const meta = user.user_metadata || {};
  const displayName = meta.full_name || meta.name || user.email.split('@')[0];

  document.getElementById('user-name').textContent  = displayName;
  document.getElementById('user-email').textContent = user.email;

  const avatar   = document.getElementById('user-avatar');
  const fallback = document.getElementById('user-avatar-fallback');
  const avatarUrl = meta.avatar_url || meta.picture;

  if (avatarUrl) {
    avatar.src = avatarUrl;
    avatar.style.display    = 'block';
    fallback.style.display  = 'none';
  } else {
    fallback.textContent   = displayName[0].toUpperCase();
    fallback.style.display = 'flex';
    avatar.style.display   = 'none';
  }

  const provider = user.app_metadata?.provider || 'email';
  document.getElementById('provider-badge').textContent =
    provider === 'google' ? 'Google Account' : 'Email Account';
}

document.getElementById('btn-signout').addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = 'index.html';
});
