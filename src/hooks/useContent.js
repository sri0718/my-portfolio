import { useEffect, useMemo, useState } from 'react'

// Loads /content/<name>.json at RUNTIME (not baked into the build), so editing
// that file on your host updates the live website with no code changes.
const url = (name) => `${import.meta.env.BASE_URL}content/${name}.json`

export const toList = (data) => (Array.isArray(data) ? data : data && Array.isArray(data.items) ? data.items : [])

// "moonlight.jpg" -> "images/<folder>/moonlight.jpg"; full paths / URLs are left alone.
export const resolveImage = (img, folder) =>
  !img ? '' : /^(https?:|\/|data:|blob:)/.test(img) ? img : `images/${folder}/${img}`

export default function useContent(name) {
  const [state, setState] = useState({ status: 'loading', data: null })
  useEffect(() => {
    let alive = true
    fetch(url(name), { cache: 'no-cache' })
      .then((r) => {
        if (r.status === 404) return []
        if (!r.ok) throw new Error(`HTTP ${r.status}`)
        return r.json()
      })
      .then((data) => alive && setState({ status: 'ready', data }))
      .catch((err) => {
        console.error(`Could not read content/${name}.json — check it for a missing comma or quote.`, err)
        alive && setState({ status: 'error', data: null })
      })
    return () => {
      alive = false
    }
  }, [name])
  return state
}

// Convenience: a list of entries whose "image" names are resolved to full paths.
export function useList(name, folder) {
  const s = useContent(name)
  const items = useMemo(
    () => toList(s.data).map((it) => ({ ...it, image: resolveImage(it.image, folder) })),
    [s.data, folder]
  )
  return { status: s.status, items }
}
