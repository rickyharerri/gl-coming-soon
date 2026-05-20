# Project Summary: GetLogix Multi-Client Coming Soon Page

## Purpose
A single React app for "Coming Soon" landing pages, easily rebranded for multiple clients/domains, always showing GetLogix as the development firm.

## Design Decisions
- **Config-driven:** All business info is in `config/business.json`, keyed by domain. No code changes needed for new clients.
- **Static hosting:** Works on any static host (Vercel, Netlify, GitHub Pages, etc.).
- **No backend:** All logic is client-side for simplicity and portability.
- **Minimal dependencies:** Only React and Vite for fast builds and easy maintenance.
- **Branding:** GetLogix header is always present at the top.
- **Countdown:** Optional per-client, configurable and hidable.

## Limitations
- **Static config:** Changing business info requires redeploying the site.
- **No authentication:** Anyone can view any domain's landing page.
- **No dynamic updates:** For real-time updates, a backend or CMS would be needed.

## How to Extend
- Add more fields to `business.json` as needed (e.g., social links).
- Add more components for richer landing pages.
- Integrate with a backend if dynamic updates are required.

## Contact
Developed by GetLogix
