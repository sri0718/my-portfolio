# Sri Varshini — Portfolio
**Between Code, Canvas & Camera.**

React + Vite + plain CSS. Contains none of your artwork or photographs — only empty
"coming soon" frames until you add your own.

---------------------------------------------------------------------
## A. PUBLISH IT (get a public link) — no coding, nothing to install
---------------------------------------------------------------------
You do NOT need Node, a terminal or localhost. The hosting company builds the site for you in the cloud,
and the result is a normal public website that works when your computer is off.

1. **Unzip** this project on your computer.
2. Make a free account at **github.com**. Click **New repository**, name it e.g. `my-portfolio`, set it to Public, and create it.
3. On the new repository page click **"uploading an existing file"**, then drag in everything *inside* the unzipped
   `sri-varshini-portfolio` folder (the files and folders, not the .zip itself). Click **Commit changes**.
   - If your computer hides the `.github` folder, that's fine — it is only needed for GitHub Pages.
4. Make a free account at **vercel.com** (choose "Continue with GitHub"). Click **Add New → Project**, pick your
   `my-portfolio` repository, leave every setting as it is, and click **Deploy**.
5. After about a minute you get a public link like `https://my-portfolio.vercel.app`.
   Share it with anyone — it opens on phones, tablets and laptops with nothing to install.
   (Vercel > Project > Settings > Domains lets you change the name or add your own domain later.)

**Alternatives:** Netlify (app.netlify.com → Add new site → Import from Git → pick the repo; settings are
pre-filled by `netlify.toml`) gives a `*.netlify.app` link. GitHub Pages also works (repo Settings → Pages →
Source: **GitHub Actions**), giving `https://<your-username>.github.io/my-portfolio/`.

From now on, every change you save to the GitHub repository goes live automatically in about a minute.

---------------------------------------------------------------------
## B. ADD YOUR OWN WORK (no rebuilding on your computer)
---------------------------------------------------------------------
Your work is read from the files in `public/content/` each time someone opens the site.

**To add an artwork**
1. In GitHub open `public/images/artworks/` → **Add file → Upload files** → drop your image (e.g. `moonlight.jpg`) → Commit.
2. Open `public/content/artworks.json` → click the pencil icon → add an entry → Commit:
```json
[
  {
    "title": "Moonlight",
    "category": "Charcoal",
    "medium": "Charcoal on Paper",
    "year": "2026",
    "image": "moonlight.jpg",
    "description": "A few words about this piece."
  }
]
```
For a second piece add a comma after the closing `}` and another block. Only `title` and `image` are required.
`category` can be Graphite, Charcoal, Portraits, Digital, Experimental (or your own word).
The filter buttons appear automatically for the categories you use.

**To add a photograph:** upload the file to `public/images/photography/`, then add an entry to
`public/content/photographs.json`:
```json
[
  {
    "title": "Morning Light",
    "category": "Nature",
    "location": "Your place",
    "date": "March 2026",
    "image": "morning-light.jpg",
    "caption": "A line about the moment."
  }
]
```
Categories: Portraits, Nature, Street, Architecture, Details, Moments. Frames take the shape of your photo
automatically (optional `"layout": "wide"` for a full-width panorama).

**Sketchbook:** `public/images/sketches/` + `public/content/sketches.json`
(entries can be `"type": "sketch"`, `"note"` or `"idea"` — see `public/content/README.txt`).

**Profile photo (About page):** upload one image named exactly `portrait.jpg` into `public/images/about/`.

**Process page images (optional):** `public/images/process/` + `public/content/process.json`.

Tips: use simple file names (no spaces), match capital letters exactly, JPG/WebP under ~500 KB for fast loading.
Order in the JSON file = order on the website. `[]` means "empty" and the site shows "coming soon".
If a JSON file has a typo (missing comma/quote) the section shows a gentle "please refresh" message; fix the
typo and commit again. Pasting the file into jsonlint.com will point at the problem.

Not on a computer? You can do all of this from the GitHub mobile app or any browser.

---------------------------------------------------------------------
## C. EDIT TEXT, EDUCATION, LINKS
---------------------------------------------------------------------
Open `src/data/site.js` in GitHub (pencil icon) → Commit. The site updates automatically.
- Bio: `about.paragraphs`
- Education: `education`
- Email & Instagram: `contact`  (email = `sree0718@gmail.com`, Instagram = `https://www.instagram.com/sree.art01234/`)
- Journey timeline: `journey`
- Colours & fonts: top of `src/styles/global.css`

Email opens the visitor's mail app (mailto). The contact form does the same unless you add a `formEndpoint`
(free at formspree.io) to receive messages directly.

---------------------------------------------------------------------
## D. RUN IT LOCALLY (optional, for developers)
---------------------------------------------------------------------
```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production files in /dist
```
Requires Node.js 18+.

## Structure
```
public/
  content/      artworks.json, photographs.json, sketches.json, process.json   <- live content
  images/       artworks/ photography/ sketches/ process/ about/               <- your images
src/
  data/         site.js (text, links) + category order
  components/   Navbar, Footer, ArtworkCard, PhotographyCard, Gallery, PhotographyGallery,
                Lightbox, ArtworkModal, SectionTitle, Button, PageTransition, ...
  pages/        Home, About, Art, Photography, Sketchbook, Process, Journey, Contact
  styles/       global.css, components.css, pages.css
```
