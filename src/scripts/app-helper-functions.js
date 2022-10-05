const itemAddedAnimation = () => {

  // start animations
  (function startAnimation() {
    console.log('animation starting');
  })();

  // clears animations
  setTimeout(() => {
    console.log('animation ending');
  }, 1000)
}

const wasGameAlreadyAdded = (cart, game) => {
  let gameStatus = false;
  cart.forEach(addedGame => {
    if (addedGame.title === game.title) {
      gameStatus = true;
    };
  });
  return gameStatus;
}

export {
  itemAddedAnimation,
  wasGameAlreadyAdded,
}