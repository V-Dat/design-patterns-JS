// stratergyPattern
const getStrategyPrice = (originalPrice, typePromotion) => {
  if (typePromotion === "preOrder") {
    return getPreOrderPrice(originalPrice);
  }
  if (typePromotion === "promotion") {
    return getPromotionPrice(originalPrice);
  }
  if (typePromotion === "11/11/2022") {
    return get_11_11_2022_Price(originalPrice);
  }
  if (typePromotion === "blackfriday") {
    return getBlackFridayPrice(originalPrice);
  }

  if (typePromotion === "default") {
    return originalPrice;
  }
};

// function get price
function getPreOrderPrice(originalPrice) {
  return originalPrice * 0.8;
}

function getPromotionPrice(originalPrice) {
  return originalPrice * 0.7;
}

function get_11_11_2022_Price(originalPrice) {
  return originalPrice * 0.6;
}

function getBlackFridayPrice(originalPrice) {
  return originalPrice * 0.5;
}

// usage:
console.time();
const yourPrice = getStrategyPrice(2000, "promotion");
console.log(yourPrice);
console.timeEnd();
