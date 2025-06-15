import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {products.map((prod) => (
          <Link key={prod.id} to={`/product/${prod.id}`}>
            <div className="bg-white shadow-md hover:shadow-xl transition-shadow rounded-xl overflow-hidden p-4 flex flex-col h-full">
              <img
                src={prod.image}
                alt={prod.title}
                className="h-48 w-full object-contain mb-4"
              />
              <h3 className="font-semibold text-lg text-gray-800 mb-2 truncate">
                {prod.title}
              </h3>
              <p className="text-gray-600 text-sm mb-2 line-clamp-3">
                {prod.description}
              </p>
              <p className="font-bold text-purple-700 mb-4">${prod.price}</p>
              <button className="mt-auto bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
