# Contributor instructions

- Use four spaces, never tabs, for Julia indentation.
- Keep this a static website: relative links, no build step, and GitHub Pages compatibility.
- Navigation and contact information must remain available without JavaScript.
- Preserve publication source records in assets/js/publications.js and assets/data. Do not invent people, awards, publication details, or research results.
- The spin-texture SVG is a conceptual illustration, not measured or simulated data.
- Check all six pages at desktop and mobile widths. Check menu keyboard behavior, publication search, year/topic filters, and local asset links after changes.
- Honor reduced-motion preferences; avoid continuous decorative animation.
- Update this file when code changes introduce new maintenance requirements.
- On first remote SSH use, inspect existing tmux sessions and reconnect before starting work. Run remote tasks in tmux.
- Use specific, descriptive Git commit messages, group changes logically, and omit AI co-author trailers.

## Purdue branding

- Full group name: Physics Inspired Computing and Sensing. Acronym: SPINUC. Pramey Upadhyaya is PI; Sanjeev Khare is a Ph.D. candidate.
- Follow BRANDING.md and its official Purdue sources. Keep the university logo unchanged; preserve its aspect ratio, at least 125px horizontal width, and clear space at least as high as the capital U. Current CSS uses 210–240px width and 22–24px padding.
- Keep the university logo in its own masthead band and the SPINUC title in a separate site-identity section. Do not construct a Purdue/ECE/group co-brand or reintroduce the custom spin logo as institutional branding.
- Use Purdue's primary gold #CFB991 and black #000000 and documented supporting colors. Recheck text and control contrast against WCAG AA after palette changes.
- Use Acumin Pro/Source Serif Pro, with the published Franklin Gothic/Georgia substitutes. Load Purdue-hosted licensed fonts only on purdue.edu or its subdomains; do not bundle licensed font binaries or activate them on GitHub Pages/local previews.
- Keep the official favicon, university policy links, equal-access statement, and accessibility contact in every page's shared footer.
- University brand/accessibility approval is an external review, not a claim made by automated checks. Do not mark the site university-approved without that review.

## Publishing

- Publish only to `SanjeevKhare/spinuc-lab`. Do not change `SanjeevKhare.github.io`, its domain settings, or its Pages configuration.
- Keep passwords and private keys out of Git. Use the existing SSH key for GitHub pushes.
- Inspect the ECN account directory to confirm the Apache document root before upload; the documented group layout uses `/web/groups/Spinuc/public_html`. Preserve `private`, `var`, and any existing site until backed up.

## ECN deployment permissions

- Confirmed public document root: `/web/groups/Spinuc/public_html`; deployed site: https://engineering.purdue.edu/Spinuc/.
- The user approved mode `0710` on `/web/groups/Spinuc` and `public_html` so the configured `ecnuser` group can traverse the website path. Mode `0700` caused Apache AH00035 / HTTP 403; do not overwrite the working modes during deployment. This group is shared, so do not broaden its permissions further without authorization.
- Keep `/web/groups/Spinuc/private` owner-only (`0700`). Do not grant group writes or directory listing on the two site path directories, and do not edit ECN's generated Apache configuration.
- Use the existing `spinuc-site` tmux session through the `khare9` login, operating in the authenticated `spinuc` shell. Verify live HTTP responses and file hashes after uploads.
