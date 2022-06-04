import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Category() {
  const [ category, setCategory ] = React.useState([])

  useEffect(()=>{
    ( async () => {
      let res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
      res = await res.json()
      res = res.categories

      setCategory(res)
    })();
  }, [])

  return (
    <section className='categoryPage'>
      {
        category.map((e, i) => {
          return [
            <section key={i} className='categoryPage__element'>
              <img className='categoryPage__img' src={e.strCategoryThumb} alt={e.strCategory} />
              <h3 className='categoryPage__title'>{ e.strCategory }</h3>
              <p className='categoryPage__description'>{ e.strCategoryDescription }</p>
              <Link className='categoryPage__link sectionContent__link' to={`/category/${e.strCategory}`}>Try  it yourself</Link>
            </section>
          ]
        })
      }
    </section>
  )
}

export default Category