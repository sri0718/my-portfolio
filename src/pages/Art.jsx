import usePageTitle from '../hooks/usePageTitle.js'
import { useList } from '../hooks/useContent.js'
import SectionTitle from '../components/SectionTitle.jsx'
import Gallery from '../components/Gallery.jsx'
import EmptyGallery from '../components/EmptyGallery.jsx'
import Reveal from '../components/Reveal.jsx'
import { site } from '../data/site.js'

export default function Art() {
  usePageTitle('Art')
  const { items, status } = useList('artworks', 'artworks')
  return (
    <div className="artpage">
      <div className="phead">
        <SectionTitle eyebrow="Art" title="Lines, shadows & form." as="h1">
          Graphite, charcoal, pencil and digital work — studies of people, light and quiet moments. A growing collection from a student artist who is still learning.
        </SectionTitle>
      </div>
      <div className="container">
        {status === 'loading' ? (
          <div className="loading" />
        ) : items.length === 0 ? (
          <EmptyGallery kind="art" title="Artwork coming soon." text="Graphite, charcoal, pencil and digital pieces will be shown here." error={status === 'error'} />
        ) : (
          <Gallery items={items} />
        )}
      </div>
      <section className="container artpage__note">
        <Reveal as="p" className="artpage__quote">
          “{site.philosophy}”
        </Reveal>
      </section>
    </div>
  )
}
