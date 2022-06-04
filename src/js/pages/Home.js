import React from 'react'

import Header from '../components/Header'
import RandomMeals from '../components/RandomMeals'
import RandomIngredients from '../components/RandomIngredients'

function Home() {
  return (
    <>
      <Header />
      <RandomMeals />
      <RandomIngredients />
    </>
  )
}

export default Home