import { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion'
import { Link } from 'react-router-dom'

const accentStyles = {
  codex: {
    badge: 'border-codex/40 bg-codex/10 text-codex',
    hover: 'hover:shadow-[0_0_50px_rgba(59,130,246,0.45)] hover:border-codex/60',
    glow: 'from-codex/40 via-codex/10 to-transparent',
    number: 'text-codex/25',
    bar: 'from-codex to-deepseek',
  },
  deepseek: {
    badge: 'border-deepseek/40 bg-deepseek/10 text-deepseek',
    hover: 'hover:shadow-[0_0_50px_rgba(16,185,129,0.45)] hover:border-deepseek/60',
    glow: 'from-deepseek/40 via-deepseek/10 to-transparent',
    number: 'text-deepseek/25',
    bar: 'from-deepseek to-codex',
  },
}

export default function ProjectCard({ project, index = 0, total = 0 }) {
  const style = accentStyles[project.accent] ?? accentStyles.codex
  const reduceMotion = useReducedMotion()
  const ref = useRef(null)
  const isOdd = index % 2 === 1
  const num = String(index + 1).padStart(2, '0')

  // --- Tilt 3D en toda la card, versión sutil (como antes pero ~40%) ---
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateX = useSpring(useTransform(my, [0, 1], [2.8, -2.8]), { stiffness: 180, damping: 24 })
  const rotateY = useSpring(useTransform(mx, [0, 1], [-3.6, 3.6]), { stiffness: 180, damping: 24 })
  const shineX = useTransform(mx, [0, 1], ['-30%', '30%'])

  // --- Parallax ligado al scroll: solo la foto flota, el texto no se mueve ---
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const imgY = useTransform(scrollYProgress, [0, 1], ['-10%', '10%'])
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.22, 1.08, 1.22])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.9, 0.25])

  const handlePhotoMouse = (e) => {
    if (reduceMotion || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  const resetMouse = () => {
    mx.set(0.5)
    my.set(0.5)
  }

  // Entrada impactante: alterna lateral + subida + blur + leve giro 3D
  const enterX = isOdd ? 90 : -90

  return (
    <motion.article
      ref={ref}
      onMouseMove={handlePhotoMouse}
      onMouseLeave={resetMouse}
      initial={{
        opacity: 0,
        y: 120,
        x: reduceMotion ? 0 : enterX,
        scale: 0.92,
        rotateX: reduceMotion ? 0 : 10,
        filter: 'blur(14px)',
      }}
      whileInView={{ opacity: 1, y: 0, x: 0, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.32, margin: '-60px' }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      style={reduceMotion ? { transformPerspective: 1200 } : { rotateX, rotateY, transformPerspective: 1200 }}
      className={`group relative overflow-hidden rounded-2xl border border-edge bg-card transition-[border-color,box-shadow] duration-300 ${style.hover}`}
    >
      {/* Número gigante de fondo */}
      <span
        aria-hidden
        className={`pointer-events-none absolute -top-4 right-4 z-10 select-none text-[7rem] font-black leading-none md:text-[9rem] ${style.number}`}
      >
        {num}
      </span>
      {/* Halo que respira con el scroll */}
      <motion.div
        aria-hidden
        style={{ opacity: reduceMotion ? 0.4 : glowOpacity }}
        className={`pointer-events-none absolute -inset-10 bg-gradient-to-br ${style.glow} blur-3xl`}
      />

      <div className={`relative grid md:grid-cols-2 ${isOdd ? '' : ''}`}>
        {/* FOTO con parallax de scroll + tilt sutil de toda la card + shine */}
        <Link
          to={`/proyectos/${project.id}`}
          aria-label={`Ver detalle de ${project.title}`}
          className={`relative block overflow-hidden ${isOdd ? 'md:order-2' : 'md:order-1'} min-h-[280px] md:min-h-[420px]`}
        >
          <motion.img
            src={project.thumb}
            alt={`Miniatura de ${project.title}`}
            loading="lazy"
            style={reduceMotion ? undefined : { y: imgY, scale: imgScale }}
            className="absolute inset-0 h-[120%] w-full object-cover object-top will-change-transform"
          />
          {/* Sombra interior para dar volumen */}
          <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/10" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/30 via-transparent to-transparent" />
          {/* Brillo que sigue al mouse */}
          {!reduceMotion && (
            <motion.div
              aria-hidden
              style={{ x: shineX }}
              className="absolute inset-y-0 w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          )}
          {/* Contador sobre la foto */}
          <span className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-void/70 px-3 py-1 text-xs font-bold tracking-widest backdrop-blur">
            {num} / {String(total).padStart(2, '0')}
          </span>
        </Link>

        {/* CONTENIDO fijo en scroll para que los botones no bailen */}
        <div className={`relative p-7 md:p-10 ${isOdd ? 'md:order-1' : 'md:order-2'}`}>
          <motion.span
            initial={{ opacity: 0, y: 16, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`inline-block rounded-full border px-3 py-1 text-xs font-semibold ${style.badge}`}
          >
            {project.badge}
          </motion.span>

          <motion.h3
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-3xl font-extrabold leading-tight md:text-4xl"
          >
            {project.title}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-3 text-sm leading-relaxed text-gray-400 md:text-base"
          >
            {project.description}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, delay: 0.48 }}
            className="mt-4 space-y-2 text-sm text-gray-300"
          >
            {project.features.map((f) => (
              <li key={f}>— {f}</li>
            ))}
          </motion.ul>

          {/* Barra de acento que se expande al entrar */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className={`mt-6 h-[3px] w-full origin-left rounded bg-gradient-to-r ${style.bar}`}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <Link
              to={`/proyectos/${project.id}`}
              className="rounded border border-edge px-4 py-2 text-sm transition-colors hover:border-white"
            >
              Ver detalle
            </Link>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded bg-white px-4 py-2 text-sm font-semibold text-void transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
            >
              Sitio en vivo ↗
            </a>
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}
