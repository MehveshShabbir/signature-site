import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <nav>
        <ul className='nav-menu'>
          <li><Link to="/" style={{textDecoration: 'none'}}>Home</Link></li>
          <li><Link to="/signup" style={{textDecoration: 'none'}}>Sign Up</Link></li>
          <li><Link to="/signin" style={{textDecoration: 'none'}}>Sign In</Link></li>
        </ul>
      </nav>
    </div>
        )
}

export default Header