LIVE CONTENT — edit these files to update the website. No coding or rebuilding on your computer needed.

  artworks.json     your art           (images go in  public/images/artworks/)
  photographs.json  your photography   (images go in  public/images/photography/)
  sketches.json     sketchbook pages   (images go in  public/images/sketches/)
  process.json      process steps text + optional images (public/images/process/)

Each file is a list. "[]" means empty (the site shows "coming soon").
Order in the file = order on the website. Put newest first if you like.
Be careful with JSON: every entry needs commas BETWEEN entries (but not after the last one), and text must be in "double quotes".

------------------------------------------------------------
artworks.json — example with two entries
------------------------------------------------------------
[
  {
    "title": "Silent Expression",
    "category": "Portraits",
    "medium": "Graphite on Paper",
    "year": "2026",
    "image": "silent-expression.jpg",
    "description": "A few words about this piece."
  },
  {
    "title": "Between Shadows",
    "category": ["Charcoal", "Portraits"],
    "medium": "Charcoal on Paper",
    "year": "2026",
    "image": "between-shadows.jpg"
  }
]
category: Graphite, Charcoal, Portraits, Digital or Experimental (or your own word). A list shows the piece under several filters.
Only "title" and "image" are needed — medium, year, description and category are optional.

------------------------------------------------------------
photographs.json — example
------------------------------------------------------------
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
category: Portraits, Nature, Street, Architecture, Details or Moments.
Frames are shaped automatically from your photo. Optional: "layout": "wide" (full-width) or "ratio": "4/5" to force a crop.

------------------------------------------------------------
sketches.json — three kinds of page: sketch, note, idea
------------------------------------------------------------
[
  { "type": "sketch", "label": "Portrait study", "title": "Eyes and proportion", "date": "2026", "image": "eyes.jpg", "note": "Optional handwritten caption." },
  { "type": "note", "label": "Note", "text": "Something you want to remember." },
  { "type": "idea", "label": "Idea", "text": "An idea for a future piece." }
]

------------------------------------------------------------
Image file names
------------------------------------------------------------
"image": "moonlight.jpg" means the file public/images/artworks/moonlight.jpg (folder depends on the file you are editing).
Use simple names (letters, numbers, dashes), and match capital letters exactly. JPG or WebP, ideally under 500 KB.
The About-page photo is simply public/images/about/portrait.jpg
