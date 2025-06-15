import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function ProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">
        Product Details
      </h2>
      <button
        onClick={() => navigate("/")}
        className="text-purple-600 hover:text-purple-800 font-medium mb-6 flex items-center"
      >
        ← Back to Home
      </button>

      {/* Product Detail Card */}
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-96 object-contain"
        />

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-2">
              {product.title}
            </h1>
            <p className="text-gray-600 mb-4">{product.description}</p>
            <p className="text-xl font-semibold text-purple-700 mb-2">
              ₹ {product.price}
            </p>
            <p className="text-sm text-gray-500 mb-2">
              Brand: {product.category}
            </p>
            <p className="text-sm text-yellow-500">
              Rating: {product.rating?.rate} ⭐
            </p>
          </div>
          <button className="mt-6 bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPage;
