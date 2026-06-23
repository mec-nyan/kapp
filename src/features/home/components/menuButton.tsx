import type { kanaKind } from '../../../types/kana'
import './menuButton.scss'

interface menuButtonProps {
  title: string
  description: string
  goLink: string | null
  kana: kanaKind // I'll use `kana` to send to the appropriate page.
  open: string | null
  setOpen: (s: string | null) => void
}

export default function MenuButton({
  title,
  description,
  goLink,
  open,
  setOpen,
}: menuButtonProps) {
  const handleClick = () => {
    if (open === title) {
      setOpen(null)
    } else {
      setOpen(title)
    }
  }

  return (
    <div className='menu-button-outer' onClick={handleClick}>
      <div className='menu-button-title'>{title}</div>
      {description !== '' && (
        <div
          className={`menu-button-inner ${open === title ? 'open' : 'closed'}`}
        >
          <div className='menu-button-description'>{description}</div>

          {goLink && <div className='menu-button-go'>Go!</div>}
        </div>
      )}
    </div>
  )
}
