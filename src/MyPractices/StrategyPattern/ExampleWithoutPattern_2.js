function getPrice(originalPrice, typePromotion) {
  switch (typePromotion) {
    case "preOder":
      return originalPrice * 0.8;
    case "promotion":
      return originalPrice * 0.7;
    case "11/11/2022":
      return originalPrice * 0.6;
    case "blackfriday":
      return originalPrice * 0.5;
    case "default":
      return originalPrice;
  }
}
console.time();
const yourPrice = getPrice(2000, "promotion");
console.log(yourPrice);
console.timeEnd();
