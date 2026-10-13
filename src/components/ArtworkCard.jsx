import SmartImage from './SmartImage.jsx'
import { pad } from '../utils/asset.js'

export default function ArtworkCard({ item, number, onOpen }) {
  const key = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onOpen()
    }
  }
  const title = item.title || 'Untitled'
  const meta = [item.medium, item.year].filter(Boolean).join(', ')
  return (
    <article className="acard" role="button" tabIndex={0} onClick={onOpen} onKeyDown={key} data-cursor="View" aria-label={`Open ${title}`}>
      <div className="acard__mat paper">
        <div className="acard__img">
          <SmartImage src={item.image} alt={title} ratio={item.ratio} kind="art" />
        </div>
      </div>
      <div className="acard__label">
        <div>
          <h3 className="acard__title">{title}</h3>
          {meta && <p className="acard__meta">{meta}</p>}
        </div>
        <span className="acard__no">{pad(number)}</span>
      </div>
      {item.description && <p className="acard__desc">{item.description}</p>}
    </article>
  )
}
