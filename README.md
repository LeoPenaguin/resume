# Resume

Personal resume: static HTML, vanilla JavaScript, and Tailwind CSS v4. No framework, no bundler.

## Stack

- Hand-written `index.html` and `app.js` (theme toggle, print, back-to-top)
- Tailwind CSS v4, compiled with the standalone Tailwind CLI
- ESLint + Prettier for `app.js` and the build scripts, enforced on commit via Husky + lint-staged
- `@html-eslint` lints `.html` files too — notably `sort-attrs`, which enforces a logical attribute
  order (`id`, `class`, `type`, ..., grouped `data-*`, then grouped `aria-*`). It's fixable with
  `pnpm lint:fix` or your editor's ESLint integration (e.g. VS Code's "fix on save"), but the
  pre-commit hook only runs Prettier on `.html` files, so ordering issues aren't silently
  auto-fixed on commit

## Commands

```sh
pnpm install
pnpm dev           # serves the project root at http://localhost:4173, rebuilds styles.css on change
pnpm lint
pnpm format        # formats the whole repo with Prettier
pnpm format:check  # checks formatting without writing (used in CI)
pnpm build         # assembles the deployable site into dist/
pnpm preview       # serves dist/ at http://localhost:4173
```

A pre-commit hook (Husky) runs `eslint --fix` and `prettier --write` on staged files automatically.

## Project Structure

- `index.html`: the entire resume content, in place
- `app.js`: the only script, handles theme/print/back-to-top interactions
- `icons.svg`: SVG sprite (`<symbol>`/`<use>`) holding every icon used across the site, so path data isn't duplicated inline
- `src/styles.css`: Tailwind entry point and custom theme/print/accessibility rules
- Root-level static assets (`favicon.*`, `robots.txt`, `sitemap.xml`, `CNAME`, images): copied as-is by the build

## Updating the resume content

Edit `index.html` directly — there is no data file or template step generating it.

## Adding an icon

Add a `<symbol id="name" viewBox="0 0 24 24">...</symbol>` to `icons.svg`, then reference it anywhere with
`<svg class="..."><use href="/icons.svg#name"/></svg>`. No build step needed — this is native SVG, not a template.

## Deployment

The site is deployed to GitHub Pages from the `main` branch. Pull requests run lint and build, but deployment only happens outside PR events.
