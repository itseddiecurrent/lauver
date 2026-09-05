# Waitlist Implementation Plan

## Goal

Add a prominent “Join the waitlist” entry point to the Lauver homepage so visitors can submit their email address and receive product updates when the MVP is ready.

The site will continue to be hosted on GitHub Pages, while the existing Supabase project will store waitlist subscriptions.

## Current State

- The homepage is implemented in `index.html`.
- English and Chinese translations are stored in `src/i18n.js`.
- The project already initializes Supabase in `src/supabase.js`.
- GitHub Actions supplies the Supabase URL and publishable key during production builds.
- The current contact form only simulates success with a timer. It does not save or send submitted information.

## 1. Add a Prominent Waitlist Entry Point

**Status: Done**

- Add a “Join the waitlist” button to the navigation and hero area.
- Link both buttons to a dedicated waitlist section on the homepage.
- Keep the form intentionally short:
  - Email address
  - “Join the waitlist” submit button
  - A short consent and privacy statement
- Keep the existing general contact form separate from the waitlist, or simplify the contact section if it is no longer needed.
- Add all new text in both English and Chinese through `src/i18n.js`.
- Ensure the section works well on desktop and mobile.

## 2. Create a Supabase Waitlist Table

**Status: Done** — Created in Supabase with Row Level Security enabled.

Create a `waitlist_signups` table with these suggested fields:

| Field | Purpose |
| --- | --- |
| `id` | Unique record identifier |
| `email` | Normalized subscriber email address |
| `locale` | Language used when the visitor subscribed |
| `source` | Form location, such as `homepage_hero` or `homepage_footer` |
| `status` | Subscription state, defaulting to `subscribed` |
| `created_at` | Subscription timestamp |

Database requirements:

- Normalize email addresses before storage.
- Add a unique constraint on the normalized email address to prevent duplicates.
- Enable Row Level Security.
- Do not allow anonymous visitors to read, update, or delete waitlist records.
- Keep privileged database credentials out of the frontend.

## 3. Add a Secure Submission Endpoint

**Status: Done** — Deployed to Supabase and verified with new, duplicate, invalid-email, and CORS requests.

Create a Supabase Edge Function, such as `join-waitlist`, to receive form submissions.

The function should:

- Accept an email address, locale, and source.
- Normalize and validate the email server-side.
- Insert the subscription into `waitlist_signups`.
- Treat an already-subscribed email as a successful request.
- Return generic errors without exposing database details.
- Allow browser requests from `https://lauver.ai` and approved local development origins.
- Keep the Supabase service-role key available only inside the Edge Function.
- Optionally verify a Cloudflare Turnstile token to reduce automated spam.

The public Supabase publishable key may remain in the browser. It is designed for frontend use and is already included in the GitHub Pages build.

## 4. Implement the Frontend Form

**Status: Done** — Connected locally to the deployed Edge Function with accessible loading, success, and error states.

Connect the homepage form to the Supabase Edge Function and support these states:

- Empty or invalid email feedback
- Loading state while the request is running
- Disabled submit button during submission
- Success message, for example: “You’re on the list—we’ll let you know when Lauver is ready.”
- Friendly retry message for network or server failures
- Duplicate submissions displayed as success

Accessibility requirements:

- Use an explicit label for the email input.
- Support keyboard submission.
- Announce success and error messages with an appropriate live region.
- Preserve visible focus states.
- Do not communicate status using color alone.

## 5. Prepare for Sending Product Updates

Supabase will store subscribers but will not serve as the newsletter delivery platform.

Before sending updates:

- Connect the stored list to an email provider such as Resend, Loops, Buttondown, or Mailchimp.
- Add unsubscribe handling to every marketing email.
- Consider sending a confirmation email immediately after signup.
- Add a privacy-policy link beside the waitlist form.
- Record consent clearly enough to support the regions where Lauver will operate.

## 6. Update Project Configuration

- Reuse the client in `src/supabase.js` where appropriate.
- Confirm these GitHub repository secrets remain configured:
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_PUBLISHABLE_KEY`
- Add any Edge Function secrets through Supabase rather than GitHub Pages or frontend code.
- Replace the obsolete Firebase variables in `.env.example` with the current Supabase variables.
- Never commit service-role credentials or production secrets.

## 7. Test the Complete Flow

Test locally and in production with the following cases:

- A valid new email address
- An email address that is already subscribed
- An invalid email address
- An empty submission
- Keyboard submission
- A network or server failure
- English and Chinese language modes
- Mobile and desktop layouts
- Spam protection, if Turnstile is enabled

After deployment:

1. Submit a dedicated test email on `https://lauver.ai`.
2. Confirm that a row appears in the Supabase table.
3. Confirm that the page shows the correct success state.
4. Confirm that submitting the same address again does not create a duplicate.
5. Check the browser console and Supabase logs for unexpected errors.

## 8. Deploy

1. Implement and test the changes locally.
2. Commit the homepage, translation, Supabase function, migration, and configuration changes.
3. Push the commit to the `main` branch.
4. Verify that the GitHub Pages workflow completes successfully.
5. Run the production checks on `https://lauver.ai`.

## Recommended Delivery Order

1. Create the Supabase database migration and security rules.
2. Implement and deploy the Edge Function.
3. Add the homepage waitlist UI and translations.
4. Connect the form to the Edge Function.
5. Add consent copy and a privacy-policy link.
6. Test locally and in production.
7. Connect an email delivery provider when product updates are ready to send.

## Definition of Done

The waitlist is complete when:

- Visitors can find the waitlist call to action without scrolling extensively.
- A visitor can subscribe using only an email address.
- Valid subscriptions are securely stored in Supabase.
- Duplicate submissions do not create duplicate records.
- Errors and success states are accessible and understandable.
- English and Chinese versions are available.
- No privileged credential is included in the frontend bundle.
- A production signup through `lauver.ai` has been verified end to end.
