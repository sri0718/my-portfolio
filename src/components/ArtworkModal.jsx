import FitImage from './FitImage.jsx'
import useModal, { useSwipe } from '../hooks/useModal.js'
import { pad } from '../utils/asset.js'

export default function ArtworkModal({ items, index, onClose, onChange }) {
  const item = items[index]
  const n = items.length
  const prev = () => onChange((index - 1 + n) % n)
  const next = () => onChange((index + 1) % n)
  useModal({ onClose, onPrev: prev, onNext: next })
  const swipe = useSwipe(prev, next)
  const title = item.title || 'Untitled'
  const cats = [].concat(item.category || []).join(', ')
  const facts = [
    ['Medium', item.medium],
    ['Year', item.year],
    ['Category', cats],
  ].filter(([, v]) => v)

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={title}>
      <div className="modal__stage" {...swipe} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <div className="modal__mat paper" key={index}>
          <FitImage src={item.image} alt={title} />
        </div>
      </div>
      <aside className="modal__info">
        <button type="button" className="modal__close" onClick={onClose}>
          Close ✕
        </button>
        <p className="eyebrow">
          {pad(index + 1)} / {pad(n)}
        </p>
        <h2 className="modal__title">{title}</h2>
        {facts.length > 0 && (
          <dl className="modal__facts">
            {facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        )}
        {item.description && <p className="modal__desc">{item.description}</p>}
        <div className="modal__nav">
          <button type="button" onClick={prev}>
            ← Previous
          </button>
          <button type="button" onClick={next}>
            Next →
          </button>
        </div>
      </aside>
    </div>
  )
}
