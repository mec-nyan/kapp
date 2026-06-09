import './topBar.scss'

export default function TopBar() {
  return (
    <div id='top-bar'>
      <div className='top-bar-top-half'>
        <div className='app-title'>Kapp!</div>
        <div className='menu'>
          <span className='material-symbols-outlined menu-icon'>menu</span>
        </div>
      </div>

      <div className='top-bar-bottom-half'>
        <div id='language-selector'>
          <span className='material-symbols-outlined language-icon'>
            translate
          </span>
        </div>
        <div id='theme-selector'>
          <span className='material-symbols-outlined theme-icon'>
            light_mode
          </span>
        </div>
      </div>
    </div>
  )
}
