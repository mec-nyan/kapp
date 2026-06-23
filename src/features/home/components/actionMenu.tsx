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
      <MenuButton
        title='Cards'
        description='Learn one kana at a time.'
        goLink='TODO: link to page'
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Chart'
        description={`Full ${kana} chart.`}
        goLink='TODO: link to page'
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Drill'
        description="Challenge yourself and see how much you've learned."
        goLink='TODO: link to page'
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Help'
        description=''
        goLink={null}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='About'
        description='Stuff about me and this app will go here...'
        goLink={null}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Coffee'
        description='Buy me a cofee ☕'
        goLink={null}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
