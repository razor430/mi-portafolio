import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ProjectCard from './ProjectCard.jsx'
import { projects } from '../data/projects.js'

const renderCard = (project) =>
  render(
    <MemoryRouter>
      <ProjectCard project={project} />
    </MemoryRouter>
  )

describe('ProjectCard', () => {
  it('renderiza título, badge y descripción', () => {
    const project = projects[0]
    renderCard(project)
    expect(screen.getByText(project.title)).toBeInTheDocument()
    expect(screen.getByText(project.badge)).toBeInTheDocument()
    expect(screen.getByText(project.description)).toBeInTheDocument()
  })

  it('muestra la miniatura con alt accesible', () => {
    const project = projects[0]
    renderCard(project)
    const img = screen.getByAltText(`Miniatura de ${project.title}`)
    expect(img).toHaveAttribute('src', project.thumb)
  })

  it('enlaza al detalle interno y al sitio en vivo', () => {
    const project = projects[0]
    renderCard(project)
    expect(screen.getByText('Ver detalle').closest('a')).toHaveAttribute(
      'href',
      `/proyectos/${project.id}`
    )
    const live = screen.getByText(/Sitio en vivo/)
    expect(live).toHaveAttribute('href', project.liveUrl)
    expect(live).toHaveAttribute('target', '_blank')
  })
})
