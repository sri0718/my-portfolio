// Elegant empty state for a whole section (art, photography, sketchbook).
export default function EmptyGallery({ kind = 'art', title, text, error = false }) {
  const frames = kind === 'photo' ? ['3/2', '4/5', '3/2'] : kind === 'sketch' ? ['1/1', '4/5', '1/1'] : ['4/5', '1/1', '3/4']
  return (
    <div className={`egal egal--${kind}`}>
      <div className="egal__frames" aria-hidden="true">
        {frames.map((r, i) => (
          <div key={i} className="egal__frame" style={{ aspectRatio: r }} />
        ))}
      </div>
      <h3 className="egal__title">{title}</h3>
      {text && <p className="egal__text">{text}</p>}
      {error && <p className="egal__text">The collection could not be loaded just now — please refresh in a moment.</p>}
    </div>
  )
}
