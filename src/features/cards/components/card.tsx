import './card.scss'
import type { Kana } from '../../../kana/kanas'

interface CardProps {
  kana: Kana
}

export default function Card({ kana }: CardProps) {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='kana'>
          <span className='hiragana'>{kana.hg}</span>
          <span className='romaji'>{`/${kana.rmj}/`}</span>
          <span className='katakana'>{kana.kk}</span>
        </div>

        <div className='picture'>{kana.examples.hg.picture || '🫥'}</div>

        <div className='word-example'>
          <div className='word-in-kana'>{kana.examples.hg.jap || '...'}</div>
          <div className='word-in-romaji'>{`/${kana.examples.hg.rmj || '...'}/`}</div>
        </div>
      </div>
    </div>
  )
}
