import Navbar from '../components/Navbar.jsx'
import Hero from '../components/Hero.jsx'
import ProjectGrid from '../components/ProjectGrid.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'

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
      <footer className="border-t border-edge py-6 text-center text-sm text-gray-500">
        AI-Driven Development — DeepSeek x Codex x Muse
      </footer>
    </>
  )
}
