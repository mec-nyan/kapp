import { useState } from 'react'
import Card from '../features/cards/components/card'
import KanaTable from '../kana/kanas'
import './cards.scss'

export default function Cards() {
  const keys = [...KanaTable.keys()]
  const [rowIdx, setRowIdx] = useState(0)
  const [kanaIdx, setKanaIdx] = useState(0)

  // TODO: It may be a good idea to provide functions or [a class with] methods like `next` and
  // `previous` in the `kanas` module.
  const handleNext = () => {
    let newKanaIdx = kanaIdx + 1
    let newRowIdx = rowIdx

    while (true) {
      let tempRow = KanaTable.get(keys[newRowIdx])!.Basic.Monographs

      while (newKanaIdx < tempRow.length) {
        // We find a valid kana!
        if (tempRow.at(newKanaIdx) !== null) {
          setRowIdx(newRowIdx)
          setKanaIdx(newKanaIdx)
          return
        }
        newKanaIdx++
      }

      // Move on to the next row
      newKanaIdx = 0
      newRowIdx++

      if (newRowIdx === keys.length) {
        newRowIdx = 0
      }
    }
  }

  const handlePrevious = () => {
    let newKanaIdx = kanaIdx - 1
    let newRowIdx = rowIdx

    while (true) {
      let tempRow = KanaTable.get(keys[newRowIdx])!.Basic.Monographs

      while (newKanaIdx >= 0) {
        // We find a valid kana!
        if (tempRow.at(newKanaIdx) !== null) {
          setRowIdx(newRowIdx)
          setKanaIdx(newKanaIdx)
          return
        }
        newKanaIdx--
      }

      // Move on to the next row.  We know for certain that each row has 5 elements.
      newKanaIdx = 4
      newRowIdx--

      if (newRowIdx < 0) {
        newRowIdx = keys.length - 1
      }
    }
  }

  // We know for sure that this is a valid key.
  const currentRow = KanaTable.get(keys[rowIdx])!.Basic.Monographs
  // We know that row[0] is a valid kana.
  const kana = currentRow.at(kanaIdx)!

  return (
    <div id='cards-page'>
      {/* TODO: We may need a page title/header, home button, etc.
      We'll also need to add a switch for kk/hg.  */}
      <Card
        hiragana={kana.hg}
        katakana={kana.kk}
        picture={kana.examples.hg.picture || '🫥'}
        wordInHiragana={kana.examples.hg.jap || '...'}
        wordInRomaji={kana.examples.hg.rmj || '...'}
      />

      <div className='cards-navigation-buttons'>
        <div className='card-previous' onClick={handlePrevious}>
          <span className='material-symbols-outlined'>chevron_left</span>
          previous
        </div>

        <div className='card-next' onClick={handleNext}>
          next
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>
      </div>
    </div>
  )
}
