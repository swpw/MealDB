import React, { createContext } from 'react'

export const apiContext = createContext()

function apiContext(props) {
  return (
    <apiContext.Provider value={true}>
      { props.children }
    </apiContext.Provider>
  )
}

export default apiContext