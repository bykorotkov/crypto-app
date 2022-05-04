import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
          <div className='navbar__links'>
            <Link to='/about' className='aboutLink'>About</Link>
            <Link to='/coins' className='coinsLink'>Coins</Link>
          </div>
      </div>
  )
}

export default Navbar