import Link from './Link.jsx'

export default function Button({ to, href, onClick, variant = 'ghost', type, className = '', children, ...rest }) {
  const cls = `btn btn--${variant} ${className}`
  const inner = (
    <>
      <span>{children}</span>
      <span className="btn__arrow" aria-hidden="true">→</span>
    </>
  )
  if (to)
    return (
      <Link to={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a
        href={href}
        className={cls}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel="noreferrer noopener"
        {...rest}
      >
        {inner}
      </a>
    )
  return (
    <button type={type || 'button'} onClick={onClick} className={cls} {...rest}>
      {inner}
    </button>
  )
}
