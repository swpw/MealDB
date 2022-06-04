import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

function Menu({showMenu, setShowMenu}) {
  const [ newUrl, setNewUrl ] = React.useState('')

  useEffect(()=>{
    ( async () => {
      let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      res = await res.json()
      res = res.meals[0].idMeal

      setNewUrl(`/meals/${res}`)
    })();
  }, [])

  return (
    <div className='menu'>
      <img className='menu__blob1' src="./assets/blob1--white.svg"/>
      <img className='menu__blob3' src="./assets/blob3.svg"/>
      <ul className='menu__ul'>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to='/'>Home</Link></li>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to={newUrl}>Random Meal</Link></li>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to='/meals-dictionary'>Meal A-Z Dictionary</Link></li>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to='/category'>Meals by Category</Link></li>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to='/area'>Meals by Area</Link></li>
        <li className='menu__li'><Link className='menu__link' onClick={ () => setShowMenu(false) } to='/ingredients'>Meals by Ingredients</Link></li>
      </ul>
    </div>
  )
}

export default Menu