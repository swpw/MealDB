import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Ingredients() {
  const [ ingredients, setIngredients ] = React.useState([])
  const [ viewedElements, setViewedElements ] = React.useState(0)
  const perViewConstant = 24
  const [ perView , setPerView ]  = React.useState(perViewConstant)

  useEffect(()=>{
    ( async () => {
      let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      res = await res.json()
      res = res.meals

      setIngredients(res)
    })();
  }, [])

  return (
    <div className='ingredientsPage__outer-wrapper'>
      <section className='ingredientsPage'>
        {
          ingredients.map((e, i) => {
            if(i >= perView) return

            return [
              <Link to={`/ingredients/${e.strIngredient}`} key={i} className='ingredientsPage__element'>
                <img className='ingredientsPage__img' src={`https://www.themealdb.com/images/ingredients/${e.strIngredient}-Small.png`} alt={e.strIngredient} />
                <h3 className='ingredientsPage__text'> {e.strIngredient} </h3>
              </Link>
            ]
          })
        }
      </section>
      <button onClick={() => setPerView((current) => current + perViewConstant)} className='ingredientsPage__button'>Load More Ingredients</button>
    </div>
  )
}

export default Ingredients