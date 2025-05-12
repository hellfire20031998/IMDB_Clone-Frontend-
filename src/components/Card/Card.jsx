import React from 'react'
import './Card.css'

const Card = ({ item }) => {
  return (
    <div className="card">
      <div>
        <img src={`https://image.tmdb.org/t/p/original/${item.profile_path}`} alt={item.name} />
      </div>
      <div className="card-name">{item.name}</div>
      <div className="card-character">{item.character}</div>
    </div>
  )
}

export default Card
