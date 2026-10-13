import { Fragment } from 'react'
import useReveal from '../hooks/useReveal.js'

// Word-by-word masked text reveal. Wrap a word in *asterisks* to set it in italics.
export default function RevealText({ text, as: Tag = 'h2', className = '', delay = 0 }) {
  const [ref, shown] = useReveal()
  const words = text.split(' ')
  return (
    <Tag ref={ref} className={`rtext ${shown ? 'is-in' : ''} ${className}`} aria-label={text.replace(/\*/g, '')}>
      {words.map((w, i) => {
        const italic = w.startsWith('*')
        return (
          <Fragment key={i}>
            <span className="rtext__mask" aria-hidden="true">
              <span
                className={`rtext__word ${italic ? 'is-italic' : ''}`}
                style={{ '--i': i, '--d': `${delay}ms` }}
              >
                {w.replace(/\*/g, '')}
              </span>
            </span>{' '}
          </Fragment>
        )
      })}
    </Tag>
  )
}
