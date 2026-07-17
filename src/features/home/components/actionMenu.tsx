import type { kanaKind } from '../../../types/kana'
import MenuButton from './menuButton'
import './actionMenu.css'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

interface actionMenuProps {
  kana: kanaKind
}

export default function ActionMenu({ kana }: actionMenuProps) {
  const { t } = useTranslation()
  const [open, setOpen] = useState<string | null>(null)

  return (
    <div id='action-menu'>
      <MenuButton
        title={t('menu.cards.title')}
        description={t('menu.cards.desc')}
        goLink='/cards'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title={t('menu.chart.title')}
        description={
          kana === 'hiragana'
            ? t('menu.chart.desc.hg')
            : t('menu.chart.desc.kk')
        }
        goLink='/chart'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title={t('menu.drill.title')}
        description={t('menu.drill.desc')}
        goLink='TODO: link to page'
        hasGoButton={true}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title={t('menu.help.title')}
        description={t('menu.help.desc')}
        goLink=''
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title={t('menu.about.title')}
        // description='Stuff about me and this app will go here...'
        description={t('menu.about.desc')}
        goLink='/about'
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />

      <MenuButton
        title={t('menu.coffee.title')}
        description={t('menu.coffee.desc')}
        goLink=''
        hasGoButton={false}
        kana={kana}
        open={open}
        setOpen={setOpen}
      />
    </div>
  )
}
