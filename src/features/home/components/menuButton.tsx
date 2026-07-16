import { Link, NavLink } from 'react-router'
import type { kanaKind } from '../../../types/kana'
import './menuButton.css'

interface menuButtonProps {
  title: string
  description: string
  goLink: string
  hasGoButton: boolean
  kana: kanaKind // I'll use `kana` to send to the appropriate page.
  open: string | null
  setOpen: (s: string | null) => void
}

export default function MenuButton({
  title,
  description,
  goLink,
  hasGoButton,
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

  // Not a link.  This just shows info on the menu.
  if (goLink === '') {
    return (
      <div className='menu-button-outer' onClick={handleClick}>
        <div className='title'>{title}</div>
        {description !== '' && (
          <div className={`inner ${open === title ? 'open' : 'closed'}`}>
            <div className='description'>{description}</div>
          </div>
        )}
      </div>
    )
  }

  // It's a link with additional information.  We don't go directly, but provide an inner button
  // to do so.
  if (hasGoButton) {
    return (
      <div className='menu-button-outer' onClick={handleClick}>
        <div className='title'>{title}</div>
        {description !== '' && (
          <div className={`inner ${open === title ? 'open' : 'closed'}`}>
            <div className='description'>{description}</div>

            <Link to={goLink}>
              <div className='button-go'>Go!</div>
            </Link>
          </div>
        )}
      </div>
    )
  }

  // It directly links to a page.
  return (
    <div className='menu-button-outer' onClick={handleClick}>
      <NavLink to={goLink} className='direct-link'>
        <div className='title'>{title}</div>
      </NavLink>
    </div>
  )
}
