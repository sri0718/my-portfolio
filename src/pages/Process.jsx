import usePageTitle from '../hooks/usePageTitle.js'
import useContent, { resolveImage } from '../hooks/useContent.js'
import SectionTitle from '../components/SectionTitle.jsx'
import SmartImage from '../components/SmartImage.jsx'
import Reveal from '../components/Reveal.jsx'
import { artProcess, photoProcess } from '../data/process.js'

const prep = (list, fallback) =>
  (Array.isArray(list) && list.length ? list : fallback).map((s) => ({ ...s, image: resolveImage(s.image, 'process') }))

export default function Process() {
  usePageTitle('Process')
  const { data } = useContent('process')
  const art = prep(data && data.art, artProcess)
  const photo = prep(data && data.photography, photoProcess)

  return (
    <>
      <div className="phead">
        <SectionTitle eyebrow="Process" title="How I work." as="h1">
          Two different routes — one drawn, one captured — that begin the same way: by looking closely.
        </SectionTitle>
      </div>

      {/* ---------- ART ---------- */}
      <section className="container proc proc--art">
        <Reveal as="h2" className="proc__label">
          Art process
        </Reveal>
        <ol className="asteps">
          {art.map((s) => (
            <Reveal as="li" key={s.no + s.title} className={`astep ${s.image ? '' : 'astep--noimg'}`} delay={60}>
              <span className="astep__no">{s.no}</span>
              <div className="astep__body">
                <h3 className="astep__title">{s.title}</h3>
                <p className="astep__text">{s.text}</p>
              </div>
              {s.image && (
                <div className="astep__img paper">
                  <SmartImage src={s.image} alt={`${s.title} step`} ratio="4/3" kind="process" />
                </div>
              )}
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ---------- BRIDGE ---------- */}
      <div className="bridge container">
        <span className="bridge__line" aria-hidden="true" />
        <Reveal as="p" className="bridge__text">
          Whether it ends as a drawing or a photograph, it starts with noticing.
        </Reveal>
        <span className="bridge__line" aria-hidden="true" />
      </div>

      {/* ---------- PHOTOGRAPHY ---------- */}
      <section className="film">
        <div className="container">
          <Reveal as="h2" className="proc__label proc__label--film">
            Photography process
          </Reveal>
          <ol className="film__grid">
            {photo.map((s, i) => (
              <Reveal as="li" key={s.no + s.title} className="fframe" delay={(i % 3) * 100}>
                <div className="fframe__img">
                  {s.image ? (
                    <SmartImage src={s.image} alt={`${s.title} step`} fill kind="photo" />
                  ) : (
                    <span className="fframe__empty" aria-hidden="true">
                      {s.no}
                    </span>
                  )}
                </div>
                <div className="fframe__meta">
                  <span className="fframe__no">{s.no}</span>
                  <div>
                    <h3 className="fframe__title">{s.title}</h3>
                    <p className="fframe__text">{s.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </>
  )
}
