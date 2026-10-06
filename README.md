# Physics Inspired Computing and Sensing (SPINUC)

Website for **Physics Inspired Computing and Sensing (SPINUC)** (the Upadhyaya Group) at Purdue ECE: magnetism, classical and quantum spintronics, and next-generation information processing.

This is a static site (`index.html` at the repository root), ready for Purdue Apache hosting and a separate GitHub Pages preview. No build step is required.

## GitHub repository and preview

The source repository is [SanjeevKhare/spinuc-lab](https://github.com/SanjeevKhare/spinuc-lab). It is separate from the personal website repository `SanjeevKhare.github.io`; do not change that repository or its domain configuration.

Push updates to this repository's `main` branch using the existing GitHub SSH key:

```bash
git push origin main
```

To enable a browser preview, open this repository's **Settings → Pages**, select **Deploy from a branch**, and choose **main / (root)**. Once GitHub completes deployment, the project preview is `https://sanjeevkhare.github.io/spinuc-lab/`. The current GitHub Pages address redirects to `https://sanjeevkhare.com/spinuc-lab/` through the account's existing custom domain. This project path is separate from the personal homepage. Check the deployment status before sharing the preview. Keep relative links and do not add a `CNAME` file for the personal website's domain.

## Local preview

Open `index.html` in a browser, or from this directory:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Maintaining the site

All six HTML pages include their own accessible navigation and footer. Keep those shared sections consistent when editing. `assets/css/style.css` controls the responsive design; `assets/js/site.js` handles the mobile menu. The homepage illustration is a decorative SVG, not simulation data.

The publication source array remains in `assets/js/publications.js`. Its renderer supports combined title/author/journal search, year and topic filters, and chronological sorting. Citation counts in the source are historical snapshots and are not displayed as live metrics. Review imported bibliographic records before publishing; this design update does not verify their accuracy or the current group roster.

Before publishing, preview all pages at desktop and phone widths, check keyboard navigation and the publication controls, and confirm local links and image paths. See `agents.md` for contributor instructions.

## Purdue branding and hosting

See `BRANDING.md` for official sources, logo provenance, typography licensing, and the review boundary. The full group name is Physics Inspired Computing and Sensing; SPINUC is its acronym. The university logo and group title are separate identity elements. All six pages include the university masthead and policy footer.

For Purdue Apache/General hosting, upload the HTML pages and `assets/` directory to the public website folder provided by Purdue IT. Keep the folder structure intact. Purdue-hosted fonts activate on Purdue domains; local and GitHub previews use system fallback fonts. `index.html` is the entry page. No build tool, database, or server-side runtime is needed.

## Provisioned ECN Apache site

- Public URL: https://engineering.purdue.edu/Spinuc/
- SSH host: `min.ecn.purdue.edu`
- Hosting account: `spinuc`
- Account directory supplied by ECN: `/web/groups/Spinuc`

Inspect existing tmux sessions on the host before starting remote work, and reconnect when appropriate. Run remote work in tmux. Keep passwords and private keys out of this repository.

ECN's [Apache hosting instructions](https://service.purdue.edu/TDClient/32/Purdue/KB/Article/2025/Managing-and-Maintaining-a-Personal-or-Group-Apache-Server) show group sites serving from a `public_html` subdirectory. Inspect `/web/groups/Spinuc` and confirm the document root with ECN before uploading; for the documented layout it is `/web/groups/Spinuc/public_html`. Preserve the existing `private` and `var` directories. Back up any existing site files before replacing them.

Upload the six HTML pages and the `assets/` directory directly into the confirmed document root, then verify the live pages, images, mobile menu, publication filters, and Purdue font loading. Repository documentation and raw bibliography import files do not need to be uploaded to Apache.

## Verified Purdue deployment

The website is live at [engineering.purdue.edu/Spinuc/](https://engineering.purdue.edu/Spinuc/). Its confirmed document root is `/web/groups/Spinuc/public_html`.

The initial owner-only directory modes caused Apache error AH00035 and HTTP 403. The approved working configuration gives the configured `ecnuser` group traversal only: `/web/groups/Spinuc` and `public_html` use mode `0710`. Keep `private` at `0700`; files inside the public document root are `0644`, and asset subdirectories permit traversal. Do not reset the two public path directories to `0700` during uploads. Their group is shared, so group traversal also permits access to other known readable paths under the parent; it does not grant directory listing or writes.

Login as `khare9` on `min.ecn.purdue.edu`, reconnect to the `spinuc-site` tmux session, and use the `spinuc` shell for website updates. Keep credentials out of Git. Preserve ECN's generated Apache configuration.

Deployment verification checked all 20 public files for HTTP 200 and matching content hashes, all six page layouts at desktop and mobile widths, mobile-menu Escape behavior, combined publication filters, and Purdue-domain font stylesheet activation. This is deployment validation, not formal university brand/accessibility approval.
