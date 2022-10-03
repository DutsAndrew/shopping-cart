import React, { useState } from "react";
import '../style/Home.css';

const Home = props => {

  return (
    <div id="home-container">
      <p id="welcome message">Welcome to Steam Lite</p>
      <p id="store-message">By clicking on the "Shop" page at the top you can browse every game in the Steam catalog</p>
      <p id="store-message-pt2">Happy Gaming!</p>
    </div>
  );
};

export default Home;