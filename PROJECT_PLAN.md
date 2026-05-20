# Project Plan: GetLogix Multi-Client Coming Soon Page

## 1. Project Setup
- [x] Initialize Vite React app
- [x] Install dependencies
- [x] Create config and components folders

## 2. Core Implementation
- [x] Persistent GetLogix header
- [x] Config system for per-domain business info
- [x] Main landing page: business logo, name, contact, countdown
- [x] Countdown timer (configurable/hidable)

## 3. Multi-Domain Support
- [x] Domain-based config selection
- [x] Fallback to default config

## 4. Documentation & Polish
- [x] README.md (setup, deploy, add business)
- [x] CLAUDE.md (summary, design, limitations)
- [x] PROJECT_PLAN.md (this file)
- [x] Sample config and logo placeholders

## 5. Deployment & Verification
- [ ] Test with multiple domain configs
- [ ] Deploy to static host
- [ ] Verify branding, info, and countdown

---

## How to Deploy
1. Build the app:
   ```sh
   npm run build
   ```
2. Deploy the `dist/` folder to your static host (Vercel, Netlify, GitHub Pages, etc.).
3. Point your domain(s) to the deployed site.

## How to Add a New Business
1. Add logo image to `public/`.
2. Add a new entry in `config/business.json` for the domain.
3. Redeploy the site.
