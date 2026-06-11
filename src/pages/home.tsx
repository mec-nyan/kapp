import './home.scss'
import TopBar from '../features/shared/components/topBar'
import Footer from '../features/shared/components/footer'
import MainMenu from '../features/home/components/mainMenu'

export function Home() {
  return (
    <div id='main-container'>
      <TopBar />

      <MainMenu />

      <Footer />
    </div>
  )
}
