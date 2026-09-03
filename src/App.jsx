import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ProjectDetail from './pages/ProjectDetail.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-void text-white">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proyectos/:id" element={<ProjectDetail />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </div>
  )
}
