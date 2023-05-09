import React from 'react';
import product from './product'; 

const ProductPage = () => {
  return (
    <div className="container">
      <h1>Product Lists</h1>
      <div className="product-list">
        
        {product.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <h3>${product.price}</h3>
            </div>
            
          </div>
        ))}
       
      </div>
    </div>
  );
};

export default ProductPage;
