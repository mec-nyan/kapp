import './home.scss'
import Card from '../features/cards/components/Card'
import TopBar from '../features/shared/components/topBar'

export function Home() {
  return (
    <div id='main-container'>
      <TopBar />

      <Card
        hiragana='も'
        katakana='モ'
        picture='🍑'
        wordInHiragana='もも'
        wordInRomaji='momo'
      />

      <footer>Made with 💜 by nano.</footer>
    </div>
  )
}
