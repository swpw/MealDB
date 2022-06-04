import React from 'react'

function MenuButton({showMenu, setShowMenu}) {
  let elName

  showMenu ? elName = 'menuBtn__el menuBtn__el--close' : elName = 'menuBtn__el'

  return (
    <div onClick={ ()=> setShowMenu(!showMenu) } className='menuBtn'>
      <div className={elName}></div>
      <div className={elName}></div>
      <div className={elName}></div>
    </div>
  )
}

export default MenuButton