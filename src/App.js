import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './theme.css';

import Signup from './components/Signup';
import Signin from './components/Signin';
import AddProduct from './components/AddProduct';
import MakePayment from './components/MakePayment';
import GetProducts from './components/GetProducts';
import More from './components/More';
import CartPage from './components/CartPage';

import { CartProvider } from './CartContext';


function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Load saved theme when app starts
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <CartProvider>
      <BrowserRouter>

        {/* 🌙 Theme Button (visible on all pages) */}
        <button
          onClick={toggleTheme}
          style={{
            position: "fixed",
            top: "10px",
            right: "10px",
            zIndex: 1000,
            padding: "10px 15px",
            borderRadius: "20px",
            border: "none",
            cursor: "pointer"
          }}
        >
          {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
        </button>

        <Routes>
          <Route path='/' element={<GetProducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<AddProduct />} />
          <Route path='/makepayment' element={<MakePayment />} />
          <Route path='/more' element={<More />} />
          <Route path='/cart' element={<CartPage />} />
        </Routes>

      </BrowserRouter>
    </CartProvider>
  );
}

export default App;