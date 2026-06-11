import './modeSelector.scss'

export default function ModeSelector() {
  return (
    <div className='mode-selector'>
      <div className='mode-hiragana'>Hiragana</div>
      <div className='mode-katakana active'>Katakana</div>
    </div>
  )
}
