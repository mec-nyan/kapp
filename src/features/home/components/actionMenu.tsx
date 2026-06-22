import type { kanaKind } from '../../../types/kana'
import MenuButton from './menuButton'
import './actionMenu.scss'

interface actionMenuProps {
  kana: kanaKind
}

export default function ActionMenu({ kana }: actionMenuProps) {
  return (
    <div id='action-menu'>
      <MenuButton title='Cards' kana={kana} />

      <MenuButton title='Chart' kana={kana} />

      <MenuButton title='Drill' kana={kana} />

      <MenuButton title='Help' kana={kana} />

      <MenuButton title='About' kana={kana} />

      <MenuButton title='Coffee' kana={kana} />
    </div>
  )
}
