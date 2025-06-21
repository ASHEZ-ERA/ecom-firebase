
import React from 'react';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';


function App() {

  return (
    <BrowserRouter>
    <AuthProvider>
      <CartProvider>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ProductCard/>}/>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </CartProvider>
    </AuthProvider>
    </BrowserRouter>
  )
}

export default App
