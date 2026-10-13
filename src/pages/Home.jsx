import usePageTitle from '../hooks/usePageTitle.js'
import { useList } from '../hooks/useContent.js'
import Link from '../components/Link.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import RevealText from '../components/RevealText.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SmartImage from '../components/SmartImage.jsx'
import EmptyGallery from '../components/EmptyGallery.jsx'
import Triad from '../components/Triad.jsx'
import { site } from '../data/site.js'
import { pad } from '../utils/asset.js'

const NODES = [
  [8, 22], [24, 8], [30, 34], [52, 16], [60, 42], [78, 12], [90, 36],
]
const LINKS = [[0, 1], [0, 2], [1, 3], [2, 3], [2, 4], [3, 5], [4, 5], [4, 6], [5, 6]]

export default function Home() {
  usePageTitle('')
  const art = useList('artworks', 'artworks')
  const photo = useList('photographs', 'photography')
  // First entry is used in the hero (or one marked "hero": true)
  const heroArt = art.items.find((a) => a.hero) || art.items[0]
  const heroPhoto = photo.items.find((p) => p.hero) || photo.items[0]

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="hero">
        <div className="hero__stage" aria-hidden="true">
          <svg className="hero__net" viewBox="0 0 100 50">
            {LINKS.map(([a, b], i) => (
              <line key={i} x1={NODES[a][0]} y1={NODES[a][1]} x2={NODES[b][0]} y2={NODES[b][1]} />
            ))}
            {NODES.map(([x, y], i) => (
              <circle key={i} cx={x} cy={y} r="0.9" />
            ))}
          </svg>
          <div className="hero__frame hero__frame--art paper">
            <div className="hero__inner">
              <SmartImage key={heroArt?.image || 'none'} src={heroArt?.image} alt="" fill kind="art" eager emptyText="Artwork coming soon" />
            </div>
          </div>
          <div className="hero__frame hero__frame--photo">
            <SmartImage key={heroPhoto?.image || 'none'} src={heroPhoto?.image} alt="" fill kind="photo" eager emptyText="Photography coming soon" />
          </div>
          <p className="hero__code">
            {'// observe, learn, create'}
            <br />
            {'model.fit(light, shadow, form)'}
          </p>
        </div>

        <div className="hero__copy">
          <Reveal as="p" className="eyebrow" delay={500}>
            Sri Varshini — Portfolio
          </Reveal>
          <RevealText as="h1" text="Between Code, *Canvas* & Camera." className="hero__title" delay={650} />
          <Reveal as="p" className="hero__sub" delay={1150}>
            {site.subtitle}
          </Reveal>
          <Reveal className="hero__cta" delay={1350}>
            <Button to="/art" variant="solid">
              Explore my art
            </Button>
            <Button to="/photography">View photography</Button>
          </Reveal>
        </div>
        <span className="hero__scroll" aria-hidden="true">
          Scroll
        </span>
      </section>

      {/* ---------- THREE WAYS ---------- */}
      <section className="ways container">
        <SectionTitle eyebrow="Three sides, one curiosity" title="Three Ways I See the World" size="md" />
        <div className="ways__list">
          {site.threeWays.map((w, i) => (
            <Reveal key={w.name} delay={i * 100}>
              <Link to={w.to} className="way" data-cursor="Open">
                <span className="way__no">{pad(i + 1)}</span>
                <span className="way__name">{w.name}</span>
                <span className="way__text">{w.text}</span>
                <span className="way__arrow" aria-hidden="true">
                  →
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- CODE x CANVAS x CAMERA ---------- */}
      <Triad />

      {/* ---------- SELECTED ART ---------- */}
      <section className="preview container">
        <div className="preview__head">
          <SectionTitle eyebrow="Canvas" title="Selected art" size="md">
            Graphite, charcoal, pencil and digital pieces — the main thread of this portfolio.
          </SectionTitle>
          <Button to="/art">The art page</Button>
        </div>
        {art.status === 'loading' ? null : art.items.length === 0 ? (
          <EmptyGallery kind="art" title="Artwork coming soon." text="My drawings and digital art will be shown here." error={art.status === 'error'} />
        ) : (
          <div className="preview__art">
            {art.items.slice(0, 3).map((a, i) => (
              <Reveal key={(a.title || 'art') + i} delay={i * 120}>
                <Link to="/art" className="pv-art" data-cursor="View">
                  <div className="pv-art__mat paper">
                    <SmartImage src={a.image} alt={a.title || 'Artwork'} ratio={a.ratio} kind="art" />
                  </div>
                  {a.title && <p className="pv-art__title">{a.title}</p>}
                  {a.medium && <p className="pv-art__meta">{a.medium}</p>}
                </Link>
              </Reveal>
            ))}
          </div>
        )}
      </section>

      {/* ---------- THROUGH THE LENS ---------- */}
      <section className="previewph">
        <div className="container">
          <div className="preview__head">
            <SectionTitle eyebrow="Camera" title="Through the lens" size="md">
              A visual journal of light, shadow and small moments.
            </SectionTitle>
            <Button to="/photography">The photography page</Button>
          </div>
          {photo.status === 'loading' ? null : photo.items.length === 0 ? (
            <EmptyGallery kind="photo" title="Photography collection coming soon." text="Photographs will be added here." error={photo.status === 'error'} />
          ) : (
            <>
              <Reveal variant="image">
                <Link to="/photography" className="pv-photo pv-photo--wide" data-cursor="Open">
                  <SmartImage src={photo.items[0].image} alt={photo.items[0].title || 'Photograph'} fill kind="photo" />
                  {photo.items[0].title && <span className="pv-photo__cap">{photo.items[0].title}</span>}
                </Link>
              </Reveal>
              {photo.items.length > 1 && (
                <div className="previewph__pair">
                  {photo.items.slice(1, 3).map((p, i) => (
                    <Reveal key={(p.title || 'photo') + i} variant="image" delay={i * 120}>
                      <Link to="/photography" className="pv-photo" data-cursor="Open">
                        <SmartImage src={p.image} alt={p.title || 'Photograph'} fill kind="photo" />
                        {p.title && <span className="pv-photo__cap">{p.title}</span>}
                      </Link>
                    </Reveal>
                  ))}
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ---------- CLOSING ---------- */}
      <section className="closing container">
        <RevealText as="h2" text={site.altTagline} className="closing__title" />
        <Reveal className="closing__cta" delay={300}>
          <Button to="/contact" variant="solid">
            Say hello
          </Button>
          <Button to="/about">About me</Button>
        </Reveal>
      </section>
    </>
  )
}
