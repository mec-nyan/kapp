import { NavLink } from 'react-router'
import './chart.css'
import KanaTable from '../kana/kanas'
import { inKana } from '../kana/kanas'
import { toRomajiFormmated } from '../kana/romaji'
import { useMode } from '../hooks/useMode'
import Footer from '../features/shared/components/footer'

export default function Chart() {
  const { mode } = useMode()

  const keys = [...KanaTable.keys()]

  const cells = []

  if (mode === 'hiragana') {
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
  } else {
    for (const key of keys) {
      const kanas = KanaTable.get(key)!.Basic.Monographs
      for (const kr of kanas) {
        if (kr) {
          cells.push(
            <div className='kana-cell'>
              <div className='kana-line'>
                <div className='hiragana'>{kr.kk}</div>
                <div className='katakana'>{kr.hg}</div>
              </div>
              <div className='picture'>{kr.examples.hg.picture}</div>
              <div className='word'>{kr.examples.kk.jap}</div>
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
  }

  return (
    <div id='chart-container'>
      <div className='title'>
        <span>{inKana(mode)}</span>
        <span>{mode.charAt(0).toUpperCase() + mode.slice(1)}</span>
      </div>

      <div className='chart'>{cells}</div>

      <NavLink to='/'>
        <div className='back-button'>
          <span className='material-symbols-outlined'>arrow_back</span>
          Back
        </div>
      </NavLink>

      <Footer />
    </div>
  )
}
