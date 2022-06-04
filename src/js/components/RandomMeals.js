import React, { useState, useEffect } from 'react'
import SectionContent from './SectionContent'
import GalleryImage from './GalleryImage'

function RandomMeals() {
  const [ results, setResults ] = React.useState([])

  useEffect(()=>{
    ( async () => {
      const requests = [await fetch('https://www.themealdb.com/api/json/v1/1/random.php'), await fetch('https://www.themealdb.com/api/json/v1/1/random.php'), await fetch('https://www.themealdb.com/api/json/v1/1/random.php'), await fetch('https://www.themealdb.com/api/json/v1/1/random.php')]
        
      let res = await Promise.all([requests[0], requests[1], requests[2], requests[3]]
        .map(res => res.json()))

      res = res.map(({meals: [{idMeal: id, strMeal : name, strMealThumb : img}]}) => ({ id, name, img }))

      setResults(res)
    })();
  }, [])
  
  const texts = {
    heading: 'Random Meals',
    description: 'Confused or unsure what to eat? Search recipes by area, main ingredient, country or simply try your luck.'
  }

  return (
    <section className='randommeals'>
      <SectionContent texts={texts} url={'/meals'} />
      <div className='randommeals__gallery'>
        {
          results.map((data, i) => <GalleryImage key={i} type={'meals'} data={data} />)
        }
      </div>
    </section>
  )
}

export default RandomMeals