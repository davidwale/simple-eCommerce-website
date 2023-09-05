import React, { useState, useEffect } from 'react';
import '../details.css';
import { FiHeart } from "react-icons/fi";
import Navbar from './navbar';


    const mockProduct = {
        id: 1,
        imageUrl: './images/iphone5.png',
        title: 'iPhone 12 pro max 64GB Silver',
        originalPrice: 100.00,
        discountedPrice: 0,
        condition: 'New',
        brand: 'Apple',
        description: 'This is a brand new iPhone 12 pro max with 64GB storage in Silver color.'
      };
      
      // Mock API call to fetch a product by ID
      function fetchProductById(id) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(mockProduct);  // Resolve with the mock product after a delay
          }, 1000);
        });
      }
      
      function ProductDetail({ productId }) {
        const [product, setProduct] = useState(null);
      
        useEffect(() => {
          fetchProductById(productId)
            .then(data => setProduct(data))
            .catch(err => console.error("Error fetching product:", err));
        }, [productId]);
      
        if (!product) {
          return <div>Loading...</div>;
        }
  
    return (
        <div>
            <Navbar />
          <div className="product-detail">
        <div className="left-section">
          <img src={product.imageUrl} alt={product.title} className="product-image" />
        </div>
        <div className="right-section">
          <h2 className='detail-title'>{product.title}</h2>
          <FiHeart className="nav-icons"/>
          <div className="price-section">
            {product.discountedPrice === 0 
             ? <span className="original-price">${product.originalPrice.toFixed(2)}</span>
             : <>
                 <span className="discounted-price">${product.discountedPrice.toFixed(2)}</span>
                 <span className="original-price crossed">${product.originalPrice.toFixed(2)}</span>
               </>
            }
          </div>
          <button className="add-to-cart">Add to Cart</button>
          <button className="buy-now">Buy Now</button>
        </div>
        <div className="description-section">
          <p>Condition: {product.condition}</p>
          <p>Brand: {product.brand}</p>
          <p>{product.description}</p>
        </div>
      </div>  
        </div>
    );
  }
  
  // Use this component somewhere in your app
  // <ProductDetail productId={someId} />
  export default ProductDetail;
