import { NavLink } from 'react-router'
import './about.css'
import Footer from '../features/shared/components/footer'

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

      <Footer />
    </div>
  )
}
