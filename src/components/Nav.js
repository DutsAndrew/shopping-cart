import React, { useState, useEffect } from "react";
import '../style/Nav.css';
import { Link } from "react-router-dom";

const Nav = props => {
  return (
    <div id="nav-container">
      <p id="page-title">Shopping Cart</p>
      <Link to='/Home'>
        <p className="nav-item">Home</p>
      </Link>
      <Link to='/Shop'>
        <p className="nav-item">Shop</p>
      </Link>
      <Link to='/Favorites'>
        <p className="nav-item">Favorites</p>
      </Link>
      <Link to='/Cart'>
        <p className="nav-item">Cart</p>
      </Link>
    </div>
  );
};

export default Nav;