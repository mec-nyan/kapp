import ModeSelector from './modeSelector'
import './mainMenu.scss'
import { useState } from 'preact/hooks'
import type { kanaKind } from '../../../types/kana'

export default function MainMenu() {
  const [kana, setKana] = useState<kanaKind>('hiragana')

  return (
    <div className='main-menu'>
      <ModeSelector kana={kana} setKana={setKana} />
    </div>
  )
}
