import { useState } from 'react'

import React from 'react';

// import react router dom

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import pages 

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';

// import component 

import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Footer from './components/Footer';








import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />

      </Routes>
    </Router>

    <Sidebar />
    <Footer />
    </>
  )
}

export default App
