import { useMemo, useState } from 'react'
import FilterBar from './FilterBar.jsx'
import PhotographyCard from './PhotographyCard.jsx'
import Lightbox from './Lightbox.jsx'
import Reveal from './Reveal.jsx'
import { categoriesInUse } from './Gallery.jsx'
import useNaturalRatios from '../hooks/useNaturalRatios.js'
import { photoCategories } from '../data/photographs.js'
import { matchCategory } from '../utils/asset.js'

const AR = { wide: 21 / 9, tall: 4 / 5, default: 3 / 2, small: 1 }
const TARGET = 2.6 // how "full" a row of frames should be before starting a new row

// Frame shape: your "ratio" > your "layout" > the photo's real shape > classic 3:2.
const arOf = (p, natural) => {
  if (p.ratio) {
    const [a, b] = String(p.ratio).split('/').map(Number)
    if (a && b) return a / b
  }
  if (p.layout && AR[p.layout]) return AR[p.layout]
  if (natural) return Math.min(Math.max(natural, 0.66), 2.4)
  return AR.default
}

// Packs photos into equal-height rows so frames of different shapes line up like a contact sheet.
function buildRows(entries) {
  const rows = []
  let cur = []
  let sum = 0
  const flush = () => {
    if (cur.length) rows.push({ items: cur, sum })
    cur = []
    sum = 0
  }
  entries.forEach((e) => {
    if (e.wide) {
      flush()
      rows.push({ items: [e], sum: e.ar, wide: true })
      return
    }
    cur.push(e)
    sum += e.ar
    if (sum >= TARGET) flush()
  })
  flush()
  return rows
}

export default function PhotographyGallery({ items, preferred = photoCategories }) {
  const [active, setActive] = useState('All')
  const [open, setOpen] = useState(null)
  const natural = useNaturalRatios(items)

  const categories = useMemo(() => ['All', ...categoriesInUse(items, preferred)], [items, preferred])
  const filtered = useMemo(() => items.filter((p) => matchCategory(p.category || [], active)), [items, active])
  const counts = useMemo(
    () => Object.fromEntries(categories.map((c) => [c, items.filter((p) => matchCategory(p.category || [], c)).length])),
    [items, categories]
  )
  const rows = useMemo(
    () =>
      buildRows(
        filtered.map((item, index) => {
          const ar = arOf(item, natural[item.image])
          return { item, index, ar, wide: item.layout === 'wide' || (!item.layout && !item.ratio && ar >= 2) }
        })
      ),
    [filtered, natural]
  )
  const lightboxItems = filtered.map((p) => ({
    image: p.image,
    title: p.title || 'Untitled',
    meta: [p.location, p.date].filter(Boolean).join(' — '),
    tag: [].concat(p.category || []).join(', '),
    caption: p.caption,
  }))

  return (
    <section aria-label="Photography gallery">
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
      <div className="pgrid" key={active}>
        {rows.map((row, r) => (
          <div key={r} className="prow" style={{ '--n': row.items.length, '--sum': row.wide ? row.sum : Math.max(row.sum, TARGET) }}>
            {row.items.map(({ item, ar, index, wide }) => (
              <Reveal key={(item.title || 'photo') + index} variant="image" delay={80} className="pcell" style={{ '--ar': ar }}>
                <PhotographyCard item={item} layout={wide ? 'wide' : item.layout} number={index + 1} onOpen={() => setOpen(index)} />
              </Reveal>
            ))}
          </div>
        ))}
      </div>
      {open !== null && lightboxItems[open] && (
        <Lightbox items={lightboxItems} index={open} onClose={() => setOpen(null)} onChange={setOpen} />
      )}
    </section>
  )
}
