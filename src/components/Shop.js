import React, { useState, useEffect } from "react";
import '../style/Shop.css';
import SearchBar from "./SearchBar";
import { convertGamePrice } from "../scripts/shop-helper-functions";

const Shop = props => {

  const { addItem } = props;

  const [apiStatus, setApiStatus] = useState({
    status: false,
    errorStatus: null,
  });

  const [gameLibrary, setGameLibrary] = useState({
    games: [],
  });

  // default game load when entering shop
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dabbbf5224msheae4d25cbe18976p11eaf7jsn7e8d500a641f',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      }
    };

    if (apiStatus.status === false) {
      (async function fetchSpecials() {
        fetch('https://steam2.p.rapidapi.com/search/specials/page/1', options)
        .then(response => response.json())
        .then(response => setGameLibrary({
          games: [response]
        }))
        .catch(error => setApiStatus({
          errorStatus: error
        }));
      })();
    }
  }, []);

  // when user requests a certain game
  const onSubmit = (e) => {
    e.preventDefault();
    setApiStatus({
      status: false,
    });
    const inputValue = document.querySelector('#search-input').value;
    const apiCall = 'https://steam2.p.rapidapi.com/search/';
    const page = '/page/1';
    const fetchRequest = apiCall + inputValue + page;
    
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': 'dabbbf5224msheae4d25cbe18976p11eaf7jsn7e8d500a641f',
        'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
      }
    };

    (async function fetchSearchInput() {
      fetch(fetchRequest, options)
      .then(response => response.json())
      .then(response => setGameLibrary({
        games: [response]
      }))
      .catch(error => setApiStatus({
        errorStatus: error
      }));
    })();
  }

  useEffect(() => {
    setTimeout(() => {
      setApiStatus({
        status: true,
      });
    }, 1500);
  }, [gameLibrary])

  if (apiStatus.status === false) {
    return (
      <div id="loading-container">
        <p id="loading-message">
          Loading!
        </p>
        <div id="loading-bar"></div>
      </div>
    )
  }

  if (apiStatus.status === true) {
    return (
      <div id="shop-container">
        <SearchBar submit={onSubmit} />
        <ul id='game-tiles'>
            {Array.isArray(gameLibrary.games[0]) && gameLibrary.games[0].map((game) => {
              return <div id={game.appId} className='game-card' key={game.appId} >
                <img className='game-card-img' src={game.imgUrl} alt={game.title} ></img>
                <p className='game-card-title' >{game.title}</p>
                <p className='game-card-price' >{convertGamePrice(game.price)}</p>
                <form id="game-quantity-form">
                  <div id="quantity-input-container">
                    <label className="game-card-quantity-label" >Quantity:</label>
                    <input className="game-card-quantity" type='number' min={0} placeholder="0" onSubmit={addItem} ></input>
                  </div>
                  <button type="submit" className="game-card-add-to-cart" onClick={addItem} >Add to Cart</button>
                </form>
              </div>
            })}
        </ul>
      </div>
    );
  }
};

export default Shop;