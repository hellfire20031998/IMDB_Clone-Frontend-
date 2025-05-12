import logo from './logo.svg';
import './App.css';
import Movies from './components/Movies/Movies.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import Banner from './components/Banner/Banner.js';
import Details from './components/Details/Details.jsx';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Movies/>
    <Details/>
    </>
  );
}

export default App;
