
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './About';
import Hook from './Hook';
import DashBoard from './DashBoard';
import NoPaGe from './NopaGe';
import Home from './Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Help from './Help';
// import Logout from './Logout';
import Register from './Register';
import Menu from './Menu';

import Gallery from './Gallery';

function App() {
  return (
    <>
  
    
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/dashboard' element={<DashBoard />}/>
      <Route path='/hook' element={<Hook />}/>
      <Route path='/gallery' element={<Gallery />}/>
      <Route path='*' element={<NoPaGe />}/>
      {/* <Route path='/menu' element={<Logout />}/> */}
      <Route path='/register' element={<Register />}/>
      <Route path='help' element={<Help />}/>
      <Route path='/menu' element={<Menu />}/>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
