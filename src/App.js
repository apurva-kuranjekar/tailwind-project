import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/about';
import Coffee from './Components/coffee';
import Contact from './Components/Contact';

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
      <Route   path="/" element={<Home/>} />
      <Route   path="/about" element={<About/>} /> 
      <Route   path="/coffee" element={<Coffee/>} />
      <Route   path="/contact" element={<Contact/>} />
    </Routes>
    </Router>
    </>
  );
};


export default App;
