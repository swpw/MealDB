import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Area() {
  const [ area, setArea ] = React.useState([])

  useEffect(()=>{
    ( async () => {
      let res = await fetch('https://www.themealdb.com/api/json/v1/1/list.php?a=list')
      res = await res.json()
      res = res.meals

      setArea(res)
    })();
  }, [])

  return (
    <section className='areaPage'>
      <ul className='areaPage__ul'>
        {
          area.map((e, i) => 
            [
              <li key={i} className='areaPage__li'>
                <Link className='sectionContent__link areaPage__link' to={`/area/${e.strArea}`}>{ e.strArea }</Link>
              </li>
            ]
          )
        }
      </ul>
    </section>
  )
}

export default Area