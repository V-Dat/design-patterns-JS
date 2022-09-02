// stratergyPattern
const getStrategyPrice = {
  preOrder: getPreOrderPrice,
  promotion: getPromotionPrice,
  specialDay_11_11_2022_Price: get_11_11_2022_Price,
  blackFriday: getBlackFridayPrice,
  default: getPreOrderPrice,
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

function getPrice(originalPrice, typePromotion) {
  return getStrategyPrice[typePromotion](originalPrice);
}
// usage:
console.time();
const yourPrice = getPrice(2000, "preOrder");
console.log(yourPrice);
console.timeEnd();
