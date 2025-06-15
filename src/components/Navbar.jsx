import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-lg font-bold text-purple-700">
          E-Commerce
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-purple-700">
            Home
          </Link>
          <Link to="/login" className="text-gray-600 hover:text-purple-700">
            Login
          </Link>
          <Link to="/signup" className="text-gray-600 hover:text-purple-700">
            Sign Up
          </Link>
          <Link to="/cart" className="text-gray-600 hover:text-purple-700">
            🛒
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
