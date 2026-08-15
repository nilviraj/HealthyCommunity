This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email Setup

To send contact form submissions to your inbox, create `.env.local` in project root and add values below:

```bash
touch .env.local
```

Required values:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
RESEND_API_KEY=re_xxxxxxxxx
CONTACT_FORM_FROM="Healthy Community <onboarding@resend.dev>"
CONTACT_FORM_TO=you@example.com
```

Optional production values:

```bash
NEXT_PUBLIC_FACEBOOK_URL=https://www.facebook.com/your-page
NEXT_PUBLIC_INSTAGRAM_URL=https://www.instagram.com/your-handle
NEXT_PUBLIC_YOUTUBE_URL=https://www.youtube.com/@your-channel
SITEMAP_LAST_MODIFIED=2026-08-02
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_ADSENSE_CLIENT_ID=ca-pub-XXXXXXXXXXXXXXXX
```

Notes:

- `NEXT_PUBLIC_SITE_URL` must match the deployed canonical origin.
- `CONTACT_FORM_TO` supports comma-separated recipients.
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` enables Google Analytics 4.
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` enables the AdSense loader script.
- `public/ads.txt` should contain your real AdSense publisher ID before launch.
- Restart the dev server after changing environment variables.

## Google Analytics And AdSense

1. Create a GA4 property and copy the measurement ID that starts with `G-`.
2. Add `NEXT_PUBLIC_GA_MEASUREMENT_ID` to your production environment.
3. Create an AdSense account, then replace the placeholder in `public/ads.txt` with your real publisher ID.
4. Add `NEXT_PUBLIC_ADSENSE_CLIENT_ID` to your production environment.
5. Redeploy the app so the scripts and `ads.txt` file are live.
6. Wait for AdSense review and approval before expecting ads to appear.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
