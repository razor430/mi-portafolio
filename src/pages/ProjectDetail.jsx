import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar.jsx'
import { projects } from '../data/projects.js'

const fade = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function ProjectDetail() {
  const { id } = useParams()
  const project = projects.find((p) => p.id === id)

  if (!project) {
    return (
      <>
        <Navbar />
        <div className="mx-auto max-w-4xl px-6 pt-32">
          <h1 className="text-3xl font-bold">Proyecto no encontrado</h1>
          <Link to="/" className="mt-4 inline-block text-codex">← Volver</Link>
        </div>
      </>
    )
  }

  const isCodex = project.accent === 'codex'

  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 pt-28 pb-20">
        <motion.div {...fade} transition={{ duration: 0.5 }}>
          <Link to="/#proyectos" className="text-sm text-gray-400 hover:text-white">← Volver a proyectos</Link>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <h1 className="text-4xl font-extrabold">{project.title}</h1>
            <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${isCodex ? 'border-codex/40 bg-codex/10 text-codex' : 'border-deepseek/40 bg-deepseek/10 text-deepseek'}`}>
              {project.badge}
            </span>
          </div>
          <p className={`mt-4 max-w-3xl text-lg ${isCodex ? 'text-codex' : 'text-deepseek'}`}>{project.longDescription}</p>
        </motion.div>

        <motion.a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          {...fade}
          transition={{ duration: 0.5 }}
          className="mt-8 block overflow-hidden rounded-xl border border-edge bg-card hover:border-codex/60"
        >
          <img src={project.thumb} alt={`Miniatura de ${project.title}`} loading="lazy" className="w-full object-cover object-top" />
        </motion.a>

        <motion.section {...fade} transition={{ duration: 0.5 }} className="mt-10 rounded-xl border border-edge bg-card p-8">
          <h2 className="text-2xl font-bold">Qué es y por qué importa</h2>
          <div className="mt-4 space-y-4 leading-relaxed text-gray-300">
            {(project.overview || []).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </motion.section>

        {project.sections && (
          <section className="mt-8">
            <motion.h2 {...fade} transition={{ duration: 0.5 }} className="text-2xl font-bold">
              Recorrido por el sitio
            </motion.h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {project.sections.map((s) => (
                <motion.div
                  key={s.title}
                  {...fade}
                  transition={{ duration: 0.5 }}
                  className="rounded-xl border border-edge bg-card p-6"
                >
                  <h3 className={`font-bold ${isCodex ? 'text-codex' : 'text-deepseek'}`}>{s.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-400">{s.text}</p>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <motion.div {...fade} transition={{ duration: 0.5 }} className="rounded-xl border border-edge bg-card p-6">
            <h2 className="font-bold">Features destacadas</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {project.features.map((f) => (
                <li key={f}>— {f}</li>
              ))}
            </ul>
            {project.dataSources && (
              <>
                <h3 className="mt-6 text-sm font-bold uppercase tracking-widest text-gray-500">Fuentes de datos</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.dataSources.map((d) => (
                    <span key={d} className="rounded-full border border-edge bg-void px-3 py-1 text-xs text-gray-300">
                      {d}
                    </span>
                  ))}
                </div>
              </>
            )}
          </motion.div>
          <motion.div {...fade} transition={{ duration: 0.5 }} className="rounded-xl border border-edge bg-card p-6">
            <h2 className="font-bold">Stack y acceso</h2>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {project.stack.map((s) => (
                <li key={s}>— {s}</li>
              ))}
            </ul>
            {project.howToUse && (
              <p className="mt-4 border-l-2 border-edge pl-4 text-sm italic text-gray-400">{project.howToUse}</p>
            )}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className={`mt-6 inline-block rounded px-6 py-3 font-semibold ${isCodex ? 'bg-codex text-white' : 'bg-deepseek text-void'}`}
            >
              Abrir sitio en vivo ↗
            </a>
            <p className="mt-3 break-all text-xs text-gray-500">{project.liveUrl}</p>
          </motion.div>
        </div>
      </main>
    </>
  )
}
