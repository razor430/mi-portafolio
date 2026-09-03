import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Contact from './Contact.jsx'

describe('Contact', () => {
  it('renderiza el formulario con sus campos obligatorios', () => {
    render(<Contact />)
    expect(screen.getByLabelText(/nombre/i)).toBeRequired()
    expect(screen.getByLabelText(/email/i)).toBeRequired()
    expect(screen.getByLabelText(/mensaje/i)).toBeRequired()
    expect(screen.getByRole('button', { name: /enviar mensaje/i })).toBeInTheDocument()
  })

  it('muestra el email directo', () => {
    render(<Contact />)
    expect(screen.getByText('contacto@fintech.dev')).toHaveAttribute(
      'href',
      'mailto:contacto@fintech.dev'
    )
  })
})
