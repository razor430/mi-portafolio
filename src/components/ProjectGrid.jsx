import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function ProjectGrid() {
  return (
    <section id="proyectos" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold">Proyectos</h2>
        <p className="mt-2 text-gray-400">Fintech, salud y más — co-creados con IA, optimizados para performance.</p>
      </motion.div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}
