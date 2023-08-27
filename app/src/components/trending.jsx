import React from 'react';
import '../trending.css';

// Mock data
const trendingProducts = [
  {
    id: 1,
    imageUrl: './images/iphone5.png',
    title: 'mobile phones',
  },
  {
    id: 2,
    imageUrl: './images/laptop.png',
    title: 'speaker',
  },
  {
    id: 3,
    imageUrl: './images/ipad.png',
    title: 'Tablets',
  },
  {
    id: 4,
    imageUrl: './images/airpodsmax.webp',
    title: 'Headphones',
  },
  {
    id: 5,
    imageUrl: './images/iphone5.png',
    title: 'Laptops',
  },
  {
    id: 6,
    imageUrl: './images/iphone5.png',
    title: 'Accessories',
  },
  
];

function ProductCard({ product }) {
  return (
    <div className="product-wrapper">
      <div className="product-card">
        <img src={product.imageUrl} alt={product.title} />
      </div>
      <p>{product.title}</p>
    </div>
  );
}


function TrendingProducts() {
  return (
    <div className='trend'>
    <div className="products-container">
      {trendingProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    </div>
  );
}

export default TrendingProducts;
