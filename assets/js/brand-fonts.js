/* Source: Purdue Brand Studio web templates. Hosted fonts are licensed for Purdue domains. */
(() => {
    const host = location.hostname.toLowerCase();
    if (host !== "purdue.edu" && !host.endsWith(".purdue.edu")) return;
    for (const href of [
        "https://www.purdue.edu/purdue/fonts/united-sans/united-sans.css",
        "https://use.typekit.net/ghc8hdz.css"
    ]) {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = href;
        document.head.appendChild(link);
    }
})();
