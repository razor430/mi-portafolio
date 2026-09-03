import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="mx-auto max-w-6xl px-6 pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="mb-4 text-sm tracking-widest text-deepseek">AI-DRIVEN DEVELOPMENT</p>
        <h1 className="text-5xl font-extrabold leading-tight">
          Aplicaciones interactivas <br />
          de <span className="text-codex">alta performance</span>
        </h1>
        <p className="mt-6 max-w-2xl text-gray-400">
          Co-creación de software Fintech y de salud con asistentes de IA como DeepSeek y Codex.
          Mercado en tiempo real, tracking patrimonial y seguimiento de análisis clínicos.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#proyectos" className="rounded-lg bg-gradient-to-r from-deepseek via-emerald-400 to-codex px-6 py-3.5 font-bold text-void transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] active:scale-[0.99]">
            Ver proyectos
          </a>
          <a href="#contacto" className="rounded border border-edge px-6 py-3 text-gray-200 hover:border-codex">
            Contactar
          </a>
        </div>
      </motion.div>
    </section>
  )
}
