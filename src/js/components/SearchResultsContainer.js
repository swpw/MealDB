import React from 'react'

function SearchResultsContainer({children, mini}) {
  const divName = () => {
    let name

    if(mini){
      name = 'searchresults searchresults--nav'
    }else{
      name = 'searchresults searchresults--header'
    }

    if(children.length === 0){
      name += ' searchresults--disable'
    }

    return name
  }

  return (
    <div className={divName()}>
      {children}
    </div>
  )
}

export default SearchResultsContainer