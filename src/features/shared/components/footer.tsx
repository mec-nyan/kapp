import { useTranslation } from 'react-i18next'
import './footer.scss'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <div id='footer'>
      <p>
        {t('footer.made_with')}{' '}
        <span className='material-symbols-outlined love'>favorite</span>{' '}
        {t('footer.by')} <span className='author'>nano</span>.
      </p>
    </div>
  )
}
