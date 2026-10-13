export default function FilterBar({ options, active, onChange, counts = {} }) {
  return (
    <div className="filters" role="tablist" aria-label="Filter">
      {options.map((o) => (
        <button
          key={o}
          type="button"
          role="tab"
          aria-selected={active === o}
          className={`filters__btn ${active === o ? 'is-active' : ''}`}
          onClick={() => onChange(o)}
        >
          {o}
          {counts[o] != null && <sup>{counts[o]}</sup>}
        </button>
      ))}
    </div>
  )
}
