# GetLogix Coming Soon Multi-Client Landing Page

A minimal, clean single-page React app for "Coming Soon" landing pages, branded by GetLogix, with per-domain business info (logo, name, contact, countdown timer). Easily deployable to any domain, with business info controlled via a config file.

## Features
- Persistent GetLogix header
- Per-domain business info (logo, name, contact)
- Configurable and hidable countdown timer
- Easy config for new businesses/domains
- Minimal, responsive design

## Quick Start
1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Run locally:**
   ```sh
   npm run dev
   ```
3. **Open:**
   Visit [http://localhost:5173](http://localhost:5173)

## Deployment
- Deploy the built static site to any static host (Vercel, Netlify, GitHub Pages, etc.).
- Make sure the `config/business.json` and logo images are included in the deployed `public/` folder.
- Point your domain(s) to the deployed site.

## Adding a New Business/Domain
1. **Add logo:** Place the logo image in `public/` (e.g., `public/mybiz-logo.png`).
2. **Edit config:** Add a new entry in `config/business.json`:
   ```json
   "mydomain.com": {
     "businessName": "My Business",
     "logo": "/public/mybiz-logo.png",
     "contact": {
       "email": "hello@mydomain.com",
       "phone": "+1-123-456-7890"
     },
     "countdown": {
       "enabled": true,
       "targetDate": "2026-12-31T23:59:59Z"
     }
   }
   ```
3. **Deploy:** Redeploy the site. The app will auto-detect the domain and show the correct info.

## Configuration Reference (`config/business.json`)
- Top-level keys are domain names (e.g., `example.com`).
- `default` is used if no domain matches.
- Each business config:
  - `businessName`: Display name
  - `logo`: Path to logo image
  - `contact.email`: Contact email
  - `contact.phone`: Contact phone
  - `countdown.enabled`: Show/hide countdown
  - `countdown.targetDate`: ISO date string for countdown

## Customization
- Edit styles in `src/App.jsx` and `src/components/` as needed.
- Replace logo placeholders in `public/` with real images.

## License
MIT
