
// оголошення функціі та параметрів

function getShippingMessage (country, price, deliveryFee) {
   const totalPrice = price + deliveryFee;
   return `Shipping to ${country} will cost ${totalPrice} credits`;
} 

// Виведення функції з різними аргументами

console.log(getShippingMessage("Australia", 120, 50)); // "Shipping to Australia will cost 170 credits"
console.log(getShippingMessage("Germany", 80, 20)); // "Shipping to Germany will cost 100 credits"
console.log(getShippingMessage("Sweden", 100, 20)); // "Shipping to Sweden will cost 120 credits"


// // оголошення параметрів
// function getShippingMessage (country, price, deliveryFee) {
//    console.log (`Shipping to ${country} will cost ${price + deliveryFee} credits`)
// } ;

// // Оголошення аргументів
// getShippingMessage ("Australia", 120, 50) ;
// getShippingMessage ("Germany", 80, 20) ;
// getShippingMessage ("Sweden", 100, 20) ;