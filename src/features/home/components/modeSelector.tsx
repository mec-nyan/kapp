import { inKana } from '../../../kana/kanas'
import './modeSelector.css'
import { useMode } from '../../../hooks/useMode'

export default function ModeSelector() {
  const { mode, setMode } = useMode()

  return (
    <div className='mode-selector-band'>
      <div className='mode-selector'>
        <div
          className={`mode-outer-gradient ${mode === 'hiragana' ? 'left' : 'right'}`}
        >
          <div></div>
        </div>

        <div
          className={`mode-hiragana-outer ${mode === 'hiragana' && 'active'}`}
          onClick={() => setMode('hiragana')}
        >
          <div className={`mode-hiragana ${mode === 'hiragana' && 'active'}`}>
            <div className='label-in-kana'>{inKana('hiragana')}</div>
            <div className='label-in-romaji'>hiragana</div>
          </div>
        </div>

        <div
          className={`mode-katakana-outer ${mode === 'katakana' && 'active'}`}
          onClick={() => setMode('katakana')}
        >
          <div className={`mode-katakana ${mode === 'katakana' && 'active'}`}>
            <div className='label-in-kana'>{inKana('katakana')}</div>
            <div className='label-in-romaji'>katakana</div>
          </div>
        </div>
      </div>
    </div>
  )
}
