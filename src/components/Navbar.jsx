import { useEffect, useState } from 'react'
import Link from './Link.jsx'
import { NAV } from '../data/nav.js'
import { pad } from '../utils/asset.js'

export default function Navbar({ route }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  useEffect(() => setOpen(false), [route])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <header className={`nav ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
        <div className="nav__inner">
          <Link to="/" className="nav__logo" aria-label="Sri Varshini — home">
            Sri Varshini<span>.</span>
          </Link>
          <nav aria-label="Main">
            <ul className="nav__links">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className={`nav__link ${route === n.to ? 'is-active' : ''}`} aria-current={route === n.to ? 'page' : undefined}>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <button
            type="button"
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span>{open ? 'Close' : 'Menu'}</span>
            <i aria-hidden="true" />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`menu ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <ul>
          {NAV.map((n, i) => (
            <li key={n.to} style={{ '--i': i }}>
              <Link to={n.to} className={route === n.to ? 'is-active' : ''} tabIndex={open ? 0 : -1}>
                <em>{pad(i + 1)}</em>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
