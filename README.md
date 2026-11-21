# Adjila School Website

A modern, production-ready, multilingual website for Adjila School. Built with Next.js 15, Tailwind CSS v4, next-intl, and shadcn/ui.

## Quick Start

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Set up environment variables. Create a `.env.local` file:
   ```env
   RESEND_API_KEY=your_resend_api_key_here
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the site.

## Content Management

Since this site does not use a traditional CMS, the content is managed in TypeScript and JSON files:
- **Global Config**: Edit `src/content/site.ts` to change the school name, phone numbers, email, social links, and Google Maps embed URL.
- **Programs**: Edit `src/content/programs.ts` to add, remove, or modify the courses offered.
- **FAQs**: Edit `src/content/faq.ts` to modify the frequently asked questions.
- **Translations**: Edit the JSON files in `/messages` (`ar.json`, `fr.json`, `en.json`) to change UI strings and page content for each language.

## Design System

The site uses Tailwind CSS v4. Colors, border radius, and custom design tokens are configured natively via CSS variables and the `@theme` directive in `src/app/globals.css`.

## Deployment

This project is optimized for deployment on Vercel. 
Simply push to your GitHub repository, import the project in Vercel, and ensure `RESEND_API_KEY` is set in the environment variables settings.

## Note on Assumptions

Please review the `ASSUMPTIONS.md` file for a list of placeholders and missing information that needs to be updated before going live.
