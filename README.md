# SPINUC Lab

Website for **SPINUC Lab** (the Upadhyaya Group) at Purdue ECE: magnetism, classical and quantum spintronics, and next-generation information processing.

This is a static site (`index.html` at the repo root). It is meant to be served with [GitHub Pages](https://pages.github.com/).

## Publish on GitHub Pages

### 1. Create the repository (private first)

1. On GitHub, create a new repository. Recommended name: `spinuc-lab` (or `USERNAME.github.io` if this should be your account homepage).
2. Set visibility to **Private**.
3. Do **not** add a README, `.gitignore`, or license on GitHub (this folder already has them).

Then from this folder:

```bash
git remote add origin https://github.com/USERNAME/REPO.git
git push -u origin main
```

### 2. What “private” actually means

- A **private repo** hides the source from the public.
- A GitHub Pages **URL is public** once Pages is turned on (anyone with the link can open the site), unless you use GitHub Enterprise Cloud access control.
- On **GitHub Free**, Pages only works from a **public** repository. Keep the repo private while you draft; when you are ready to go live, either:
  - make the repo **public** and enable Pages, or
  - keep it private and enable Pages if you have **GitHub Pro** (personal) or **GitHub Team** (org). The live site is still public.

### 3. Turn on Pages when you are ready

1. Repo → **Settings** → **Pages**.
2. **Build and deployment** → Source: **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`.
4. Save.

After a minute or two the site is at:

| Repo name | URL |
| --- | --- |
| `USERNAME.github.io` | `https://USERNAME.github.io/` |
| Any other name (project site) | `https://USERNAME.github.io/REPO/` |

If you use a project site (`…/spinuc-lab/`), relative links in this repo already work. Do not put the site in a `/docs` subfolder unless you also change the Pages folder setting.

### 4. Later: make the repo public

Settings → **Danger Zone** → **Change repository visibility** → **Public**. The Pages URL stays the same.

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
