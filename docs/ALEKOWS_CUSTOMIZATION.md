# Alekows customization

This fork (branch `alekows`) reskins ClassroomIO as the Alekows academy. The upstream project is AGPL-3.0, so a small "Source code" link to this fork stays visible.

## Theme

- The `alekows` theme is the default. `resolveTheme()` in `apps/dashboard/src/lib/utils/functions/theme.ts` maps an empty theme and the old `blue` default to `alekows`, and `app.html` sets `data-theme="alekows"` on first paint.
- Tokens live in `apps/dashboard/src/app.css` under `body[data-theme='alekows']`: navy `#0e1a24`, gold `#d2b676`, cream `#f2ece0`, serif headings (Source Serif 4) and Inter body text. The fonts are served from `apps/dashboard/static/fonts/alekows`.
- The dashboard sidebar is navy (`[data-sidebar='sidebar']` overrides).
- Login, signup and the other auth screens are navy with gold buttons (`.auth-ui-background` overrides).
- Public academy pages (org landing page, course pages, learner menu) are forced to navy and gold whichever landing template is picked, through `[data-landing-theme]` overrides. Wrapping a word of a hero heading in `<em>` shows it in gold italics.
- Settings → Organisation → Theme lists the Alekows swatch first. The plain blue swatch was removed, because blue now resolves to Alekows.

## Branding

- Logos, favicon and manifest use the Alekows "A" mark.
- Student-facing titles say "Alekows Academy". "Powered by" banners are replaced with a "Source code" link.

## Sign-in

- The "Continue with Google" button is hidden unless `PUBLIC_GOOGLE_AUTH_ENABLED=true` is set on the dashboard and Google OAuth is configured on the API.

## Deployment

- Railway project with services `api`, `dashboard`, Postgres and Redis. Both apps deploy from branch `alekows`, so the dashboard and API always come from the same commit.
- CI (`.github/workflows/alekows-build.yml`) checks formatting and builds the API and dashboard on every push.

## Starter courses

- The Universal Credit course ships in Turkish, Bulgarian and English. The sources are in `docs/alekows-courses/universal-credit/*.md`, and every figure comes from GOV.UK.
- `python3 docs/alekows-courses/generate.py` turns them into `apps/api/src/services/alekows/universal-credit-courses.ts`. Run prettier on that file afterwards.
- When the API starts in self-hosted mode, `bootstrapAlekowsAcademy()` publishes each course into the organization through the course-import pipeline. It also renames the organization to "Alekows Academy" the first time. Each course is keyed by its import-draft idempotency key, so restarts never duplicate a course, and later edits or deletions made in the dashboard are never overwritten.
- Lesson content is stored under the `en` and `tr` locales, because the lesson viewer shows only the reader's own locale. The database has no Bulgarian locale, so the Bulgarian course is a separate course.
