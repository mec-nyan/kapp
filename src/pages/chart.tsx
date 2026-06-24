import { NavLink } from 'react-router'
import './chart.scss'
import type { kanaKind } from '../types/kana'
import { inKana } from '../kana/kanas'

interface ChartProps {
  kana: kanaKind
}

export default function Chart({ kana }: ChartProps) {
  return (
    <div id='chart-container'>
      <div className='chart-title'>
        {inKana(kana)} . {kana.charAt(0).toUpperCase() + kana.slice(1)}
      </div>

      <div className='chart'>We'll draw the hiragana/katakana chart here.</div>

      <NavLink to='/'>
        <div className='back-button'>
          <span className='material-symbols-outlined'>arrow_back</span>
          Back
        </div>
      </NavLink>
    </div>
  )
}
