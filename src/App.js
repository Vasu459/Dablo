import './App.css';
import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages';
import Signin from './components/signin';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {


  const[isOpen,setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

  return (
    
   <Router>
       <Sidebar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle} />
   
       <Routes>
    <Route path="/" exact  element={<Home />} /> 
    <Route path="/signin"   element={<Signin />} /> 
    </Routes>
  </Router>
  );
}

export default App;
