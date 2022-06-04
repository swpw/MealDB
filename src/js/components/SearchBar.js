import React, { useRef, useState } from 'react'

import SearchResults from './SearchResults'
import SearchResultsContainer from './SearchResultsContainer'

function SearchBar({mini}) {
  const [ results, setResults ] = React.useState([])

  const inputRef = useRef()

  const showMealsHandler = ( { target: { value } } ) => {
    if(value.length < 3) {
      setResults([])
      return
    }

    ( async () => {
      let res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${value}`)
      res = await res.json()
      
      if(res.meals === null) {
        setResults([])
        return
      }

      res = res.meals.map(({ idMeal : id, strMeal : name }, i) => i < 5 ? {id, name} : undefined).filter(e => e !== undefined)

      setResults(res)
    })();
  }

  return (
    <div className='searchbar__outside-container'>
      <form onSubmit={e => e.preventDefault()} className={mini ? 'searchbar searchbar--nav' : 'searchbar searchbar--header'}>
        <img className={mini ? 'searchbar__icon searchbar__icon--nav' : 'searchbar__icon searchbar__icon--header'} src="./assets/search.svg" />
        <input onChange={showMealsHandler} ref={inputRef} className={mini ? 'searchbar__input searchbar__input--nav' : 'searchbar__input searchbar__input--header'} type='text' placeholder='Search meal by name...'></input>
      </form>
      <SearchResultsContainer mini={mini} >
        {
          results.map(({id, name}) => <SearchResults inputRef={inputRef} setResults={setResults} data={ { id, name } } key={id} />)
        }  
      </SearchResultsContainer>
    </div>
  )
}

export default SearchBar