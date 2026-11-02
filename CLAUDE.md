# TrashApps Entertainment website

Static GitHub Pages site (plain HTML/CSS, no build step). Home page is `index.html`; each game has its own folder with an `index.html`.

## Writing rules for reader-facing text

Apply these to every visible string: headings, paragraphs, taglines, list items, button labels, `alt`/`aria-label` text, and the `<title>`, meta, Open Graph, Twitter and JSON-LD descriptions.

Run new or edited copy through the `/humanizer:humanizer` skill before committing. In practice that means:

- State things directly. No "not X, but Y" / "No X here, Y" contrasts, no one-word closers ("Literally."), no fragment rows.
- No forced triads ("heart, humor, and chaos", "fun, quirky, and weird"). List three things only when there are three real things.
- No em dashes or spaced dashes as connectors. Use a comma, colon, period or parentheses. En dashes in number ranges (`2&ndash;3`) are fine.
- No sales words or filler: passionate, vibrant, stunning, immersive, ultimate, epic, explore, dive in, sneak peeks, "all the important info".
- Don't repeat yourself ("a new daily challenge every day").
- Bold only real labels (`<strong>Label:</strong> detail`), never decoration on plain list items or names in body text.
- Headings in sentence case ("Our games", not "Our Games").
- Keep the voice casual and a bit playful, but every sentence should tell the reader a fact about the game.
- Don't invent features, platforms, languages, ratings or dates. Use only what the store listings or the owner confirm.
- Legal text (privacy policy) stays plain and neutral; don't change its meaning.

## SEO rules

- Every page needs a unique `<title>` in the form `Game Name | Genre Game for Platforms` (use `|`, not a second colon), and a meta description of roughly 140–160 characters that names the game, genre, "free" and the platforms.
- Keep `<meta name="description">`, `og:description`, `twitter:description` and the JSON-LD `MobileApplication.description` in sync on each game page. The home page card text and its JSON-LD descriptions must match the game page taglines.
- One `<h1>` per page (the game or studio name). Section `<h2>`s should carry the keyword naturally, e.g. "About Tap Drag Racer", "Game features".
- Specific `alt` and `aria-label` text: "Get Tap Drag Racer on Google Play", not "Get it on Google Play". App Store badge alt is "Download on the App Store".
- Write the search phrases people actually use (e.g. "drag racing game", "trivia game", "map guessing game") into the first paragraph, but only where they read naturally. No keyword stuffing.
- When adding a page: add a canonical link, OG/Twitter tags, `MobileApplication` + `BreadcrumbList` JSON-LD, an entry in `sitemap.xml`, and cross-links in the "More from TrashApps" lists.
- When a page's content changes, update its `<lastmod>` in `sitemap.xml`.
- After editing JSON-LD, check it still parses as valid JSON.
