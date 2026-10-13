import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle.js'
import { useList } from '../hooks/useContent.js'
import SectionTitle from '../components/SectionTitle.jsx'
import SmartImage from '../components/SmartImage.jsx'
import Lightbox from '../components/Lightbox.jsx'
import Reveal from '../components/Reveal.jsx'

export default function Sketchbook() {
  usePageTitle('Sketchbook')
  const { items, status } = useList('sketches', 'sketches')
  const [open, setOpen] = useState(null)
  const images = items.filter((s) => (s.type || 'sketch') === 'sketch')
  const lbItems = images.map((s) => ({
    image: s.image,
    title: s.title || s.label || 'Sketch',
    meta: [s.label, s.date].filter(Boolean).join(' — '),
    caption: s.note,
  }))

  return (
    <div className="skpage">
      <div className="phead">
        <SectionTitle eyebrow="Sketchbook" title="Unfinished things live here." as="h1">
          Rough sketches, practice drawings, portrait studies, small experiments, notes and ideas — the work behind the work.
        </SectionTitle>
      </div>

      <div className="container">
        <div className="notebook paper">
          <p className="notebook__title">my sketchbook — pages in progress</p>
          {status === 'loading' ? null : items.length === 0 ? (
            <div className="notebook__empty">
              <p className="notebook__hand">Sketchbook pages coming soon.</p>
              <div className="notebook__blank" aria-hidden="true">
                {['1/1', '4/5', '1/1'].map((r, i) => (
                  <div key={i} className="skcard__paper skcard__paper--blank" style={{ '--r': r }} />
                ))}
              </div>
              {status === 'error' && <p className="notebook__err">These pages could not be loaded just now — please refresh in a moment.</p>}
            </div>
          ) : (
            <div className="notebook__cols">
              {items.map((s, i) => {
                const type = s.type || 'sketch'
                if (type === 'sketch') {
                  const idx = images.indexOf(s)
                  const title = s.title || s.label || 'Sketch'
                  return (
                    <Reveal key={i} className="skcard skcard--sketch" delay={(i % 3) * 80}>
                      <div
                        className="skcard__paper"
                        role="button"
                        tabIndex={0}
                        data-cursor="View"
                        aria-label={`Open ${title}`}
                        onClick={() => setOpen(idx)}
                        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && (e.preventDefault(), setOpen(idx))}
                      >
                        <div className="skcard__img">
                          <SmartImage src={s.image} alt={title} ratio={s.ratio} kind="sketch" />
                        </div>
                        {s.label && <p className="skcard__tag">{s.label}</p>}
                        {(s.title || s.note) && <p className="skcard__cap">{s.title || s.note}</p>}
                      </div>
                    </Reveal>
                  )
                }
                return (
                  <Reveal key={i} className={`skcard skcard--${type === 'idea' ? 'idea' : 'note'}`} delay={(i % 3) * 80}>
                    <div className="skcard__paper">
                      {s.label && <p className="skcard__tag">{s.label}</p>}
                      <p className="skcard__hand">{s.text}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          )}
        </div>
      </div>

      {open !== null && <Lightbox items={lbItems} index={open} onClose={() => setOpen(null)} onChange={setOpen} />}
    </div>
  )
}
