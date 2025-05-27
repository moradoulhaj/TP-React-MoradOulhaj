import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<ProductType | null>(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white rounded shadow">
      <Link to="/" className="text-blue-500 underline mb-4 inline-block">← Back to Catalogue</Link>
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-64 object-contain w-full md:w-1/3"
        />
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">{product.title}</h1>
          <p className="text-gray-600">${product.price}</p>
          <p className="text-sm text-gray-500">⭐ {product.rating.rate} | {product.rating.count} reviews</p>
          <p className="mt-4">{product.description}</p>
          <button className="mt-6 bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
