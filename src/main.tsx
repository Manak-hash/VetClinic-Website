import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './index.css'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { ServicesPage } from './pages/ServicesPage'
import { EquipePage } from './pages/EquipePage'
import { FaqPage } from './pages/FaqPage'
import { ContactPage } from './pages/ContactPage'
import { ZonesPage, QuartierPage } from './pages/ZonesPage'
import { NotFoundPage } from './pages/NotFoundPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/" element={<ServicesPage />} />
          <Route path="/equipe/" element={<EquipePage />} />
          <Route path="/faq/" element={<FaqPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="/zones/" element={<ZonesPage />} />
          <Route path="/zones/:quartier/" element={<QuartierPage />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
