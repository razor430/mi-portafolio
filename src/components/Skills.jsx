import { motion } from 'framer-motion'

const groups = [
  { title: 'AI-Driven', accent: 'text-deepseek', items: ['DeepSeek', 'Codex', 'Prompt Engineering', 'Agentes IA'] },
  { title: 'Frontend', accent: 'text-gray-200', items: ['React + Vite', 'Tailwind CSS', 'Framer Motion', 'React Router'] },
]

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold">Skills</h2>
      </motion.div>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {groups.map((g) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-xl border border-edge bg-card p-6"
          >
            <h3 className={`font-bold ${g.accent}`}>{g.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-gray-300">
              {g.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
