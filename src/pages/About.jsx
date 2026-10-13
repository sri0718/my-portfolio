import usePageTitle from '../hooks/usePageTitle.js'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionTitle from '../components/SectionTitle.jsx'
import SmartImage from '../components/SmartImage.jsx'
import { site } from '../data/site.js'

export default function About() {
  usePageTitle('About')
  const { about, education } = site

  return (
    <>
      <div className="phead">
        <SectionTitle eyebrow="About" title="About Me" as="h1" />
      </div>

      <section className="container about__intro">
        <Reveal variant="image" className="about__portrait">
          <div className="about__mat paper">
            <SmartImage src={about.portrait} alt="Sri Varshini" ratio="4/5" kind="art" emptyText="Profile image will be added soon." />
          </div>
        </Reveal>
        <div className="about__text">
          <Reveal>
            <h2 className="about__name">{site.name}</h2>
            <p className="about__role">
              {education.degree} {education.shortField} — {education.year}
              <br />
              {about.kicker}
              {education.institution ? (
                <>
                  <br />
                  {education.institution}
                </>
              ) : null}
            </p>
          </Reveal>
          {about.paragraphs.map((p, i) => (
            <Reveal key={i} delay={i * 80} as="p" className="about__p">
              {p}
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container contrast" aria-label="Logic and observation">
        <Reveal className="contrast__side">
          <h3>{about.contrast.left.label}</h3>
          <p>{about.contrast.left.text}</p>
        </Reveal>
        <div className="contrast__mid" aria-hidden="true">
          <span />
          <i>×</i>
          <span />
        </div>
        <Reveal className="contrast__side contrast__side--r" delay={150}>
          <h3>{about.contrast.right.label}</h3>
          <p>{about.contrast.right.text}</p>
        </Reveal>
      </section>

      <section className="container threecol">
        {[about.study, about.create, about.capture].map((c, i) => (
          <Reveal key={c.title} delay={i * 120} className="threecol__item">
            <h3 className="threecol__title">{c.title}</h3>
            <ul>
              {c.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </section>

      <section className="quote container">
        <Reveal as="blockquote" className="quote__text">
          “{site.philosophy}”
        </Reveal>
        <Reveal className="quote__cta" delay={200}>
          <Button to="/art" variant="solid">
            See my art
          </Button>
          <Button to="/journey">My creative journey</Button>
        </Reveal>
      </section>
    </>
  )
}
