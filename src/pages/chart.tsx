import { NavLink } from 'react-router'
import './chart.css'
import type { kanaKind } from '../types/kana'
import KanaTable from '../kana/kanas'
import { inKana } from '../kana/kanas'
import { toRomajiFormmated } from '../kana/romaji'

interface ChartProps {
  kana: kanaKind
}

export default function Chart({ kana }: ChartProps) {
  const keys = [...KanaTable.keys()]

  const cells = []

  for (const key of keys) {
    const kanas = KanaTable.get(key)!.Basic.Monographs
    for (const kr of kanas) {
      if (kr) {
        cells.push(
          <div className='kana-cell'>
            <div className='kana-line'>
              <div className='hiragana'>{kr.hg}</div>
              <div className='katakana'>{kr.kk}</div>
            </div>
            <div className='picture'>{kr.examples.hg.picture}</div>
            <div className='word'>{kr.examples.hg.jap}</div>
            <div className='romaji'>
              {toRomajiFormmated(kr.examples.hg.jap).replaceAll('/', '')}
            </div>
          </div>
        )
      } else {
        cells.push(<div className='kana-cell empty'></div>)
      }
    }
  }
  return (
    <div id='chart-container'>
      <div className='title'>
        <span>{inKana(kana)}</span>
        <span>{kana.charAt(0).toUpperCase() + kana.slice(1)}</span>
      </div>

      <div className='chart'>{cells}</div>

      <NavLink to='/'>
        <div className='back-button'>
          <span className='material-symbols-outlined'>arrow_back</span>
          Back
        </div>
      </NavLink>
    </div>
  )
}
