import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Signup from './components/signup';
import Dashboard from './components/dashboard';
import CartPage from './components/cart';
import ProductPage from './components/productList';


function App() {
  const [cart, setCart] = useState([]);

  const addToCartHandler = (product) => {
    setCart([...cart, product]);
    alert('Product added to cart');
  };

  const isLoggedIn = window.localStorage.getItem("LoggedIn");

  return (
    <div className="App">
    
      <Router>
      
        <Routes>
        
          <Route path="/" element={isLoggedIn == "true" ? <Dashboard addToCartHandler={addToCartHandler} /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard addToCartHandler={addToCartHandler} />} />
          <Route path="/cart" element={<CartPage cart={cart} />} />
          <Route path="/products" element={<ProductPage />} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
