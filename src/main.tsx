import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import './config/i18n'
import { Home } from './pages/home'
import TopBar from './features/shared/components/topBar'
import About from './pages/about'
import Chart from './pages/chart'
import Cards from './pages/cards'
import { registerServiceWorker } from './service-worker'
import LanguageProvider from './context/LanguageProvider'
import ModeProvider from './context/ModeProvider'

registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider initialLang='en'>
        <ModeProvider initialMode='hiragana'>
          <TopBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/chart' element={<Chart />} />
            <Route path='/cards' element={<Cards />} />
          </Routes>
        </ModeProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
