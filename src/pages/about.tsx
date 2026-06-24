import { NavLink } from 'react-router'
import './about.scss'

export default function About() {
  return (
    <div id='about-page'>
      <div className='about-title'>About</div>

      <NavLink to='/'>
        <div className='back-button'>
          <span className='material-symbols-outlined'>arrow_back</span>
          Back
        </div>
      </NavLink>
    </div>
  )
}
