import './modeSelector.scss'

export default function ModeSelector() {
  return (
    <div className='mode-selector'>
      <div className='mode-hiragana-outer'>
        <div className='mode-hiragana'>
          <div className='label-in-kana'>ひらがな</div>
          <div className='label-in-romaji'>hiragana</div>
        </div>
      </div>
      <div className='mode-katakana-outer active'>
        <div className='mode-katakana active'>
          <div className='label-in-kana'>カタカナ</div>
          <div className='label-in-romaji'>katakana</div>
        </div>
      </div>
    </div>
  )
}
