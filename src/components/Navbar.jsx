import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#skills', label: 'Skills' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-edge bg-void/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-bold tracking-widest" onClick={() => setOpen(false)}>
          <span className="text-deepseek">&lt;</span>AI.DEV
          <span className="text-codex">/&gt;</span>
        </Link>

        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">
              {l.label}
            </a>
          ))}
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
          aria-expanded={open}
          className="group flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-gray-200 transition-all duration-300 group-hover:bg-deepseek ${
              open ? 'translate-y-[8px] rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-200 transition-all duration-300 group-hover:bg-deepseek ${
              open ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-200 transition-all duration-300 group-hover:bg-deepseek ${
              open ? '-translate-y-[8px] -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-edge md:hidden"
          >
            <div className="flex flex-col px-6 py-2">
              {links.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.2 }}
                  className="border-b border-edge/60 py-4 text-sm text-gray-200 transition last:border-0 hover:pl-1 hover:text-white"
                >
                  <span className="mr-2 text-deepseek">—</span>
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
