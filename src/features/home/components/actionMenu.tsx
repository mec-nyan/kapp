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
        goLink='/cards'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Chart'
        description={`Full ${kana} chart.`}
        goLink='/chart'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Drill'
        description="Challenge yourself and see how much you've learned."
        goLink='TODO: link to page'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Help'
        description=''
        goLink=''
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='About'
        // description='Stuff about me and this app will go here...'
        description=''
        goLink='/about'
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title='Coffee'
        description='Buy me a cofee ☕'
        goLink=''
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
