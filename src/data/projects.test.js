import { describe, it, expect } from 'vitest'
import { projects } from './projects.js'

describe('projects data', () => {
  it('tiene 6 proyectos con ids únicos', () => {
    expect(projects).toHaveLength(6)
    const ids = projects.map((p) => p.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('cada proyecto tiene los campos obligatorios', () => {
    for (const p of projects) {
      expect(p.id, 'id').toBeTruthy()
      expect(p.title, 'title').toBeTruthy()
      expect(p.badge, 'badge').toBeTruthy()
      expect(['codex', 'deepseek']).toContain(p.accent)
      expect(p.liveUrl).toMatch(/^https:\/\//)
      expect(p.description, 'description').toBeTruthy()
      expect(p.longDescription, 'longDescription').toBeTruthy()
      expect(p.overview.length).toBeGreaterThan(0)
      expect(p.sections.length).toBeGreaterThan(0)
      expect(p.features.length).toBeGreaterThan(0)
      expect(p.stack.length).toBeGreaterThan(0)
    }
  })

  it('usa miniaturas locales', () => {
    for (const p of projects) {
      expect(p.thumb).toMatch(/^\/thumbs\/.+\.jpg$/)
    }
  })

  it('incluye los proyectos esperados', () => {
    const ids = projects.map((p) => p.id)
    expect(ids).toEqual(
      expect.arrayContaining(['mercado-ar', 'porfolio-ar', 'analab', 'etf-explorer', 'portfolio', 'ofertas-ar'])
    )
  })
})
