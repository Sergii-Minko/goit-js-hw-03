function getShippingCost(country) {
  let message;
  switch (country.toLowerCase()) {
    case 'China'.toLowerCase():
      message = 'Shipping to China will cost 100 credits';
      break;
    case 'Chile'.toLowerCase():
      message = 'Shipping to Chile will cost 250 credits';
      break;
    case 'Australia'.toLowerCase():
      message = 'Shipping to Australia will cost 170 credits';
      break;
    case 'Jamaica'.toLowerCase():
      message = 'Shipping to Jamaica will cost 120 credits';
      break;
    default:
      message = 'Sorry, there is no delivery to your country';
  }
  return message;
}
console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
