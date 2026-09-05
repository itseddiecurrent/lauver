const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const i18n = fs.readFileSync(path.join(root, 'src/i18n.js'), 'utf8');

function sectionById(id) {
  const match = html.match(new RegExp(`<section[^>]+id="${id}"[^>]*>[\\s\\S]*?<\\/section>`));
  assert.ok(match, `Expected a section with id="${id}"`);
  return match[0];
}

test('navigation and hero link to the waitlist section', () => {
  const nav = html.match(/<nav[\s\S]*?<\/nav>/)?.[0] ?? '';
  const hero = sectionById('home');

  assert.match(nav, /href="#waitlist"[^>]+data-i18n="nav\.waitlist"/);
  assert.match(hero, /href="#waitlist"[^>]+data-i18n="hero\.waitlist"/);
});

test('waitlist section contains the compact email form and consent copy', () => {
  const waitlist = sectionById('waitlist');

  assert.match(waitlist, /<form[^>]+id="waitlist-form"/);
  assert.doesNotMatch(waitlist, /onsubmit=/);
  assert.match(waitlist, /<input[^>]+type="email"[^>]+id="waitlist-email"[^>]+autocomplete="email"[^>]+required/);
  assert.match(waitlist, /<button[^>]+type="submit"[^>]+data-i18n="waitlist\.btn"/);
  assert.match(waitlist, /data-i18n="waitlist\.consent"/);
  assert.match(waitlist, /role="status"[^>]+aria-live="polite"/);
  assert.match(html, /import \{ initWaitlistForm \} from '\/src\/waitlist\.js'/);
});

test('all waitlist copy is available in English and Chinese', () => {
  const waitlist = sectionById('waitlist');
  const keys = [
    ...waitlist.matchAll(/data-i18n(?:-html|-ph)?="([^"]+)"/g),
    ...html.matchAll(/data-i18n="(nav\.waitlist|hero\.waitlist)"/g),
  ].map((match) => match[1]);

  const enStart = i18n.indexOf('  en: {');
  const zhStart = i18n.indexOf('  zh: {', enStart);
  const dictionaryEnd = i18n.indexOf('\n};', zhStart);
  const en = i18n.slice(enStart, zhStart);
  const zh = i18n.slice(zhStart, dictionaryEnd);

  for (const key of new Set(keys)) {
    assert.ok(en.includes(`'${key}':`), `Missing English translation for ${key}`);
    assert.ok(zh.includes(`'${key}':`), `Missing Chinese translation for ${key}`);
  }
});

test('waitlist layout adapts for tablet and mobile widths', () => {
  assert.match(html, /@media \(max-width: 900px\)[\s\S]*?\.waitlist-inner\s*\{\s*grid-template-columns:\s*1fr/);
  assert.match(html, /@media \(max-width: 640px\)[\s\S]*?\.waitlist-form-fields\s*\{\s*grid-template-columns:\s*1fr/);
  assert.match(html, /@media \(max-width: 640px\)[\s\S]*?\.nav-mobile-cta\s*\{[\s\S]*?display:\s*inline-flex/);
});
