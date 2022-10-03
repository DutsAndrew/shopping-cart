import React, { useState, useEffect } from "react";
import '../style/Nav.css';
import { Link } from "react-router-dom";
import shoppingCart from '../assets/cart.svg';
import steamIcon from '../assets/steam.png';

const Nav = props => {
  return (
    <div id="nav-container">
      <div id="page-title-container">
        <p id="page-title">Steam Lite</p>
        <img id="steam-icon" src={steamIcon} alt="steam icon"></img>
      </div>
      <Link to='/Home'>
        <p className="nav-item">Home</p>
      </Link>
      <Link to='/Shop'>
        <p className="nav-item">Shop</p>
      </Link>
      <Link to='/Cart'>
        <img id="shopping-cart-svg" className="nav-item" src={shoppingCart} alt="shopping cart"></img>
      </Link>
    </div>
  );
};

export default Nav;