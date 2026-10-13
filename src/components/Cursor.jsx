import { useEffect, useRef } from 'react'

// Subtle custom cursor (only on devices with a mouse).
export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    document.documentElement.classList.add('has-cursor')
    let x = 0, y = 0, rx = 0, ry = 0, raf

    const move = (e) => {
      x = e.clientX
      y = e.clientY
      dot.current.style.transform = `translate3d(${x}px,${y}px,0)`
      dot.current.classList.add('on')
      ring.current.classList.add('on')
    }
    const over = (e) => {
      const t = e.target.closest?.('a,button,[data-cursor],input,textarea,label,[role="button"]')
      ring.current.classList.toggle('is-link', !!t)
      ring.current.dataset.label = (t && t.dataset && t.dataset.cursor) || ''
    }
    const leave = () => {
      dot.current.classList.remove('on')
      ring.current.classList.remove('on')
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      ring.current.style.transform = `translate3d(${rx}px,${ry}px,0)`
      raf = requestAnimationFrame(loop)
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    document.addEventListener('mouseleave', leave)
    raf = requestAnimationFrame(loop)
    return () => {
      document.documentElement.classList.remove('has-cursor')
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      document.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" data-label="" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}
