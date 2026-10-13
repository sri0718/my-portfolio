import { useMemo, useState } from 'react'
import FilterBar from './FilterBar.jsx'
import ArtworkCard from './ArtworkCard.jsx'
import ArtworkModal from './ArtworkModal.jsx'
import Reveal from './Reveal.jsx'
import { artCategories } from '../data/artworks.js'
import { matchCategory } from '../utils/asset.js'

// Builds the filter list from the categories you actually use (preferred order first).
export function categoriesInUse(items, preferred) {
  const used = []
  items.forEach((i) => [].concat(i.category || []).forEach((c) => !used.some((u) => u.toLowerCase() === String(c).toLowerCase()) && used.push(String(c))))
  const first = preferred.filter((p) => used.some((u) => u.toLowerCase() === p.toLowerCase()))
  const rest = used.filter((u) => !preferred.some((p) => p.toLowerCase() === u.toLowerCase()))
  return [...first, ...rest]
}

// Art gallery: category filter + editorial masonry + detail modal.
export default function Gallery({ items, preferred = artCategories }) {
  const [active, setActive] = useState('All')
  const [open, setOpen] = useState(null)

  const categories = useMemo(() => ['All', ...categoriesInUse(items, preferred)], [items, preferred])
  const filtered = useMemo(() => items.filter((a) => matchCategory(a.category || [], active)), [items, active])
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, items.filter((a) => matchCategory(a.category || [], c)).length])),
    [items, categories]
  )

  return (
    <section className="gallery" aria-label="Artwork gallery">
      {categories.length > 2 && (
        <FilterBar
          options={categories}
          active={active}
          counts={counts}
          onChange={(c) => {
            setActive(c)
            setOpen(null)
          }}
        />
      )}
      <div className="masonry" key={active}>
        {filtered.map((a, i) => (
          <Reveal key={(a.title || 'art') + i} delay={(i % 3) * 90}>
            <ArtworkCard item={a} number={i + 1} onOpen={() => setOpen(i)} />
          </Reveal>
        ))}
      </div>
      {open !== null && filtered[open] && (
        <ArtworkModal items={filtered} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  )
}
