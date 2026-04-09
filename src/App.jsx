import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Works from './components/Works.jsx'
import Experience from './components/Experience.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'

export default function App() {
  return (
    <>
      <Nav />
      <main style={{ paddingTop: '56px' }}>
        <Hero />
        <About />
        <Works />
        <Experience />
        <Education />
        <Contact />
      </main>
    </>
  )
}
