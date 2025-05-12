import React from 'react'
import './MoviesCard.css'
import { Link, Navigate } from 'react-router-dom'

function MoviesCard({movie}) {
    // console.log(movie)
    // const navigate = Navigate();
  return (
    <div className='movie-card'>
        <div className='movie-card-img'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
        </div>
        <Link to={`/details/${movie.id}`} className="details-link">
        i
        </Link>
       
        <div className='movie-card-title' >
            {movie.title}
        </div>
        <div>
            {movie.overview}
        </div>
      
    </div>
  )
}

export default MoviesCard
