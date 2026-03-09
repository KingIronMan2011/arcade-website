import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import ArcadePage from './pages/ArcadePage'
import SnakePage from './pages/SnakePage'
import TetrisPage from './pages/TetrisPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename="/arcade-website">
      <Routes>
        <Route path="/"       element={<ArcadePage />} />
        <Route path="/snake"  element={<SnakePage />} />
        <Route path="/tetris" element={<TetrisPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
