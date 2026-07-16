import { useState } from 'react'
import Card from '../features/cards/components/card'
import KanaTable from '../kana/kanas'
import './cards.css'
import Footer from '../features/shared/components/footer'
import { useMode } from '../hooks/useMode'

export default function Cards() {
  const { mode } = useMode()

  const keys = [...KanaTable.keys()]
  const [rowIdx, setRowIdx] = useState(0)
  const [kanaIdx, setKanaIdx] = useState(0)

  // TODO: It may be a good idea to provide functions or [a class with] methods like `next` and
  // `previous` in the `kanas` module.
  const handleNext = (row: boolean) => {
    let newKanaIdx = kanaIdx + 1
    let newRowIdx = rowIdx

    if (row) {
      newKanaIdx = 0
      newRowIdx++

      if (newRowIdx === keys.length) {
        newRowIdx = 0
      }
    }

    while (true) {
      const tempRow = KanaTable.get(keys[newRowIdx])!.Basic.Monographs

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

  const handlePrevious = (row: boolean) => {
    let newKanaIdx = kanaIdx - 1
    let newRowIdx = rowIdx

    if (row) {
      newKanaIdx = 0
      newRowIdx--

      if (newRowIdx < 0) {
        newRowIdx = keys.length - 1
      }
    }

    while (true) {
      const tempRow = KanaTable.get(keys[newRowIdx])!.Basic.Monographs

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

  // Get the next and previous row first kanas.
  const prevRowIdx = rowIdx > 0 ? rowIdx - 1 : keys.length - 1
  const nextRowIdx = rowIdx < keys.length - 1 ? rowIdx + 1 : 0

  const prevRowLabel =
    mode === 'hiragana'
      ? KanaTable.get(keys[prevRowIdx])!.Basic.Monographs.at(0)!.hg
      : KanaTable.get(keys[prevRowIdx])!.Basic.Monographs.at(0)!.kk

  const nextRowLabel =
    mode === 'hiragana'
      ? KanaTable.get(keys[nextRowIdx])!.Basic.Monographs.at(0)!.hg
      : KanaTable.get(keys[nextRowIdx])!.Basic.Monographs.at(0)!.kk

  return (
    <div id='cards-page'>
      {/* TODO: We may need a page title/header, home button, etc.
      We'll also need to add a switch for kk/hg.  */}
      <div id='cards-container'>
        <Card kana={kana} />

        <div className='previous-card' onClick={() => handlePrevious(false)}>
          <span className='material-symbols-outlined'>chevron_left</span>
        </div>

        <div className='next-card' onClick={() => handleNext(false)}>
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>
      </div>

      {/* I'll add 'next row' and 'prev row' here. */}
      <div className='row-buttons'>
        <div className='previous-row' onClick={() => handlePrevious(true)}>
          <span className='material-symbols-outlined'>chevron_left</span>
          {prevRowLabel}
        </div>
        <div className='next-row' onClick={() => handleNext(true)}>
          {nextRowLabel}
          <span className='material-symbols-outlined'>chevron_right</span>
        </div>
      </div>

      {/* TODO: Maybe we don't need the footer here...
      but something else that could be more useful...*/}
      <Footer />
    </div>
  )
}
