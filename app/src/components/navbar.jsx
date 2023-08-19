import React from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiSearch, FiShoppingBag } from "react-icons/fi"

const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-nav">
      <Link to="/" className="logo">
          <img src="./images/logo2.jpg" alt="logo" />
        </Link>
        <div className="menu">
          <Link to="/" className="menu-link">HOME</Link>
          <Link to="/cart" target="_blank" className="menu-link">ABOUT</Link>
          <Link to="/cart" target="_blank" className="menu-link">CONTACT</Link>
          <Link to="/cart" target="_blank" className="menu-link">BLOG</Link>
          <Link to="/cart" target="_blank" className="menu-link">FAQ</Link>

          
        </div>
        
        <div className="nav-icon">
          <FiSearch className="nav-icons"/>
       <FiHeart className="nav-icons"/>
       <FiShoppingBag className="nav-icons" onClick={logOut} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
