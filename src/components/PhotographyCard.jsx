import SmartImage from './SmartImage.jsx'
import { pad } from '../utils/asset.js'

export default function PhotographyCard({ item, number, layout, onOpen }) {
  const key = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen()
    }
  }
  const title = item.title || 'Untitled'
  const meta = [item.location, item.date].filter(Boolean).join(' — ')
  return (
    <figure
      className={`pcard pcard--${layout || 'default'}`}
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={key}
      data-cursor="Open"
      aria-label={`Open ${title}`}
    >
      <SmartImage src={item.image} alt={title} fill kind="photo" />
      <span className="pcard__shade" />
      <span className="pcard__no">{pad(number)}</span>
      {item.category && <span className="pcard__cat">{[].concat(item.category).join(', ')}</span>}
      <figcaption className="pcard__info">
        <span className="pcard__title">{title}</span>
        {meta && <span className="pcard__meta">{meta}</span>}
      </figcaption>
    </figure>
  )
}
