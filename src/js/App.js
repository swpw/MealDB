import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Meals from './pages/Meals'
import MealsDictionary from './pages/MealsDictionary'
import Ingredients from './pages/Ingredients'
import IngredientsResult from './pages/IngredientsResult'
import Category from './pages/Category'
import CategoryResult from './pages/CategoryResult'
import Area from './pages/Area'
import AreaResult from './pages/AreaResult'

import Nav from './components/Nav'
import Footer from './components/Footer'

const App = ({ props }) => (
  <>
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/meals/:id' element={<Meals />} />
        <Route path='/meals-dictionary' element={<MealsDictionary />} />
        <Route path='/category' element={<Category />} />
        <Route path='/category/:name' element={<CategoryResult />} />
        <Route path='/area' element={<Area />} />
        <Route path='/area/:name' element={<AreaResult />} />
        <Route path='/ingredients' element={<Ingredients />} />
        <Route path='/ingredients/:name' element={<IngredientsResult />} />
        {/* <Route path='*' element={<Home />} /> */}
      </Routes>
      <Footer />
    </Router>
  </>
)

export default App