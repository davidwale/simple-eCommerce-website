import React from "react";
import Navbar from "./navbar";

const CartPage = () => {
  const storedCart = JSON.parse(localStorage.getItem("cart")) || [];

  return (
    <div>
      <Navbar />
      <div className="container">
      <h1>Your Cart</h1>
<div className="product-list">
      
      {storedCart.length === 0 ? (
        <p>No items in the cart</p>
      ) : (
        storedCart.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <h3>${product.price}</h3>
            </div>
          </div>
        ))
      )}
    </div>
      </div>
     
    </div>
    
  );
};

export default CartPage;
