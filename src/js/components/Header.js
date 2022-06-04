import React from 'react'
import SearchBar from './SearchBar'
import Logo from './Logo'

function Header() {
  return (
    <header className='header'>
      <img className='header__blob2' src="./assets/blob2.svg"/>
      <div className='header__content'>
        <h1 className='header__heading'>The only recipe<br/>place you'll ever need</h1>
        <p className="header__description">Variety of meals, easy to follow recipes and<br/>huge list of dishes all in one place.</p>
        <Logo type='mini' />
      </div>
      <SearchBar />
    </header>
  )
}

export default Header