import { useLocation, useNavigate } from 'react-router'
import './topBar.scss'

export default function TopBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div id='top-bar'>
      <div className='top-bar-top-half'>
        <div className='title-container'>
          {!isHome && (
            <span
              className='material-symbols-outlined arrow-back'
              onClick={handleBack}
            >
              arrow_back
            </span>
          )}
          <div className='app-title'>Kapp!</div>
        </div>

        <div className='menu inactive'>
          <span className='material-symbols-outlined menu-icon'>more_vert</span>
        </div>
      </div>

      <div className='top-bar-bottom-half'>
        <div className='quick-settings inactive'>
          <span className='material-symbols-outlined settings-icon'>
            settings
          </span>
        </div>
        <div className='selectors'>
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
    </div>
  )
}
