import React from 'react'
import { Link } from 'react-router-dom'

import Logo from '../components/Logo'

function mealPreview({data : { idMeal: id, strArea: area, strCategory: category, strMeal: name, strMealThumb: img }}) {

  return (
    <>
      <article className={id !== undefined ? 'mealPreview' : 'mealPreview--disable'}>
        <Link className='mealPreview__link' to={`/meals/${id}`}>
          <h2 className='mealPreview__name'> { name } </h2>
          <div className='mealPreview__containerImage'>
            <img className='mealPreview__image' src={ img } alt={`image of ${name}`} />
            <Logo type={'mini'} />
          </div>
          <div className='mealPreview__containerDetails'>
            <p className='mealPreview__detailsText'> { category } </p>
            <p className='mealPreview__detailsText'> { area } </p>
          </div>
        </Link>
      </article>
      { 
        id == null && <h2 className='mealPreview__noMeals'>No meals</h2>
      }
    </>
  )
}

export default mealPreview