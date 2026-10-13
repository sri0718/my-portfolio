// An honest empty frame — shown where an image of YOURS will go. No fake images.
export default function EmptyFrame({ kind = 'art', text = 'Coming soon' }) {
  return (
    <div className={`eframe eframe--${kind}`}>
      <span>{text}</span>
    </div>
  )
}
