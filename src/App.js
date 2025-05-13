import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';
import { useState } from 'react';

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
    <Routes>
    <Route
    path='/'
    element={<HomePage 
      watchList={watchList}
      handleAddToWatchList={handleAddToWatchList}
      handleRemoveFromWatchList={handleRemoveFromWatchList}
      />
    }
    
    />
    <Route
    path='/details/:id'
    Component={DetailsPage}
    />
    <Route
    path='*'
    Component={NotFoundPage}
    />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
