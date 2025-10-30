# Copilot instructions for htwei17.github.io

Purpose: make AI coding agents immediately productive in this Jekyll site by capturing the repo’s architecture, workflows, and concrete conventions used here.

## Big picture
- Static site built with Jekyll using the Minimal Mistakes theme.
  - Theme: `minimal-mistakes-jekyll` (Gemfile) with skin `dark` (`_config.yml` -> `minimal_mistakes_skin: "dark"`).
  - Site config and defaults: `_config.yml` (author profile, header overlay image, search, analytics, archives).
  - Navigation text and structure: `_data/navigation.yml`, `_data/ui-text.yml`.
- Layouts: custom math-enabled page layout at `_layouts/single-math.html` which injects MathJax v3 and a favicon link; all pages/posts default to this layout via `_config.yml` defaults.
- Generated output lives in `_site/` and is deployed via GitHub Actions; do not edit files under `_site/`.

## Developer workflows
- Local preview (Ruby/Bundler required):
  - Install: `bundle install`
  - Serve: `bundle exec jekyll serve` then open http://127.0.0.1:4000
  - Note: edits to `_config.yml` require restarting the server (Jekyll doesn’t hot-reload config).
- CI/CD: `.github/workflows/main.yml`
  - On push to `main`: build with Ruby 3.3.4 → `bundle exec jekyll build`.
  - Deploys contents of `_site/` to branch `master` via `peaceiris/actions-gh-pages@v4`.
  - Implication: commit content to `main`; the published site is served from `master`. Don’t commit built files.

## Content conventions
- Pages: top-level Markdown files like `index.md`, `cv.md`, `pub.md` use front matter and the site-wide defaults.
  - Override header image per-page with front matter: `header.overlay_image: "/assets/images/…"`.
  - Embed PDFs like `cv.md` does using an `<embed>` tag pointing to `/assets/files/...`.
- Posts: Markdown files in `_posts/` with Jekyll date filename `YYYY-MM-DD-title.md` and front matter fields like:
  - `title`, `excerpt`, `date`, `categories`, `tags`, `toc: true`.
  - Example pattern: `_posts/2024-01-15-qrt.md` includes `{% include toc.html %}` to render a table of contents with the theme.
- Posts index: `posts.html` renders a descending, numbered list using Liquid (`site.posts`), not the theme’s built-in archive page.
- Navigation: `_data/navigation.yml` drives the header nav order/titles and URLs (e.g., `/`, `/cv`, `/pub`, `/posts/`).
- Assets: place images in `assets/images/` and downloadable files in `assets/files/`. Reference with absolute paths like `/assets/images/logo.png`.

## Math, search, and archives
- Math: `_layouts/single-math.html` loads MathJax v3 (tex-svg) and supports inline math using `$...$` (configures `inlineMath: [['$', '$'], ['\\(', '\\)']]`). Use that layout for any page that needs math (it’s already the default).
- Search: enabled via Lunr (theme default) with `search: true` and `search_full_content: true` in `_config.yml`. No Algolia keys are configured.
- Categories/Tags archives: powered by `jekyll-archives` (Gem + config in `_config.yml`) producing taxonomy pages at `/categories/:name/` and `/tags/:name/` using the theme layout `archive-taxonomy`.

## Key files to know
- `_config.yml`: site metadata, defaults (e.g., `layout: single-math`, `author_profile: true`, header overlay), plugins, archives.
- `_layouts/single-math.html`: adds favicon and MathJax; inherits `layout: single` from the theme.
- `_data/navigation.yml`: site navigation items.
- `.github/workflows/main.yml`: build-and-deploy pipeline (main → master).

## Do and don’t
- Do: edit Markdown under root and `_posts/`; add media under `assets/`.
- Do: keep front matter minimal and rely on `_config.yml` defaults; override only when needed.
- Don’t: edit anything in `_site/` (it’s build output) or push built files.
- Don’t: change the deploy `master` branch without updating the workflow and GitHub Pages settings.

If any of the above seems off (e.g., deploy branch or Ruby version changes), tell me and I’ll update this file accordingly.