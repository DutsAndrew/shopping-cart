import React, { useState, useEffect } from "react";
import '../style/Cart.css';

const Cart = props => {

  const { cart } = props;

  useEffect(() => {
    console.log(cart);
  }, [cart]);
  

  return (
    <div id="cart-container">
      <div id="cart-title-container">
        <p id="cart-title">Cart</p>
      </div>
      <div id="cart-total-container">
        <p id="total-amount-label-text">Your Total:</p>
        <p id="total-amount-text">${cart.total}</p>
        <button id="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;