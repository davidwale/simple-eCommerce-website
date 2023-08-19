import React from 'react';
import '../trending.css';

const popularProducts = [
  {
    id: 1,
    imageUrl: './images/iphonee.png',
    title: 'iPhone 12 pro max',
    originalPrice: 100.00,
    discountedPrice: 75.00
  },
  {
    id: 2,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 3,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 4,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 5,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 6,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 7,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 8,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 9,
    imageUrl: './images/ipad.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 10,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 11,
    imageUrl: './images/iphonee.png',
    title: 'Popular Product 2',
    originalPrice: 150.00,
    discountedPrice: 110.00
  },
  {
    id: 12,
    imageUrl: './images/iphonee.png',
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
