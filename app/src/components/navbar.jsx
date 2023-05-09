import React from "react";
import { Link } from "react-router-dom";


const logOut = () => {
    window.localStorage.clear();
    window.location.href = "./login";
  };

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container-nav">
        <Link to="/" className="logo">
          <h1>FENEX</h1>
        </Link>
        <div className="menu">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/cart" target="_blank" className="menu-link">Cart</Link>
          <Link className="menu-link" onClick={logOut} >
          Log Out
       </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
