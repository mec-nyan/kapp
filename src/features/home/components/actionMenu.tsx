import type { kanaKind } from '../../../types/kana'
import MenuButton from './menuButton'
import './actionMenu.scss'
import { useState } from 'react'

interface actionMenuProps {
  kana: kanaKind
}

export default function ActionMenu({ kana }: actionMenuProps) {
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div id='action-menu'>
      <MenuButton title='Cards' kana={kana} open={open} setOpen={setOpen} />

      <MenuButton title='Chart' kana={kana} open={open} setOpen={setOpen} />

      <MenuButton title='Drill' kana={kana} open={open} setOpen={setOpen} />

      <MenuButton title='Help' kana={kana} open={open} setOpen={setOpen} />

      <MenuButton title='About' kana={kana} open={open} setOpen={setOpen} />

      <MenuButton title='Coffee' kana={kana} open={open} setOpen={setOpen} />
    </div>
  )
}
