import React from 'react'
import './WatchListCard.css'

const WatchListCard = ({ item, handleRemoveFromWatchList }) => {
  return (
    <div className='watchlistcard'>
      <div className='watchlist-card-img'>
        <img src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} />
      </div>
      <div>{item.title}</div>
      <div>{item.vote_average}</div>

      <div className="watchlistcard-button-wrapper">
        <button onClick={() => handleRemoveFromWatchList(item)}>Delete</button>
      </div>
    </div>
  )
}

export default WatchListCard
