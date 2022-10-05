const convertGamePrice = (apiPrice) => {
  const price = apiPrice.trim();

  // base case, no changes needed
  if (price.length === 0) {
    return 'No Price Listed';
  }

  if (price === 'Free to Play'
    || price === 'Free To Play'
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
  if (price !== 'Free to Play'
    && price !== 'Free To Play'
    && (price.length === 10 
    || price.length === 11
    || price.length === 12)
    ) {
      const removeOriginalPrice = price.split('€')[1];
      const removeComma = removeOriginalPrice.replace(',', '.');
      return dollarSymbol + removeComma;
  }

  return price;
}

export {
  convertGamePrice,
}