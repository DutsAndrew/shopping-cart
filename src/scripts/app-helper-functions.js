class Game {
  constructor(img, title, price, quantity) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.quantity = quantity;
  }
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

const itemAddedAnimation = (gameCard) => {
  const cartSvg = document.querySelector('#shopping-cart-svg');
  const addedGame = gameCard;

  // start animations
  (function startAnimation() {
    addedGame.classList.add('shakeItAnimation');
    cartSvg.classList.add('rotateAnimation', 'cart-active');
  })();

  // clears animations
  setTimeout(() => {
    addedGame.classList.remove('shakeItAnimation');
  }, 500);
  setTimeout(() => {
    cartSvg.classList.remove('rotateAnimation', 'cart-active');
  }, 1000);
}

const displayCartAmount = (quantity) => {
  if (document.querySelector('.cart-quantity-meter')) {
    const cartQuantity = document.querySelector('.cart-quantity-meter');
    cartQuantity.textContent = quantity;
    return;
  } else {
    const nav = document.querySelector('#nav-container');
    const cartAmount = document.createElement('p');
    cartAmount.textContent = quantity;
    cartAmount.classList.add('cart-quantity-meter')
    nav.appendChild(cartAmount);
    return;
  }
};

export {
  itemAddedAnimation,
  wasGameAlreadyAdded,
  Game,
  displayCartAmount,
}