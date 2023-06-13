import React from 'react';
import Navbar from './components/Home/Navbar';
import './App.css';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import VidPlayer from './components/VidPlayer/VidPlayer';
import Community from './components/Connect/Community';
import Popular from './components/Home/Popular';

function App() {
  return (

    <Router>
        {/* <Home/> */}
        <Navbar/> 
        <Routes>
          <Route path='/' element={<Home/>}/> 
          <Route path='/VidPlayer' element={<VidPlayer/>}/>
          <Route path='/Community' element={<Community/>}/>
          <Route path='./Popular' element={<Popular/>}/>
          {/* <Route path='https://www.linkedin.com/in/shivang-datta-aa8127256/'></Route> */}
        </Routes>
    </Router>
  );
}

export default App;
