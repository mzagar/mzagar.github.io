# mzagar.github.io

Personal home page. Plain HTML, one stylesheet, no build step, no trackers.

## Pages

- `/` — index
- `/about/`
- `/projects/`
- `/triathlon/`
- `/404.html` — custom not-found page
- `/astro-photos/` — separate repository and GitHub Pages site

## Languages

English pages live at the root, Croatian ones under `/hr/`:

- `/` ↔ `/hr/`
- `/about/` ↔ `/hr/about/`
- `/projects/` ↔ `/hr/projects/`
- `/triathlon/` ↔ `/hr/triathlon/`

No build step: the Croatian pages are plain copies with translated text, so
**every content change has to be made in both files**. Each Croatian page starts
with a comment naming its English original.

`lang.js` picks the language on a first visit (Croatian for `hr`, `bs`, `sr`
and `sl` browsers) and remembers the choice after that. The switch in the header
is a plain link, so the site still works without JavaScript — the only thing
missing then is the automatic choice.

## Local preview

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Deploy

Push to `main`. GitHub Pages serves the repository root.

## License

Code is MIT licensed (see `LICENSE`). Text and photographs are © Mario Žagar.
