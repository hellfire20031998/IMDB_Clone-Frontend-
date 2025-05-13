import React from 'react'
import Banner from '../../components/Banner/Banner'
import Movies from '../../components/Movies/Movies'
import NavBar from '../../components/NavBar/NavBar'

function HomePage({watchList , handleAddToWatchList,handleRemoveFromWatchList}) {

  return (
    <div>
        <NavBar/>
        <Banner/>
        <Movies watchList={watchList}
       handleAddToWatchList={handleAddToWatchList}
       handleRemoveFromWatchList={handleRemoveFromWatchList}/>      
    </div>
  )
}

export default HomePage
