import './app.scss'
import Card from './components/Card'

export function App() {
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
