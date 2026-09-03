import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const accentStyles = {
  codex: {
    badge: 'border-codex/40 bg-codex/10 text-codex',
    hover: 'hover:shadow-[0_0_30px_rgba(59,130,246,0.45)] hover:border-codex/60',
  },
  deepseek: {
    badge: 'border-deepseek/40 bg-deepseek/10 text-deepseek',
    hover: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.45)] hover:border-deepseek/60',
  },
}

export default function ProjectCard({ project }) {
  const style = accentStyles[project.accent]
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`overflow-hidden rounded-xl border border-edge bg-card transition-all duration-300 hover:scale-[1.02] ${style.hover}`}
    >
      <Link to={`/proyectos/${project.id}`} className="block overflow-hidden">
        <img
          src={project.thumb}
          alt={`Miniatura de ${project.title}`}
          loading="lazy"
          className="h-52 w-full object-cover object-top"
        />
      </Link>
      <div className="p-6">
        <span className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}>
          {project.badge}
        </span>
        <h3 className="mt-4 text-2xl font-bold">{project.title}</h3>
        <p className="mt-3 text-sm text-gray-400">{project.description}</p>
        <ul className="mt-4 space-y-2 text-sm text-gray-300">
          {project.features.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
        <div className="mt-6 flex gap-3">
          <Link
            to={`/proyectos/${project.id}`}
            className="rounded border border-edge px-4 py-2 text-sm hover:border-white"
          >
            Ver detalle
          </Link>
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded bg-white px-4 py-2 text-sm font-semibold text-void hover:opacity-90"
          >
            Sitio en vivo ↗
          </a>
        </div>
      </div>
    </motion.article>
  )
}
