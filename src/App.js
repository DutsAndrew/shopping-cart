import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const App = () => {

  const [cart, setCart] = useState({
    cart: [],
    total: 0,
  });

  class Game {
    constructor(img, title, price) {
      this.img = img;
      this.title = title;
      this.price = price;
      this.amount = 1;
    }
  }

  const addItem = (e) => {
    const currentCart = cart.cart;
    const gameImg = e.target.parentElement.children[0].currentSrc;
    const gameTitle = e.target.parentElement.children[1].innerText;
    const gamePrice = e.target.parentElement.children[2].innerText;
    const newGame = new Game(gameImg, gameTitle, gamePrice);
    setCart({
      cart: [...currentCart, newGame],
    });
  };

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