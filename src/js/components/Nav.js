import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'
import MenuButton from './MenuButton'
import SearchBar from './SearchBar'
import Menu from './Menu'

function Nav() {
  const [ showMenu, setShowMenu ] = React.useState(false)

  showMenu ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'auto'

  return (
    <nav className='nav'>
      <Link onClick={() => setShowMenu(false)} className='nav__link' to='/'>
        <Logo />
      </Link>
      <div className='nav__sideContainer'>
        <SearchBar mini={true} />
        <MenuButton showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
      <img className='nav__blob1' src="./assets/blob1.svg"/>
      { showMenu && <Menu showMenu={showMenu} setShowMenu={setShowMenu} /> }
    </nav>
  )
}

export default Nav