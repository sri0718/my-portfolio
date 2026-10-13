import { useEffect } from 'react'
import { useRoute } from './hooks/useRoute.js'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Cursor from './components/Cursor.jsx'
import Grain from './components/Grain.jsx'
import PageTransition from './components/PageTransition.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Art from './pages/Art.jsx'
import Photography from './pages/Photography.jsx'
import Sketchbook from './pages/Sketchbook.jsx'
import Process from './pages/Process.jsx'
import Journey from './pages/Journey.jsx'
import Contact from './pages/Contact.jsx'

const ROUTES = {
  '/': Home,
  '/about': About,
  '/art': Art,
  '/photography': Photography,
  '/sketchbook': Sketchbook,
  '/process': Process,
  '/journey': Journey,
  '/contact': Contact,
}

export default function App() {
  const route = useRoute()
  const Page = ROUTES[route] || Home

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [route])

  return (
    <>
      <Grain />
      <Cursor />
      <Navbar route={route} />
      <PageTransition routeKey={route}>
        <Page />
      </PageTransition>
      <Footer />
    </>
  )
}
