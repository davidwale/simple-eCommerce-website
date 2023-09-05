import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart, FiSearch, FiShoppingBag, FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

  return (
    <nav className="navbar">
      <div className="container-nav">
        <FiMenu className="hamburger" onClick={() => setMenuOpen(!menuOpen)} />
        
        <Link to="/" className="logo">
          <img src="./images/logo2.jpg" alt="logo" />
        </Link>
        
        <div className={`menu ${menuOpen ? 'open' : ''}`}>
          <Link to="/" className="menu-link">HOME</Link>
          <Link to="/about" className="menu-link">CATEGORIES</Link>
          <Link to="/contact" className="menu-link">BEST SELLERS</Link>
          <Link to="/blog" className="menu-link">OFFERS</Link>
          <Link to="/faq" className="menu-link">SUPPORT</Link>
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
