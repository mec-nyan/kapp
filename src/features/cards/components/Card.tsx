import './Card.scss'

interface CardProps {
  hiragana: string
  katakana: string
  picture: string // For now, I'll use emojis.  I plan to add hand-made drawings if time permits...
  wordInHiragana: string
  wordInRomaji: string
}

export default function Card({
  hiragana,
  katakana,
  picture,
  wordInHiragana,
  wordInRomaji,
}: CardProps) {
  return (
    <div className='card-container'>
      <div className='card'>
        <div className='kana'>
          <span className='hiragana'>{hiragana}</span>
          <span className='katakana'>{katakana}</span>
        </div>

        <div className='picture'>{picture}</div>

        <div className='word-example'>
          <div className='word-in-kana'>{wordInHiragana}</div>
          <div className='word-in-romaji'>{`/${wordInRomaji}/`}</div>
        </div>
      </div>
    </div>
  )
}
