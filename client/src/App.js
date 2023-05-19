import './App.css';
import axios from 'axios';
import { Routes, Route, useLocation } from 'react-router-dom';
import Landing from './components/pages/Landing/Landing';
import Home from './components/pages/Layout/Home/Home';
import Activities from './components/pages/Activities/Activities';
import Detail from './components/pages/Detail/Detail';
import Header from './components/common/Header/Header';
import Footer from './components/common/Footer/Footer';

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  
  const location = useLocation();

  return (
    <div className="App">

      {location.pathname !== '/' && <Header />}
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/activities' element={<Activities/>} />
        <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
      {location.pathname !== '/' && <Footer />}
    </div>
  );
}

export default App;
