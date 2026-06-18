import ModeSelector from './modeSelector'
import './mainMenu.scss'
import type { kanaKind } from '../../../types/kana'
import { useState } from 'react'

export default function MainMenu() {
  const [kana, setKana] = useState<kanaKind>('hiragana')

  return (
    <div className='main-menu'>
      <ModeSelector kana={kana} setKana={setKana} />
    </div>
  )
}
