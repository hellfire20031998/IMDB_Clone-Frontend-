import React from 'react'
import './MoviesCard.css'

function MoviesCard({movie}) {
    // console.log(movie)
  return (
    <div className='movie-card'>
        <div className='movie-card-img'>
            <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
        </div>
       
        <div className='movie-card-title'>
            {movie.title}
        </div>
        <div>
            {movie.overview}
        </div>
      
    </div>
  )
}

export default MoviesCard
