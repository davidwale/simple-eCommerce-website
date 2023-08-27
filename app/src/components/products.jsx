import React from 'react';
import '../trending.css';

const popularProducts = [
  {
    id: 1,
    imageUrl: './images/iphone5.png',
    title: 'Apple iPhone 12 pro max 64GB Silver',
    originalPrice: 100.00,
    discountedPrice: 0
  },
  {
    id: 2,
    imageUrl: './images/iphone5.png',
    title: 'Apple iPhone XR 64 GB Black',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 3,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 4,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 5,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 6,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 7,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 8,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 9,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 10,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 11,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 12,
    imageUrl: './images/iphone5.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
];

function PopularProductCard({ product }) {
  return (
    <div className="popular-product-card">
      <img src={product.imageUrl} alt={product.title} />
      <h4>{product.title}</h4>
      <div className="price-section">
        <span className="discounted-price">${product.originalPrice.toFixed(2)}</span>
        <span className="original-price">${product.discountedPrice.toFixed(2)}</span>
      </div>
    </div>

  );
}

function PopularProducts() {
  return (
    <div className="popular-products-container">
      {popularProducts.map(product => (
        <PopularProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default PopularProducts;
