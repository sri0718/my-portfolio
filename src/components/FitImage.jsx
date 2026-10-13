import { useState } from 'react'
import { asset } from '../utils/asset.js'

// Image that fits inside modals / lightbox without cropping.
export default function FitImage({ src, alt = '' }) {
  const [failed, setFailed] = useState(!src)
  if (failed) return <div className="fit__empty">Image coming soon</div>
  return <img className="fit__img" src={asset(src)} alt={alt} onError={() => setFailed(true)} />
}
