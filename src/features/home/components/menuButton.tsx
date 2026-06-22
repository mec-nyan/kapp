import type { kanaKind } from '../../../types/kana'
import './menuButton.scss'

interface menuButtonProps {
  title: string
  kana: kanaKind // I'll use `kana` to send to the appropriate page.
}

export default function MenuButton({ title }: menuButtonProps) {
  return (
    <div className='menu-button-outer'>
      <div className='menu-button-title'>{title}</div>
    </div>
  )
}
