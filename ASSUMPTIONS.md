# Adjila School assumptions

During the autonomous scaffolding of the Adjila School website, the following assumptions were made:

- **Social Media Links**: The exact URLs for Facebook and Instagram were not provided. They are set to `#` as placeholders in `src/content/site.ts`.
- **Opening Hours**: Opening hours were marked as UNKNOWN. In `messages/ar.json` and other localization files, the hours string is set to a placeholder (e.g., "يُحدد لاحقاً" / "À déterminer" / "TBD").
- **Programs List**: We created 6 realistic placeholder programs in `src/content/programs.ts`. The school owner MUST edit this file to reflect the true catalog of programs.
- **Placeholder Imagery**: Uses placeholder Unsplash URLs in `src/app/[locale]/gallery/page.tsx` and text placeholders for the school building/director in the About page.
- **Faculty & Testimonials**: Hardcoded placeholder strings were used on their respective pages (`/faculty`, `/testimonials`). These need CMS integration or manual TS data updates eventually.
- **Downloads / Brochures**: The download link in the Admissions page points to `#`. A real PDF brochure needs to be placed in the `/public` folder and linked.
- **Google Maps Embed**: The iframe map uses a generic El Bayadh coordinate based on the Plus Code. The exact Google Maps embed URL should be replaced in `src/content/site.ts`.
- **Resend API Key**: To send emails via the contact form, a valid `RESEND_API_KEY` is required in `.env.local`. If absent, the form gracefully falls back to a `mailto:` link.
