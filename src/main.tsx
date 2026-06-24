import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.scss'
import { Home } from './pages/home'
import TopBar from './features/shared/components/topBar'
import Footer from './features/shared/components/footer'
import About from './pages/about'
import Chart from './pages/chart'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <TopBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        {/* TODO: I may use a context for 'kana' (hiragana/katakana)
          as well as for language/theme/settings/etc. */}
        <Route path='/chart' element={<Chart kana='hiragana' />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
)
