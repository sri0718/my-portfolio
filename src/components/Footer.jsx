import Link from './Link.jsx'
import { NAV } from '../data/nav.js'
import { site } from '../data/site.js'

export default function Footer() {
  const { education, contact } = site
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer__big">{site.tagline}</p>
        <div className="footer__grid">
          <div>
            <p className="footer__label">Sri Varshini</p>
            <p className="footer__text">
              {education.degree} {education.shortField} — {education.year}
              <br />
              Artist &amp; photography enthusiast, still learning.
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="footer__label">Pages</p>
            <ul>
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="footer__label">Elsewhere</p>
            <ul>
              <li>
                <a href={`mailto:${contact.email}`}>Email</a>
              </li>
              {contact.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.url} target="_blank" rel="noreferrer noopener">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer__base">
          <span>© {new Date().getFullYear()} Sri Varshini</span>
          <span>{site.altTagline}</span>
        </div>
      </div>
    </footer>
  )
}
