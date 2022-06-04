import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from './Logo'

function SectionContent({texts: {heading, description}, url}) {
  const [ newUrl, setNewUrl ] = React.useState('')

  useEffect(()=>{
    ( async () => {
      if(url === '/ingredients') setNewUrl(url)
      if(url !== '/meals') return

      let res = await fetch('https://www.themealdb.com/api/json/v1/1/random.php')
      res = await res.json()
      res = res.meals[0].idMeal

      setNewUrl(`/meals/${res}`)
    })();
  }, [])

  return (
    <div className='sectionContent'>
      <div className='sectionContent__container'>
        <Logo type='mini' />
        <h1 className='sectionContent__heading'>{heading}</h1>
      </div>
      <p className='sectionContent__description'>{description}</p>
      <Link className='sectionContent__link' to={newUrl}>Try  it yourself</Link>
    </div>
  )
}

export default SectionContent