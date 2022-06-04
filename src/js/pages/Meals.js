import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import Logo from '../components/Logo'

function Meal() {
  const [ data, setData ] = React.useState([])
  const [ ingredients, setIngredients ] = React.useState([])
  const [ recipe, setRecipe ] = React.useState([])
  const { id } = useParams()

  useEffect(()=>{
    ( async () => {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      res = await res.json()
      res = res.meals[0]

      // ingredients state
      let array = []
      for(const key in res){
        if(key.includes('strIngredient') && res[key] !== ''){
          const measure = res[`strMeasure${key.match( /\d+/g ).join()}`]
          const ingredient = res[key]
          array = [...array, `${measure} ${ingredient}`]
        }
      }

      // recipe state
      let recipe = res.strInstructions.split('\n')
      recipe = recipe.filter(e => e.length > 1)
      
      setRecipe(recipe)

      setIngredients(array)
      setData(res)
    })();

    window.scrollTo(0, 0)
  }, [id])

  return (
    <section className='meals'>
      <section className='preview'>
        <img className='preview__image' src={ data.strMealThumb }/>
        <div className='preview__content'>
          <h1 className='preview__name'>{ data.strMeal }</h1>
          <ul className='preview__ul'>
            <li className='preview__li'>
              Category: 
              <span className='preview__sub-li'> { data.strCategory } </span>
            </li>
            <li className='preview__li'>
              Area: 
              <span className='preview__sub-li'> { data.strArea } </span>
            </li>
            <li className='preview__li'>
              Links: 
              <span className='preview__sub-li'> 
                <a className='preview__link' href={ data.strYoutube } target='_blank' rel='noopener noreferrer' >
                  <img className='preview__icon' src='./assets/youtube.svg' />
                </a>
               </span>
              <span className='preview__sub-li'>
                <a className='preview__link' href={ data.strSource } target='_blank' rel='noopener noreferrer' >Source</a>
              </span>
            </li>
          </ul>
          <div className='preview__miniLogo'>
            <Logo type={'mini'} />
          </div>
        </div>
      </section>
      <section className='meals__recipeContainer'>
        <section className='ingredients'>
          <h2 className='ingredients__title'>Ingredients</h2>
          <ul className='ingredients__ul'>
            {
              ingredients.map((e, i) => 
                <ul className='ingredients__li' key={i}> {e} </ul>
              )
            }
          </ul>
        </section>
        <section className='recipe'>
          <h2 className='recipe__title'>Recipe</h2>
          <ul className='recipe__ul'>
            {
              recipe.map((e, i) => 
                <li className='recipe__li' key={i}> {i+1}. {e} </li>
              )
            }
          </ul>
        </section>
      </section>
    </section>
  )
}

export default Meal