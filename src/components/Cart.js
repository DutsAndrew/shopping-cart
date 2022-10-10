import React, { useState, useEffect } from "react";
import '../style/Cart.css';

const Cart = props => {

  const { cart, incrementGame, decrementGame, removeGame } = props;

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  return (
    <div id="cart-container">
      <div id="cart-title-container">
        <p id="cart-title">Cart</p>
        <ul id="cart-game-tiles">
          {cart.cart.map((game) => {
            return <div className="cart-game-card" key={game.id}>
              <img className='cart-game-card-img' src={game.img} alt={game.title} ></img>
                <p className='cart-game-card-title' >{game.title}</p>
                <p className='cart-game-card-price' >{game.price}</p>
                <p className="cart-game-card-quantity">Quantity: {game.quantity}</p>
                <div id="increment-buttons-container">
                  <button id="increment-item" onClick={incrementGame} >Add Item</button>
                  <button id="decrement-item" onClick={decrementGame} >Remove Item</button>
                </div>
                <button id="remove-from-cart-button" onClick={removeGame} >Remove from Cart</button>
            </div>
          })}
        </ul>
      </div>
      <div id="cart-total-container">
        <p id="total-amount-label-text">Your Total:</p>
        <p id="total-amount-text">${Math.abs(cart.total.toFixed(2))}</p>
        <button id="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;