import { useEffect, useState } from 'react'

// Tiny hash router: "#/art" -> "/art". Works on any static host, no server config needed.
const read = () => {
  const h = window.location.hash.replace(/^#/, '')
  return h.startsWith('/') ? h.split('?')[0] : '/'
}

export function useRoute() {
  const [route, setRoute] = useState(read)
  useEffect(() => {
    const on = () => setRoute(read())
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])
  return route
}
