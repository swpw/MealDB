import React from 'react'
import { useNavigate } from 'react-router-dom'

function GalleryImage({type, data: { id, name, img }}) {
  const navigate = useNavigate()

  const eventHandler = () => {
    if(type === 'meals') navigate(`/meals/${id}`)
    if(type === 'ingredients') navigate(`/ingredients/${name}`)
  }

  return (
    <section onClick={eventHandler} className='galleryImage'>
      <img className='galleryImage__img' src={img} alt={name} />
      <p className='galleryImage__text'>{name}</p>
    </section>
  )
}

export default GalleryImage