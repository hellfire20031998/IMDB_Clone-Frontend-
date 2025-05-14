import React, { useContext, useState } from 'react';
import MovieContext from '../Context/MovieContext';
import WatchListCard from '../WatchListCard/WatchListCard';
import './WatchList.css'; // Make sure this file exists

function WatchList() {
  let { watchList, handleRemoveFromWatchList,setWatchList } = useContext(MovieContext);
    const[search,setSearch] = useState("");
   
    function handleSearch(e){
        setSearch(e.target.value);
    }
    function handleAscWatchList(){
       const asc = [...watchList].sort((a, b) => a.vote_average - b.vote_average);
  setWatchList(asc);
    }
    function handleDecWatchList(){
        const dec = [...watchList].sort((a, b) => b.vote_average - a.vote_average);
  setWatchList(dec);
    }

    return (
    <div className="watchlist-container">
        <div className="watchlist-sort-controls">
  <button onClick={handleAscWatchList}>Sort by Rating ↑</button>
  <button onClick={handleDecWatchList}>Sort by Rating ↓</button>
</div>

        <div className="watchlist-search-wrapper">
        <input onChange={handleSearch} value={search} 
         className="watchlist-search"/>
        </div>
      {
        watchList.filter((item)=>{
          return  item.title.toLowerCase().includes(search.toLowerCase())
        }).map((item) => (
          <WatchListCard
            key={item.id}
            item={item}
            handleRemoveFromWatchList={handleRemoveFromWatchList}
          />
        ))
      }
    </div>
  );
}

export default WatchList;
