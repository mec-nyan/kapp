import './home.css'
import MainMenu from '../features/home/components/mainMenu'
import Footer from '../features/shared/components/footer'
import ModeSelector from '../features/home/components/modeSelector'

export function Home() {
  return (
    <div id='main-container'>
      <ModeSelector />
      <MainMenu />
      <Footer />
    </div>
  )
}
