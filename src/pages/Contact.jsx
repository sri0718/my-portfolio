import { useState } from 'react'
import usePageTitle from '../hooks/usePageTitle.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Reveal from '../components/Reveal.jsx'
import Button from '../components/Button.jsx'
import { site } from '../data/site.js'

export default function Contact() {
  usePageTitle('Contact')
  const { contact } = site
  const [status, setStatus] = useState({ state: 'idle', msg: '' })

  const links = [
    { label: 'Email', handle: contact.email, url: `mailto:${contact.email}` },
    ...contact.socials,
  ]

  const onSubmit = async (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    if (contact.formEndpoint) {
      setStatus({ state: 'sending', msg: 'Sending…' })
      try {
        const res = await fetch(contact.formEndpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(data),
        })
        if (!res.ok) throw new Error('bad response')
        setStatus({ state: 'sent', msg: 'Thank you — your message has been sent.' })
        form.reset()
      } catch {
        setStatus({ state: 'error', msg: 'The message could not be sent. Please try again or write to me by email.' })
      }
    } else {
      const subject = encodeURIComponent(`Portfolio message from ${data.name}`)
      const body = encodeURIComponent(`${data.message}\n\n— ${data.name} (${data.email})`)
      window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`
      setStatus({ state: 'sent', msg: 'Your email app should open with the message ready to send.' })
    }
  }

  return (
    <>
      <div className="phead">
        <SectionTitle eyebrow="Contact" title={contact.heading} as="h1">
          {contact.intro}
        </SectionTitle>
      </div>

      <section className="container contact">
        <Reveal className="contact__links">
          <ul>
            {links.map((l) => (
              <li key={l.label}>
                <a href={l.url} target={l.url.startsWith('http') ? '_blank' : undefined} rel="noreferrer noopener" data-cursor="Open">
                  <span className="contact__label">{l.label}</span>
                  <span className="contact__handle">{l.handle}</span>
                  <span aria-hidden="true">→</span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="contact__form" delay={150}>
          <form onSubmit={onSubmit} noValidate={false}>
            <label className="field">
              <span>Name</span>
              <input type="text" name="name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="email" autoComplete="email" required />
            </label>
            <label className="field">
              <span>Message</span>
              <textarea name="message" rows="5" required />
            </label>
            <div className="contact__submit">
              <Button type="submit" variant="solid">
                Send message
              </Button>
              <p className={`contact__status is-${status.state}`} role="status" aria-live="polite">
                {status.msg}
              </p>
            </div>
          </form>
        </Reveal>
      </section>
    </>
  )
}
