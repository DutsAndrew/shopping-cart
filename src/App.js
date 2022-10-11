import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Hero from "./components/Hero";
import Shop from './components/Shop';
import Cart from './components/Cart';
import Nav from "./components/Nav";
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
    const gameId = e.target.parentElement.parentElement.id;
    const gameImgSrc = e.target.parentElement.parentElement.children[0].currentSrc;
    const gameTitle = e.target.parentElement.parentElement.children[1].innerText;
    const gamePrice = e.target.parentElement.parentElement.children[2].innerText;
    const gameQuantity = Number(e.target.parentElement.parentElement.children[3][0].value);

    if (gameQuantity === '0' || gameQuantity < 0) {
      return;
    }

    const newGame = new Game(
      gameId,
      gameImgSrc,
      gameTitle,
      gamePrice,
      gameQuantity,
    );

    const gameStatus = wasGameAlreadyAdded(cart.cart, newGame);
    if (gameStatus === true) {
      alert('game has already been added to cart, to make adjustments, change quantity, or delete the item, please check your cart');
      return;
    }

    // validation to only store the price if it can be converted to a number after removing the '$'
    const convertPriceToNumber = Number(gamePrice.slice(1));

    if (isNaN(convertPriceToNumber) === false) {
      setCart({
        cart: [...currentCart, newGame],
        quantity: cart.quantity += Number(gameQuantity),
        total: cart.total += (convertPriceToNumber * Number(gameQuantity)),
      });
    }

    if (isNaN(convertPriceToNumber) === true) {
      setCart({
        cart: [...currentCart, newGame],
        quantity: cart.quantity += Number(gameQuantity),
        total: cart.total,
      });
    }

    itemAddedAnimation(e.target.parentElement.parentElement);
  };

  useEffect(() => {
    displayCartAmount(cart.quantity);
  }, [cart])

  const incrementGame = (e) => {
    const gameTitle = e.target.parentElement.parentElement.children[1].innerText;
    cart.cart.forEach((game) => {
      if (game.title === gameTitle) {
        const currentCart = cart.cart;
        let gameToChange = currentCart[currentCart.indexOf(game)];
        gameToChange.quantity = gameToChange.quantity + 1;
        currentCart[currentCart.indexOf(game)] = gameToChange;

        // if game is free
        if (game.price.length > 8 || game.price.length === 0) {
          setCart({
            cart: currentCart,
            quantity: cart.quantity += 1,
            total: cart.total,
          });
          return;
        }
        setCart({
          cart: currentCart,
          quantity: cart.quantity += 1,
          total: cart.total += Number(gameToChange.price.slice(1)),
        });
      };
    });
  };

  const decrementGame = (e) => {
    const gameTitle = e.target.parentElement.parentElement.children[1].innerText;
    cart.cart.forEach((game) => {
      if (game.title === gameTitle) {
        const currentCart = cart.cart;
        let gameToChange = currentCart[currentCart.indexOf(game)];
        if ((Number(gameToChange.quantity) - 1) < 0) {
          removeGame(gameTitle);
          return;
        }
        gameToChange.quantity = gameToChange.quantity - 1;
        currentCart[currentCart.indexOf(game)] = gameToChange;

        // if game is free
        if (game.price.length > 8 || game.price.length === 0) {
          setCart({
            cart: currentCart,
            quantity: cart.quantity -= 1,
            total: cart.total,
          });
          if (game.quantity === 0) {
            removeGame(gameTitle);
          }
          return;
        }

        setCart({
          cart: currentCart,
          quantity: cart.quantity -= 1,
          total: cart.total -= Number(gameToChange.price.slice(1)),
        });
        if (game.quantity === 0) {
          removeGame(gameTitle);
        }
      };
    });
  }

  const removeGame = (e) => {
    let currentCart = cart.cart;
    let gameTitle;

    // handles game removal when game title has been passed from decrementGame to prevent a negative quantity
    if (typeof e === 'string') {
      gameTitle = e;
    };

    // handles game removal on remove from cart button click
    if (typeof e === 'object') {
      gameTitle = e.target.parentElement.children[1].innerHTML;
    }

    cart.cart.forEach((game) => {
      if (game.title === gameTitle) {
        currentCart.splice(currentCart.indexOf(game), 1);

        // if game is free
        if (game.price.length > 8 || game.price.length === 0) {
          setCart({
            cart: currentCart,
            quantity: cart.quantity -= (1 * game.quantity),
            total: cart.total,
          });
          return;
        }
        setCart({
          cart: currentCart,
          quantity: cart.quantity -= (1 * game.quantity),
          total: cart.total -= Number(game.price.slice(1) * game.quantity),
        });
      };
    });
  };

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path='/' element={<Hero />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Shop' element={<Shop addItem={addItem} />} />
        <Route path='/Cart' 
          element={<Cart cart={cart}
            incrementGame={incrementGame}
            decrementGame={decrementGame}
            removeGame={removeGame}
          />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;