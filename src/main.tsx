import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.scss'
import './config/i18n'
import { Home } from './pages/home'
import TopBar from './features/shared/components/topBar'
import Footer from './features/shared/components/footer'
import About from './pages/about'
import Chart from './pages/chart'
import Cards from './pages/cards'
import { registerServiceWorker } from './service-worker'
import LanguageProvider from './context/LanguageProvider'

registerServiceWorker()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <LanguageProvider initialLang='en'>
        <TopBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* TODO: I may use a context for 'kana' (hiragana/katakana)
          as well as for language/theme/settings/etc. */}
          <Route path='/chart' element={<Chart kana='hiragana' />} />

          <Route path='/cards' element={<Cards />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
)
