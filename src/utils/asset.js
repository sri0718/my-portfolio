// Turns "/images/artworks/a.jpg" into a path that works on any host / sub-folder.
export const asset = (path = '') =>
  /^(https?:|data:|blob:)/.test(path)
    ? path
    : `${import.meta.env.BASE_URL}${String(path).replace(/^\/+/, '')}`

export const pad = (n) => String(n).padStart(2, '0')

// Small stable number from a string — used to vary placeholder drawings.
export const seedOf = (str = '') =>
  [...String(str)].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 9973, 7)

// Does an item's category (string or list) match the active filter?
export const matchCategory = (category, active) =>
  active === 'All' ||
  [].concat(category).some((c) => String(c).toLowerCase() === active.toLowerCase())
