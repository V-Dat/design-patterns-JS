function getPrice(originalPrice, typePromotion) {
  if (typePromotion === "preOrder") {
    return originalPrice * 0.8;
  }
  if (typePromotion === "promotion") {
    return originalPrice * 0.7;
  }
  if (typePromotion === "11/11/2022") {
    return originalPrice * 0.6;
  }
  if (typePromotion === "blackfriday") {
    return originalPrice * 0.5;
  }

  if (typePromotion === "default") {
    return originalPrice;
  }
}

console.time();
const yourPrice = getPrice(2000, "promotion");
console.log(yourPrice);
console.timeEnd();
