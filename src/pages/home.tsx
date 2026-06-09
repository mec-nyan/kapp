import './home.scss'
import Card from '../features/cards/components/Card'

export function Home() {
  return (
    <div id='main-container'>
      <h1>Kapp!</h1>

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
