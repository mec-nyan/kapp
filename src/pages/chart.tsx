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

  const rows = []

  for (const key of keys) {
    const row = []
    const kanas = KanaTable.get(key)!.Basic.Monographs
    for (const kr of kanas) {
      if (kr) {
        row.push(
          <div className='kana-cell'>
            <div className='kana-line'>
              <div className='hiragana'>{kr.hg}</div>
              <div className='katakana'>{kr.kk}</div>
            </div>
            <div className='picture'>{kr.examples.hg.picture}</div>
            <div className='word'>{kr.examples.hg.jap}</div>
            <div className='romaji'>
              {toRomajiFormmated(kr.examples.hg.jap)}
            </div>
          </div>
        )
      } else {
        row.push(<div className='kana empty'></div>)
      }
    }
    rows.push(<div className='row'>{row}</div>)
  }
  return (
    <div id='chart-container'>
      <div className='chart-title'>
        {inKana(kana)} . {kana.charAt(0).toUpperCase() + kana.slice(1)}
      </div>

      <div className='chart'>{rows}</div>

      <NavLink to='/'>
        <div className='back-button'>
          <span className='material-symbols-outlined'>arrow_back</span>
          Back
        </div>
      </NavLink>
    </div>
  )
}
