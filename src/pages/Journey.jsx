import usePageTitle from '../hooks/usePageTitle.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

export default function Journey() {
  usePageTitle('Creative Journey')
  return (
    <>
      <div className="phead">
        <SectionTitle eyebrow="Creative Journey" title="Still becoming." as="h1">
          A student, an artist and a photographer growing side by side. This timeline is a starting point and will keep changing.
        </SectionTitle>
      </div>
      <section className="container">
        <ol className="timeline">
          {site.journey.map((m, i) => (
            <li key={m.phase} className={`tl ${m.tag === 'Present' ? 'tl--now' : ''}`}>
              <Reveal className="tl__card" delay={80}>
                <p className="eyebrow">{m.tag}</p>
                <h2 className="tl__phase">{m.phase}</h2>
                <p className="tl__label">{m.label}</p>
                <p className="tl__text">{m.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
