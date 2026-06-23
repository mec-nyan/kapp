import type { kanaKind } from '../../../types/kana'
import { inKana } from '../../../kana/kanas'
import './modeSelector.scss'

export default function ModeSelector({
  kana,
  setKana,
}: {
  kana: kanaKind
  setKana: (k: kanaKind) => void
}) {
  return (
    <div className='mode-selector-band'>
      <div className='mode-selector'>
        <div
          className={`mode-outer-gradient ${kana === 'hiragana' ? 'left' : 'right'}`}
        >
          <div></div>
        </div>

        <div
          className={`mode-hiragana-outer ${kana === 'hiragana' && 'active'}`}
          onClick={() => setKana('hiragana')}
        >
          <div className={`mode-hiragana ${kana === 'hiragana' && 'active'}`}>
            <div className='label-in-kana'>{inKana('hiragana')}</div>
            <div className='label-in-romaji'>hiragana</div>
          </div>
        </div>

        <div
          className={`mode-katakana-outer ${kana === 'katakana' && 'active'}`}
          onClick={() => setKana('katakana')}
        >
          <div className={`mode-katakana ${kana === 'katakana' && 'active'}`}>
            <div className='label-in-kana'>{inKana('katakana')}</div>
            <div className='label-in-romaji'>katakana</div>
          </div>
        </div>
      </div>
    </div>
  )
}
