# Resume

Personal resume: static HTML, vanilla JavaScript, and Tailwind CSS v4. No framework, no bundler.

## Stack

- Hand-written `index.html` and `app.js` (theme toggle, print, back-to-top)
- Tailwind CSS v4, compiled with the standalone Tailwind CLI
- ESLint for `app.js` and the build scripts

## Commands

```sh
pnpm install
pnpm dev      # serves the project root at http://localhost:4173, rebuilds styles.css on change
pnpm lint
pnpm build    # assembles the deployable site into dist/
pnpm preview  # serves dist/ at http://localhost:4173
```

## Project Structure

- `index.html`: the entire resume content, in place
- `app.js`: the only script, handles theme/print/back-to-top interactions
- `src/styles.css`: Tailwind entry point and custom theme/print/accessibility rules
- Root-level static assets (`favicon.*`, `robots.txt`, `sitemap.xml`, `CNAME`, images): copied as-is by the build

## Updating the resume content

Edit `index.html` directly — there is no data file or template step generating it.

## Deployment

The site is deployed to GitHub Pages from the `main` branch. Pull requests run lint and build, but deployment only happens outside PR events.
