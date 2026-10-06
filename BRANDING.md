# Purdue branding implementation

Group: **Physics Inspired Computing and Sensing (SPINUC)**. Principal investigator: **Pramey Upadhyaya**. Sanjeev Khare remains on the homepage as a **Ph.D. candidate**.

## Source guidance

Checked October 6, 2026:

- [Purdue Brand Guidelines, June 2025](https://marcom.purdue.edu/app/uploads/2025/07/508_MM-25-1248800-BrandGuidelines-June2025-V06-1.pdf), pp. 50–51: horizontal logo minimum width 125px; digital clear space equals the capital U height.
- [Logos and Usage](https://www.purdue.edu/brand-studio/brand/logos-usage/): use supplied official assets unchanged; do not fabricate co-brands.
- [Visual Identity](https://www.purdue.edu/brand-studio/brand/visual-identity/): primary gold #CFB991 and black #000000; approved supporting colors; Acumin Pro, United Sans, and Source Serif Pro, with published system substitutes.
- [Web Templates](https://marcom.purdue.edu/toolbox/digital-media/web-templates/) and [Web Content Management](https://marcom.purdue.edu/toolbox/cms/): official favicon and hosted font CSS, licensed for Purdue domains.
- [Engineering design elements](https://engineering.purdue.edu/Communications/web-digital/design-elements): institutional header hierarchy and multi-section footer conventions. This site uses a static layout rather than claiming to be the ECN Zope/Cascade template.
- [Purdue web accessibility guidance](https://www.purdue.edu/brand-studio/digital/compliance/web-accessibility/faq/): WCAG 2.1 AA, keyboard access, contrast, and assistance for linked external content.

## Assets and implementation

`assets/img/purdue-university.svg` and `purdue-university-reverse.svg` are byte-for-byte copies of the RGB horizontal SVG files in the [official logo download](https://www.purdue.edu/brand-studio/wp-content/uploads/2026/07/purdue-university-logo.zip). They are not traced, recolored, cropped, or combined with the group name. The reverse logo is displayed on black. Its masthead and footer wrappers supply clear space. `assets/img/favicon.ico` is from the official favicon linked by Purdue Brand Studio: https://marcom.purdue.edu/favicon.ico.

The full group name appears as ordinary site text beneath SPINUC in a separate white identity section. There is no custom Purdue, College of Engineering, or ECE logo lockup. The older custom logo/favicon assets are retained only as historical files and are not referenced by any page.

Primary typography uses `acumin-pro` and `source-serif-pro`; fallback stacks include Franklin Gothic and Georgia. `assets/js/brand-fonts.js` activates Purdue's font CSS only on Purdue domains. On local or third-party previews the browser uses available system substitutes/fallbacks. The site does not redistribute licensed font binaries. If previews require exact brand fonts on a non-Purdue domain, obtain font licensing guidance before enabling them.

The conceptual spin illustration is decorative scientific artwork, not a logo or numerical result; its colors are gold and gray. Existing research content and publication source records are preserved.

## Review boundary

This implementation follows the cited public guidance. It is not a Purdue-approved template and has not received Purdue Brand Studio/Engineering or institutional accessibility sign-off. Before official launch, submit the rendered site to the appropriate Purdue reviewers and follow any host-specific template requirements. Automated checks and manual desktop/mobile checks do not certify full accessibility or the accessibility of linked third-party sites.

## Validation performed

- All six pages inspected at 1440, 768, 390, and 320 CSS pixels: no horizontal overflow; one main page heading; intact logo with width above the 125px minimum.
- Rendered foreground/background text pairs checked against WCAG AA thresholds on all six pages; no failures in the checked text nodes. This check does not cover all WCAG requirements.
- Mobile menu tested for open/close, navigation visibility, and Escape focus return. Publication search and combined year/topic filtering tested.
- Local file/fragment references, current-page navigation, footer statement, and metadata verified.
- Official SVG/favicon bytes verified against their downloaded sources; publication JavaScript/source records unchanged.
- Font-loading logic tested for Purdue, local, GitHub Pages, and misleading lookalike hostnames.

The site owner chose to retain custom Apache hosting after considering ECN's supported Zope alternative. Custom template maintenance and the final institutional review remain part of this hosting choice.
