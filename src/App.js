import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';
import { useState } from 'react';
import Callbacks from './components/Callbacks/Callbacks.jsx';
import MovieContext from './components/Context/MovieContext.jsx';
import WatchListPage from './pages/WatchListPage/WatchListPage.jsx';
import NavBar from './components/NavBar/NavBar.jsx';

function App() {
  
  const[watchList,setWatchList]= useState(() => {
    const saved = localStorage.getItem('movies');
    return saved ? JSON.parse(saved) : [];
  })
  function handleAddToWatchList(movieObj){
    let updatedWatchlist= [...watchList,movieObj];
    setWatchList(updatedWatchlist);
    localStorage.setItem('movies',JSON.stringify(updatedWatchlist))
  }
  function handleRemoveFromWatchList(movieObj){
    let updatedWatchlist = watchList.filter((movie) => movie.id !== movieObj.id);
    setWatchList(updatedWatchlist);
    localStorage.setItem('movies',JSON.stringify(updatedWatchlist));
  }
  return (
    <div className='App'>
      
    <BrowserRouter>
    <MovieContext.Provider
    value={{
      watchList,
      handleAddToWatchList,
      handleRemoveFromWatchList,
      setWatchList
    }}>
      <NavBar/>
    <Routes>
    {/* <Route
    path='/'
    element={<HomePage 
      watchList={watchList}
      handleAddToWatchList={handleAddToWatchList}
      handleRemoveFromWatchList={handleRemoveFromWatchList}
      />
    } */}
    
    {/* /> */}

    <Route
    path='/'
    Component={HomePage}
     />
    <Route
    path='/details/:id'
    Component={DetailsPage}
    />
    <Route
    path='/watchlist'
    Component={WatchListPage}
    />
    <Route
    path='*'
    Component={NotFoundPage}
    />
    </Routes>
    </MovieContext.Provider>
    </BrowserRouter>
    </div>
  );
}

export default App;
