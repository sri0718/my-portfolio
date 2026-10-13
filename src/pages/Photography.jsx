import usePageTitle from '../hooks/usePageTitle.js'
import Reveal from '../components/Reveal.jsx'
import RevealText from '../components/RevealText.jsx'
import PhotographyGallery from '../components/PhotographyGallery.jsx'
import { useList } from '../hooks/useContent.js'
import EmptyGallery from '../components/EmptyGallery.jsx'
import { site } from '../data/site.js'

export default function Photography() {
  usePageTitle('Photography')
  const { notice } = site
  const { items, status } = useList('photographs', 'photography')
  return (
    <div className="photopage">
      <header className="pphead">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            Photography
          </Reveal>
          <RevealText as="h1" text="A visual journal." className="pphead__title" />
          <div className="pphead__row">
            <Reveal as="p" className="pphead__text" delay={250}>
              Light, shadow, faces and small details — noticed, framed and kept. Still learning, one frame at a time.
            </Reveal>
            <span className="pphead__count">{items.length ? `${items.length} frame${items.length === 1 ? '' : 's'}` : 'Collection coming soon'}</span>
          </div>
        </div>
      </header>

      <div className="container pgwrap">
        {status === 'loading' ? (
          <div className="loading" />
        ) : items.length === 0 ? (
          <EmptyGallery kind="photo" title="Photography collection coming soon." text="Photographs will be added to this visual journal." error={status === 'error'} />
        ) : (
          <PhotographyGallery items={items} />
        )}
      </div>

      <section className="notice container" aria-labelledby="notice-title">
        <div className="notice__head">
          <RevealText as="h2" text={notice.title} className="notice__title" />
        </div>
        <div className="notice__body">
          <Reveal as="p" className="notice__lead">
            {notice.lead}
          </Reveal>
          {notice.paragraphs.map((p, i) => (
            <Reveal key={i} as="p" className="notice__p" delay={i * 100}>
              {p}
            </Reveal>
          ))}
          <ul className="notice__notes">
            {notice.notes.map((n, i) => (
              <Reveal as="li" key={n.title} delay={i * 90}>
                <h3>{n.title}</h3>
                <p>{n.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </div>
  )
}
