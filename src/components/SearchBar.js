import React from "react";
import '../style/SearchBar.css';

const SearchBar = props => {

  const { submit } = props;

  return (
    <form id="search-form">
      <input id="search-input" type="text" placeholder="Elden Ring" ></input>
      <button id="search-button" type="submit" onClick={submit} >Find Game</button>
    </form>
  );
};

export default SearchBar;