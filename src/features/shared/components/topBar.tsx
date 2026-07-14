import { useLocation, useNavigate } from 'react-router'
import './topBar.css'
import LanguageSelector from './languageSelector'

export default function TopBar() {
  const navigate = useNavigate()
  const location = useLocation()

  const isHome = location.pathname === '/'

  const handleBack = () => {
    navigate(-1)
  }

  return (
    <div id='top-bar'>
      <div className='top'>
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

      <div className='bottom'>
        <div className='quick-settings inactive'>
          <span className='material-symbols-outlined settings-icon'>
            settings
          </span>
        </div>

        <div className='selectors'>
          <LanguageSelector />

          <div className='theme-selector inactive'>
            <span className='material-symbols-outlined theme-icon'>
              light_mode
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
