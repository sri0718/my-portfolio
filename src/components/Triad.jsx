import { useState } from 'react'
import useReveal from '../hooks/useReveal.js'
import { site } from '../data/site.js'

// CODE × CANVAS × CAMERA — three words, one name at the centre, linked by drawn lines.
const ANCHORS = { code: [345, 175], canvas: [655, 175], camera: [500, 505] }
const CORE = [500, 320]

export default function Triad() {
  const [ref, shown] = useReveal({ threshold: 0.25 })
  const [hot, setHot] = useState(null)
  const nodes = ['code', 'canvas', 'camera'].map((k) => ({ key: k, ...site.triad[k] }))
  const edges = [
    ['code', 'canvas'],
    ['canvas', 'camera'],
    ['camera', 'code'],
  ]

  return (
    <section className="triad-sec" aria-label="Code, Canvas, Camera">
      <div className="container">
        <div ref={ref} className={`triad ${shown ? 'is-in' : ''} ${hot ? 'has-hot' : ''}`}>
          <svg className="triad__svg" viewBox="0 0 1000 700" aria-hidden="true">
            <g>
              {edges.map(([a, b]) => (
                <line
                  key={a + b}
                  className="triad__edge"
                  pathLength="100"
                  x1={ANCHORS[a][0]}
                  y1={ANCHORS[a][1]}
                  x2={ANCHORS[b][0]}
                  y2={ANCHORS[b][1]}
                />
              ))}
            </g>
            <g>
              {nodes.map((n, i) => (
                <line
                  key={n.key}
                  className={`triad__spoke ${hot === n.key ? 'is-hot' : ''}`}
                  pathLength="100"
                  style={{ transitionDelay: `${0.9 + i * 0.25}s` }}
                  x1={CORE[0]}
                  y1={CORE[1]}
                  x2={ANCHORS[n.key][0]}
                  y2={ANCHORS[n.key][1]}
                />
              ))}
            </g>
            <g className="triad__flow">
              {nodes.map((n) => (
                <line key={n.key} x1={CORE[0]} y1={CORE[1]} x2={ANCHORS[n.key][0]} y2={ANCHORS[n.key][1]} />
              ))}
            </g>
            {nodes.map((n) => (
              <circle key={n.key} className="triad__dot" cx={ANCHORS[n.key][0]} cy={ANCHORS[n.key][1]} r="4" />
            ))}
          </svg>

          {nodes.map((n, i) => (
            <div
              key={n.key}
              className={`triad__node triad__node--${n.key}`}
              style={{ '--i': i }}
              tabIndex={0}
              onMouseEnter={() => setHot(n.key)}
              onMouseLeave={() => setHot(null)}
              onFocus={() => setHot(n.key)}
              onBlur={() => setHot(null)}
            >
              <h3 className="triad__word">{n.word}</h3>
              <ul className="triad__list">
                {n.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}

          <div className="triad__core">
            <div className="triad__orbit" aria-hidden="true" />
            <p className="triad__name">
              Sri
              <br />
              Varshini
            </p>
            <p className="triad__sub">Code × Canvas × Camera</p>
          </div>
        </div>
      </div>
    </section>
  )
}
