import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Container from './components/containers/Container';
import LandingPage from './components/pages/LandingPage';
import Productpage from './components/pages/Productpage';
import Cart from './components/pages/Cart';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Container />}>
          <Route index element={<LandingPage />} />
          <Route path="/product/:productid" element={<Productpage />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
