import React, { useState, useEffect } from 'react'

import MealPreview from '../components/MealPreview'

function MealsDictionary() {
  const [ selectedChar, setSelectedChar ] = React.useState('')
  const [ meals, setMeals ] = React.useState([])

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  
  const clickHandler = e => setSelectedChar(e.target.attributes.value.value)
  
  useEffect(()=>{
    if(selectedChar === '') 
      return setSelectedChar(alphabet[Math.floor(Math.floor(alphabet.length) * Math.random())]);

    ( async () => {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${selectedChar}`)
      res = await res.json()

      if(res.meals === null){
        setMeals([''])  
        return
      }

      setMeals(res.meals)
    })();
  }, [selectedChar])

  return (
    <section className='mealsDictionary'>
      <ul className='mealsDictionary__alphabet'>
        {
          alphabet.map((e, i) => 
            <li onClick={clickHandler} className={e === selectedChar ? 'mealsDictionary__letter mealsDictionary__letter--selected' : 'mealsDictionary__letter'} value={e} key={i}>{ e }</li>
          )
        }
      </ul>
      <section className={meals[0] !== '' ? 'mealsDictionary__showMeals' : 'mealsDictionary__showMeals--noMeals'}>
        {
          selectedChar.length > 0 && meals.map((data, i) => 
            <MealPreview key={i} data={data}/>
          )
        }
      </section>
    </section>
  )
}

export default MealsDictionary