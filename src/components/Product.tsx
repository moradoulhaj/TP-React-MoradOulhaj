import React from 'react';

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
    <div className="bg-white shadow-md rounded-2xl p-4 max-w-sm">
      <img
        src={Product.image}
        alt={Product.title}
        className="w-full h-64 object-contain mb-4 rounded-xl"
      />
      <h2 className="text-lg font-bold text-gray-800 mb-1">{Product.title}</h2>
      <p className="text-sm text-gray-500 mb-2">{Product.category}</p>
      <p className="text-gray-700 font-semibold mb-2">${Product.price.toFixed(2)}</p>
      <p className="text-sm text-gray-600 mb-3">{Product.description.slice(0, 100)}...</p>
      <p className="text-sm text-yellow-500">⭐ {Product.rating.rate} / 5 ({Product.rating.count} reviews)</p>
    </div>
  );
};

export default Product;
