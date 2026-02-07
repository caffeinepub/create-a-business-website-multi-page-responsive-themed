# Specification

## Summary
**Goal:** Update site-wide branding to include the phrase “MOBILE STORE AND REPAIRING CENTER” and align default SEO text with the updated business identity.

**Planned changes:**
- Update the centralized branding/content config (frontend/src/content/siteConfig.ts) to include “MOBILE STORE AND REPAIRING CENTER” (preferably in the existing tagline field).
- Ensure the header (desktop, mobile, and mobile menu) renders the updated branding wherever it reads from the centralized configuration.
- Ensure the footer renders the updated branding text if it displays tagline/branding from the centralized configuration.
- Update frontend/index.html SEO defaults so the static HTML title and meta description include “IQRA COMMUNICATION” and “MOBILE STORE AND REPAIRING CENTER”, and remove/avoid any conflicting unrelated business-type SEO text.

**User-visible outcome:** Visitors see “IQRA COMMUNICATION” with “MOBILE STORE AND REPAIRING CENTER” consistently in the header (including mobile menu) and footer (where applicable), and the browser title/meta description reflect the same branding.
