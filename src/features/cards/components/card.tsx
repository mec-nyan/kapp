import { useMode } from '../../../hooks/useMode'
import { toRomajiFormmated } from '../../../kana/romaji'
import type { Kana } from '../../../types/kana'
import './card.css'

interface CardProps {
  kana: Kana
}

export default function Card({ kana }: CardProps) {
  const { mode } = useMode()

  if (mode === 'hiragana') {
    const hiragana = kana.hg
    const romaji = kana.alt || kana.rmj
    const katakana = kana.kk
    const picture = kana.examples.hg.picture || '🫥'
    const exJapanese = kana.examples.hg.jap || '...'
    // const exRomaji = `/${kana.examples.hg.rmj || '...'}/`
    const exRomaji = toRomajiFormmated(exJapanese)

    return (
      <div className='card-container'>
        <div className='card'>
          <div className='kana'>
            <span className='hiragana'>{hiragana}</span>
            <span className='romaji'>{`/${romaji}/`}</span>
            <span className='katakana'>{katakana}</span>
          </div>

          <div className='picture'>{picture}</div>

          <div className='word-example'>
            <div className='in-kana'>{exJapanese}</div>
            <div className='in-romaji'>{exRomaji}</div>
          </div>
        </div>
      </div>
    )
  } else {
    const hiragana = kana.hg
    const romaji = kana.alt || kana.rmj
    const katakana = kana.kk
    const picture = kana.examples.kk.picture || '🫥'
    const exJapanese = kana.examples.kk.jap || '...'
    const exRomaji = toRomajiFormmated(kana.examples.hg.jap)

    return (
      <div className='card-container'>
        <div className='card'>
          <div className='kana'>
            <span className='hiragana'>{katakana}</span>
            <span className='romaji'>{`/${romaji}/`}</span>
            <span className='katakana'>{hiragana}</span>
          </div>

          <div className='picture'>{picture}</div>

          <div className='word-example'>
            <div className='in-kana'>{exJapanese}</div>
            <div className='in-romaji'>{exRomaji}</div>
          </div>
        </div>
      </div>
    )
  }
}
