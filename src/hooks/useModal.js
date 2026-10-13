import { useEffect, useRef } from 'react'

// Keyboard (Esc / arrows) + body-scroll lock for modals and lightboxes.
export default function useModal({ onClose, onPrev, onNext }) {
  const handlers = useRef({})
  handlers.current = { onClose, onPrev, onNext }

  useEffect(() => {
    const onKey = (e) => {
      const h = handlers.current
      if (e.key === 'Escape') h.onClose?.()
      else if (e.key === 'ArrowLeft') h.onPrev?.()
      else if (e.key === 'ArrowRight') h.onNext?.()
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [])
}

// Simple horizontal swipe for touch screens.
export function useSwipe(onPrev, onNext) {
  const start = useRef(null)
  return {
    onTouchStart: (e) => {
      start.current = e.touches[0].clientX
    },
    onTouchEnd: (e) => {
      if (start.current == null) return
      const dx = e.changedTouches[0].clientX - start.current
      if (Math.abs(dx) > 50) (dx > 0 ? onPrev : onNext)()
      start.current = null
    },
  }
}
