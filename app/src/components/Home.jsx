import React, { useState } from "react";
import products from "./product";
import CartPage from "./cart";
import Navbar from "./navbar";
import Header from "./header";
import TrendingProducts from "./trending";
import PopularProducts from "./products";
import Brand from "./brands";
import Footer from "./footer";


export default function UserHome({ userData }) {
  const [productList, setProductList] = useState(products);
  const [cart, setCart] = useState([]);



  const addToCartHandler = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product added to cart");
  };

  return (
    <div>
  <Navbar />
<div className="container">
      <Header />
      <TrendingProducts /> 
      <PopularProducts />
      <Brand /> 
      <Footer />
      {/* <div className="user-info">
        <h1>Welcome Back {userData.fname}</h1>
    
        
      </div>
      <div className="product-list">

        {productList.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.name}</h3>
            <div className="image-container">
              <img src={product.image} alt={product.name} />
              <h3>${product.price}</h3>
            </div>
            <button onClick={() => addToCartHandler(product)}>
              Add to Cart
            </button>
          </div>
        ))}
       
      </div> */}
    </div>
    </div>
    
  );
}
