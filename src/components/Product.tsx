import React from 'react';
import { Link } from 'react-router-dom';

type ProductProps = {
  Product: {
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
};

const Product: React.FC<ProductProps> = ({ Product }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-between transition hover:shadow-lg">
      <img
        src={Product.image}
        alt={Product.title}
        className="h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold text-center mb-2">{Product.title}</h2>
      <p className="text-gray-600 mb-1">${Product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-500 mb-4">⭐ {Product.rating.rate} / 5</p>

      <Link
        to={`/product/${Product.id}`}
        className="mt-auto bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Buy
      </Link>
    </div>
  );
};

export default Product;
