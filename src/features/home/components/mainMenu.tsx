import './mainMenu.css'
import ActionMenu from './actionMenu'

export default function MainMenu() {
  return (
    <div className='main-menu'>
      {/*
      <ModeSelector />
      */}

      {/* TODO: Remove this prop since we're using a context now. */}
      <ActionMenu kana={'hiragana'} />
    </div>
  )
}
