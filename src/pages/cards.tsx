import Card from '../features/cards/components/card'
import KanaTable from '../kana/kanas'
import './cards.scss'

export default function Cards() {
  const kana = KanaTable.get('a')!.Basic.Monographs.at(0)!
  return (
    <div id='cards-page'>
      {/* TODO: We may need a page title/header, home button, etc.
      We'll also need to add a switch for kk/hg.  */}
      <Card
        hiragana={kana.hg}
        katakana={kana.kk}
        picture={kana.examples.hg.picture}
        wordInHiragana={kana.examples.hg.jap}
        wordInRomaji={kana.examples.hg.rmj}
      />

      <div className='cards-navigation-buttons'>
        <div className='card-previous'>
          <span className='material-symbols-outlined'>chevron_left</span>
          previous
        </div>

        <div className='card-next'>
          next
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>
      </div>
    </div>
  )
}
