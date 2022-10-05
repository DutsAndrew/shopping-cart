import React, { useState, useEffect } from "react";
import '../style/Cart.css';

const Cart = props => {

  const { cart } = props;
  console.log(cart);

  return (
    <div>
      <p>Cart</p>
    </div>
  );
};

export default Cart;