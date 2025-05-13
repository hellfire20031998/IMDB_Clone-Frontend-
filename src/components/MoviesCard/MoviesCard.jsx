import React from 'react'
import './MoviesCard.css'
import { Link } from 'react-router-dom'

function MoviesCard({movie,watchList,handleAddToWatchList,handleRemoveFromWatchList}) {
    function doesContains(){
        for(let i=0;i<watchList.length;i++){
            if(watchList[i].id===movie.id){
                return true;
            }
        }
        return false;
    }
  return (
    <div className='movie-card'>
        <div className='movie-card-img'>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
        </div>
        <Link to={`/details/${movie.id}`} className="details-link">
        i
        </Link>
        {
  doesContains()
    ? <button onClick={()=>{handleRemoveFromWatchList(movie)}} className="remove-btn">Remove</button>
    : <button onClick={()=>{handleAddToWatchList(movie)}} className="add-btn">Add</button>
}

       
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
