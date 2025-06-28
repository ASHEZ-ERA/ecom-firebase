// src/Pages/Cart.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Cart() {
  const {
    items,
    totalItems,
    totalPrice,
    removeFromCart,
    updateQuantity,
    clearCart
  } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Your Shopping Cart
      </h2>

      {items.length === 0 ? (
        <div className="text-center">
          <p className="text-lg mb-4">Your cart is empty</p>
          <Link
            to="/"
            className="text-purple-600 hover:text-purple-800 font-medium"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto">
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Cart Items */}
            <div className="divide-y divide-gray-200">
              {items.map((item) => (
                <div key={item.id} className="p-4 flex flex-col md:flex-row">
                  <div className="flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 w-32 object-contain"
                    />
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 flex-grow">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>
                        <p className="text-purple-600 font-semibold mt-1">
                          ₹{item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-4 flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        disabled={item.quantity <= 1}
                        className="px-3 py-1 border rounded-l-md disabled:opacity-50"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 border-t border-b">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-3 py-1 border rounded-r-md"
                      >
                        +
                      </button>
                      <div className="ml-auto">
                        <p className="font-medium">
                          Subtotal: ₹{(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Cart Summary */}
            <div className="bg-gray-50 p-4 border-t">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg">
                    Total Items: <span className="font-bold">{totalItems}</span>
                  </p>
                  <p className="text-xl mt-2">
                    Total Price:{' '}
                    <span className="font-bold text-purple-700">
                      ₹{totalPrice.toFixed(2)}
                    </span>
                  </p>
                </div>
                <div className="space-x-4">
                  <button
                    onClick={clearCart}
                    className="px-4 py-2 border border-red-500 text-red-500 rounded-md hover:bg-red-50"
                  >
                    Clear Cart
                  </button>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
                    Proceed to Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;

