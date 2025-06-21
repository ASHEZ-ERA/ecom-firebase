import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

function Navbar() {
  const {user, logout} = useAuth()
  const {totalItems} = useCart()
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
          {user ? (
            <>
              <button
                onClick={logout}
                className="text-gray-600 hover:text-purple-700"
              >
                {" "}
                Logout
              </button>
              <Link to="/cart" className="text-gray-600 hover:text-purple-700">
                🛒
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xxs rounded-full h-6 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-gray-600 hover:text-purple-700">
                Login
              </Link>
              <Link
                to="/signup"
                className="text-gray-600 hover:text-purple-700"
              >
                Sign Up
              </Link>
            </>
          )}

        </div>
      </nav>
    </div>
  );
}

export default Navbar
