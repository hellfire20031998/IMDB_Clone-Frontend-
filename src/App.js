import logo from './logo.svg';
import './App.css';
import Details from './components/Details/Details.jsx';
import { BrowserRouter, Route, Routes,Swtich } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage.jsx';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage.jsx';
import DetailsPage from './pages/DetailsPage/DetailsPage.jsx';

function App() {
  return (
    <div className='App'>
    <BrowserRouter>
    <Routes>
    <Route
    path='/'
    Component={HomePage}
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
