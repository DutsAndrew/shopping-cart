import React, { useState, useEffect } from "react";
import '../style/Shop.css';
import SearchBar from "./SearchBar";

const Shop = props => {

  const [cart, setCart] = useState({});

  // async function getSteamGames() {
  //   const api = 'https://steam2.p.rapidapi.com/search/specials/page/1';
  //   const options = {
  //     method: 'GET',
  //     headers: {
  //       'X-RapidAPI-Key': 'dabbbf5224msheae4d25cbe18976p11eaf7jsn7e8d500a641f',
  //       'X-RapidAPI-Host': 'steam2.p.rapidapi.com'
  //     }
  //   };

  //   try {
  //     const response = await fetch(api, options);
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //     alert('The server could not find what you were looking for, please try again');
  //   }
  // }

  // getSteamGames();

  const onSubmit = (e) => {
    e.preventDefault();
    const inputValue = document.querySelector('#search-input').value;

    // validation
    if (!inputValue.length) {
      return;
    };


    console.log(inputValue);
  }

  return (
    <div id="shop-container">
      <SearchBar submit={onSubmit} />
    </div>
  );
};

export default Shop;