import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar.jsx'

const renderNavbar = () =>
  render(
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  )

describe('Navbar', () => {
  it('muestra el logo y los links de escritorio', () => {
    renderNavbar()
    expect(screen.getByText('AI.DEV')).toBeInTheDocument()
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('el botón hamburguesa abre y cierra el menú móvil', () => {
    renderNavbar()
    const button = screen.getByRole('button', { name: /menú/i })
    expect(button).toHaveAttribute('aria-expanded', 'false')

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getAllByText('Proyectos')).toHaveLength(2)

    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
