import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'
import Footer from '../components/Footer.jsx'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProjectGrid />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
