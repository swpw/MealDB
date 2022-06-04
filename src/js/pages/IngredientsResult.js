import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

function IngredientsResult() {
  const [ ingres, setIngres ] = React.useState([])
  const { name } = useParams()

  useEffect(()=>{
    ( async () => {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
      res = await res.json()
      res = res.meals
      
      setIngres(res)
    })();
  }, [])

  return (
    <section className='allCatRes'>
      {
        ingres.map((e, i) => {
          return [
            <Link to={`/meals/${e.idMeal}`} key={i} className='allCatRes__link'>
              <img className='allCatRes__img' src={e.strMealThumb} alt={e.strIngredient} />
              <p className='allCatRes__text'> {e.strMeal} </p>
            </Link>
          ]
        })
      }
    </section>
  )
}

export default IngredientsResult