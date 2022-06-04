import React from 'react'
import { useNavigate } from 'react-router-dom'

function SearchResults({data: { id, name }, setResults, inputRef}) {
  let navigate = useNavigate()

  const eventHandler = () => {
    navigate(`/meals/${id}`)
    navigate(0)
    setResults([])
    inputRef.current.value = ''
  }

  return (
    <p className='searchresults__text' onClick={eventHandler}>
      { name }
    </p>
  )
}

export default SearchResults