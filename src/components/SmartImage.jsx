import { useState } from 'react'
import { asset } from '../utils/asset.js'
import EmptyFrame from './EmptyFrame.jsx'

const DEFAULT_RATIO = { art: '4/5', photo: '3/2', sketch: '1/1', process: '4/3' }

// Shows your image. If there is no image (or the file is missing) it shows an empty frame.
export default function SmartImage({ src, alt = '', ratio, fill = false, kind = 'art', className = '', eager = false, emptyText }) {
  const [failed, setFailed] = useState(!src)
  const style = fill ? undefined : { aspectRatio: ratio || (failed ? DEFAULT_RATIO[kind] || '4/5' : undefined) }
  return (
    <div className={`simg ${fill ? 'simg--fill' : ''} ${ratio ? 'simg--fixed' : ''} ${className}`} style={style}>
      {failed ? (
        <EmptyFrame kind={kind} text={emptyText || 'Image coming soon'} />
      ) : (
        <img
          src={asset(src)}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          onError={() => {
            console.warn(`Image not found: ${src}`)
            setFailed(true)
          }}
        />
      )}
    </div>
  )
}
