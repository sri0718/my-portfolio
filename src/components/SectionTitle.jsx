import Reveal from './Reveal.jsx'
import RevealText from './RevealText.jsx'

export default function SectionTitle({ eyebrow, title, as = 'h2', size = 'lg', align = 'left', className = '', children }) {
  return (
    <header className={`stitle stitle--${size} stitle--${align} ${className}`}>
      {eyebrow && (
        <Reveal as="p" className="eyebrow stitle__eyebrow">
          {eyebrow}
        </Reveal>
      )}
      <RevealText as={as} text={title} className="stitle__title" />
      {children && (
        <Reveal className="stitle__desc" delay={250}>
          {children}
        </Reveal>
      )}
    </header>
  )
}
