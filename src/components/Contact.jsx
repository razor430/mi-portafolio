import { useState } from 'react'
import { motion } from 'framer-motion'

const inputCls =
  'w-full rounded-lg border border-edge bg-void px-4 py-3 text-sm text-white placeholder-gray-500 outline-none transition focus:border-deepseek focus:shadow-[0_0_15px_rgba(16,185,129,0.35)]'

export default function Contact() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' })
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Contacto portfolio — ${form.nombre}`)
    const body = encodeURIComponent(`${form.mensaje}\n\n— ${form.nombre} (${form.email})`)
    window.location.href = `mailto:contacto@fintech.dev?subject=${subject}&body=${body}`
    setEnviado(true)
  }

  return (
    <section id="contacto" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="grid gap-8 rounded-xl border border-edge bg-card p-8 md:grid-cols-2 md:p-10"
      >
        <div className="flex flex-col justify-center">
          <p className="text-sm tracking-widest text-deepseek">CONTACTO</p>
          <h2 className="mt-2 text-3xl font-bold">¿Co-creamos tu próxima aplicación?</h2>
          <p className="mt-3 text-gray-400">
            Disponible para proyectos Fintech, salud y AI-Driven Development.
            Contame tu idea y te respondo a la brevedad.
          </p>
          <a
            href="mailto:contacto@fintech.dev"
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-edge px-5 py-2.5 text-sm text-gray-200 transition hover:border-codex hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
          >
            <span className="h-2 w-2 rounded-full bg-deepseek" />
            contacto@fintech.dev
          </a>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="nombre" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                Nombre
              </label>
              <input
                id="nombre"
                name="nombre"
                required
                value={form.nombre}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                className={inputCls}
              />
            </div>
          </div>
          <div>
            <label htmlFor="mensaje" className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-gray-500">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              required
              rows={4}
              value={form.mensaje}
              onChange={handleChange}
              placeholder="Contame sobre tu proyecto…"
              className={`${inputCls} resize-none`}
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-deepseek via-emerald-400 to-codex px-6 py-3.5 font-bold text-void transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_35px_rgba(59,130,246,0.55)] active:scale-[0.99]"
          >
            Enviar mensaje ↗
          </button>
          {enviado && (
            <p className="text-center text-sm text-deepseek">
              Abriendo tu cliente de correo para enviar el mensaje…
            </p>
          )}
        </form>
      </motion.div>
    </section>
  )
}
