import React from 'react';
import '../style/App.css';
import gameBanner from '../assets/game-banner.jpeg';

function Hero() {
  return (
    <div id='game-banner-container'>
      <img id='game-banner' src={gameBanner} alt="video game banner" ></img>
    </div>
  );
}

export default Hero;