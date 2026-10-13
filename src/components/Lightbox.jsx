import FitImage from './FitImage.jsx'
import useModal, { useSwipe } from '../hooks/useModal.js'
import { pad } from '../utils/asset.js'

// Full-screen viewer. items: [{ image, title, meta, tag, caption, kind, ratio, seed }]
export default function Lightbox({ items, index, onClose, onChange }) {
  const item = items[index]
  const n = items.length
  const prev = () => onChange((index - 1 + n) % n)
  const next = () => onChange((index + 1) % n)
  useModal({ onClose, onPrev: prev, onNext: next })
  const swipe = useSwipe(prev, next)

  return (
    <div className="lb" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="lb__top">
        <span>
          {pad(index + 1)} / {pad(n)}
        </span>
        <button type="button" onClick={onClose}>
          Close ✕
        </button>
      </div>
      <div className="lb__stage" {...swipe} onClick={(e) => e.target === e.currentTarget && onClose()}>
        <button type="button" className="lb__arrow lb__arrow--prev" onClick={prev} aria-label="Previous">
          ←
        </button>
        <div className="lb__frame" key={index}>
          <FitImage src={item.image} alt={item.title} />
        </div>
        <button type="button" className="lb__arrow lb__arrow--next" onClick={next} aria-label="Next">
          →
        </button>
      </div>
      <div className="lb__caption">
        <div>
          <h2 className="lb__title">{item.title}</h2>
          {item.meta && <p className="lb__meta">{item.meta}</p>}
        </div>
        {item.caption && <p className="lb__text">{item.caption}</p>}
        {item.tag && <span className="lb__tag">{item.tag}</span>}
      </div>
    </div>
  )
}
