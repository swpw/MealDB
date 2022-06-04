import React, { useState, useEffect } from 'react'

import SectionContent from './SectionContent'
import GalleryImage from './GalleryImage'

function RandomIngredients() {
  const [ results, setResults ] = React.useState([])
  const imgNumber = 6

  useEffect(()=>{
    ( async () => {
      let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
      res = await res.json()
      res = [... res.meals]

      // Get only pictures of `imgNumber` random ingredients
      let data = []
      for(let i = 0; i < imgNumber; i++){
        const randPos = Math.floor(Math.floor(res.length) * Math.random())

        const id = res[randPos].idIngredient
        const name = res[randPos].strIngredient
        const img = `https://www.themealdb.com/images/ingredients/${name}.png`

        data = [...data, {id, name, img}]
        
        res.splice(randPos, 1)
      }

      setResults(data)
    })();
  }, [])

  const texts = {
    heading: 'Random Ingredients',
    description: 'Search recipes only by main ingredient.'
  }

  return (
    <section className='randomIngredients'>
      <img className='randomIngredients__blob4' src="./assets/blob4.svg"/>
      <SectionContent texts={texts} url={'/ingredients'} />
      <div className='randomIngredients__gallery'>
        {
          results.map((data, i) => <GalleryImage type={'ingredients'} key={i} data={data} />)
        }
      </div>
    </section>
  )
}

export default RandomIngredients