import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { wasGameAlreadyAdded } from "./scripts/app-helper-functions";
import { itemAddedAnimation } from "./scripts/app-helper-functions";
import { Game } from "./scripts/app-helper-functions";
import { displayCartAmount } from "./scripts/app-helper-functions";

const App = () => {

  const [cart, setCart] = useState({
    cart: [],
    quantity: 0,
    total: 0,
  });

  const addItem = (e) => {
    e.preventDefault();
    const currentCart = cart.cart;
    const gameImgSrc = e.target.parentElement.parentElement.children[0].currentSrc;
    const gameTitle = e.target.parentElement.parentElement.children[1].innerText;
    const gamePrice = e.target.parentElement.parentElement.children[2].innerText;
    const gameQuantity = e.target.parentElement.parentElement.children[3][0].value;

    if (gameQuantity === '0' || gameQuantity < 0) {
      return;
    }

    const newGame = new Game(
      gameImgSrc,
      gameTitle,
      gamePrice,
      gameQuantity
    );

    const gameStatus = wasGameAlreadyAdded(cart.cart, newGame);
    if (gameStatus === true) {
      alert('game has already been added to cart, to make adjustments, change quantity, or delete the item, please check your cart');
      return;
    }

    setCart({
      cart: [...currentCart, newGame],
      quantity: cart.quantity += Number(gameQuantity),
    });

    itemAddedAnimation(e.target.parentElement.parentElement);
  };

  useEffect(() => {
    displayCartAmount(cart.quantity);
  }, [cart])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop addItem={addItem} />} />
        <Route path='/Cart' element={<Cart cart={cart} />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default App;