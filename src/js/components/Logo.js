import React from 'react'

function Logo({type}) {
  const elName = {
    logo: 'logo',
    img: 'logo__img',
    text: 'logo__text'
  }

  let { logo, img, text } = elName

  if(type === 'mini'){
    logo = 'logo logo--mini'
    img = 'logo__img logo__img--mini'
    text = 'logo__text logo__text--mini'
  }

  if(type === 'footer'){
    logo = 'logo logo--footer'
    img = 'logo__img logo__img--footer'
    text = 'logo__text logo__text--footer'
  }

  return (
    <div className={logo}>
      <img className={img} src='./assets/egg.svg'/>
      <p className={text}>MealDB</p>
    </div>
  )
}

export default Logo