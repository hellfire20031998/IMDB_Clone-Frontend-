import React from 'react'
import Banner from '../../components/Banner/Banner'
import Movies from '../../components/Movies/Movies'
import NavBar from '../../components/NavBar/NavBar'

function HomePage() {

  return (
    <div>
        <NavBar/>
        <Banner/>
        <Movies/>      
    </div>
  )
}

export default HomePage
