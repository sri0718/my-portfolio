import { useEffect, useState } from 'react'
import { asset } from '../utils/asset.js'

// Measures each photo's real shape so frames match your photographs automatically.
export default function useNaturalRatios(items) {
  const [map, setMap] = useState({})
  const key = items.map((i) => i.image).join('|')
  useEffect(() => {
    let alive = true
    items.forEach((it) => {
      if (!it.image || it.ratio || it.layout) return
      const im = new Image()
      im.onload = () => alive && im.naturalHeight && setMap((m) => ({ ...m, [it.image]: im.naturalWidth / im.naturalHeight }))
      im.src = asset(it.image)
    })
    return () => {
      alive = false
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
  return map
}
