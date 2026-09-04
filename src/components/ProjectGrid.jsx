import { motion, useScroll, useSpring } from 'framer-motion'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

export default function ProjectGrid() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 })

  return (
    <section id="proyectos" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-20">
      {/* Barra de progreso del scroll de la sección */}
      <motion.div
        aria-hidden
        style={{ scaleX: progress }}
        className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-[3px] origin-left bg-gradient-to-r from-deepseek via-emerald-400 to-codex"
      />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-deepseek">
          Scroll para revelar — {String(projects.length).padStart(2, '0')} proyectos
        </p>
        <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">Proyectos</h2>
        <p className="mt-3 max-w-2xl text-gray-400">
          Uno por vez. Bajá y cada proyecto irrumpe con su propia escena — foto con profundidad 3D incluida.
        </p>
      </motion.div>

      {/* 1 por vez: columna única, escenas amplias */}
      <div className="mx-auto mt-12 flex max-w-5xl flex-col gap-16 md:gap-28">
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  )
}
