import React, { useState, useEffect } from "react";
import '../style/Shop.css';
import SearchBar from "./SearchBar";

const Shop = props => {

  const { addItem } = props;

  const [apiStatus, setApiStatus] = useState({
    status: false,
    errorStatus: false,
  });

  const [gameLibrary, setGameLibrary] = useState({
    games: [],
  });

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
        setApiStatus({
          status: true,
        });
      })();
    }
  }, []);

  const convertGamePrice = (apiPrice) => {
    const price = apiPrice.trim();

    // base case, no changes needed
    if (price.length === 0) {
      return 'No Price Listed';
    }

    if (price === 'Free To Play'
      || price === 'Free Demo'
      ) {
        return price;
    } 

    // conversion from Euros to Dollars
    const dollarSymbol = '$';

    if (price.length === 5
      || price.length === 6
      || price.length === 7
      || price.length === 9
      ) {
        const removeEuroSymbol = price.replaceAll('€', '');
        const replaceComma = removeEuroSymbol.replaceAll(',', '.');
        const replaceHyphen = replaceComma.replaceAll('-', '');
        const removeWhiteSpace = replaceHyphen.replaceAll(' ', '');
        return dollarSymbol + removeWhiteSpace;
    }

    // handles cases were marked down and original price are both present
    if (price !== 'Free To Play'
      && (price.length === 10 
      || price.length === 11
      || price.length === 12)
      ) {
        const removeOriginalPrice = price.split('€')[1];
        const removeComma = removeOriginalPrice.replaceAll(',', '.');
        return dollarSymbol + removeComma;
    }
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('#search-input').value;

    // validation
    if (!inputValue.length) {
      return;
    };
  }

  return (
    <div id="shop-container">
      <SearchBar submit={onSubmit} />
      <ul id='game-tiles'>
          {Array.isArray(gameLibrary.games[0]) && gameLibrary.games[0].map((game) => {
            return <div className='game-card' key={game.appId} >
              <img className='game-card-img' src={game.imgUrl} alt={game.title} ></img>
              <p className='game-card-title' >{game.title}</p>
              <p className='game-card-price' >{convertGamePrice(game.price)}</p>
              <button type="submit" className="game-card-add-to-cart" onClick={addItem} >Add to Cart</button>
            </div>
          })}
      </ul>
    </div>
  );
};

export default Shop;