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



const App = () => {
  return <div className='overflow-hidden'>
    <Router>
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/product/:id' element={<ProductDetails />} />

      </Routes>
    </Router>

    <Sidebar />
    <Footer />

  </div>;
};

export default App;