import React from 'react'
import Card from '../Card/Card'
import './Cast.css'

const Cast = ({ cast }) => {
  return (
    <div className='cast'>
      <h1>Cast</h1>
      <div className='cast-grid'>
        {cast.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  )
}

export default Cast
