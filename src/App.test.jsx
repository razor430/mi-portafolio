import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import App from './App.jsx'

const renderAt = (route) =>
  render(
    <MemoryRouter initialEntries={[route]}>
      <App />
    </MemoryRouter>
  )

describe('routing', () => {
  it('la home muestra hero, proyectos, skills, contacto y footer', () => {
    renderAt('/')
    expect(screen.getByText(/aplicaciones interactivas/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Proyectos' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Skills' })).toBeInTheDocument()
    expect(screen.getByText(/co-creamos tu próxima aplicación/i)).toBeInTheDocument()
    expect(screen.getByText(/deepseek x codex x muse/i)).toBeInTheDocument()
  })

  it('la ruta detalle muestra el proyecto con su descripción elaborada', () => {
    renderAt('/proyectos/mercado-ar')
    expect(screen.getByRole('heading', { name: 'Mercado AR Dashboard' })).toBeInTheDocument()
    expect(screen.getByText(/qué es y por qué importa/i)).toBeInTheDocument()
    expect(screen.getByText(/recorrido por el sitio/i)).toBeInTheDocument()
    expect(screen.getByText(/deepseek x codex x muse/i)).toBeInTheDocument()
  })

  it('un id inexistente muestra estado de no encontrado', () => {
    renderAt('/proyectos/no-existe')
    expect(screen.getByText(/proyecto no encontrado/i)).toBeInTheDocument()
  })
})
