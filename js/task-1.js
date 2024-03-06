const quantity = 5;
console.log (quantity);
const pricePerDroid = 3000;
console.log (pricePerDroid);
 
// Оголошення параметрів 
function makeTransaction (quantity, pricePerDroid) {
    console.log (`You ordered ${quantity} droids worth ${quantity * pricePerDroid} credits!`)
} ;

// Передача аргументів 
makeTransaction (5, 3000); 
makeTransaction (3, 1000);
makeTransaction (10, 500);

console.log(makeTransaction(5, 3000)); // "You ordered 5 droids worth 15000 credits!"
console.log(makeTransaction(3, 1000)); // "You ordered 3 droids worth 3000 credits!"
console.log(makeTransaction(10, 500)); // "You ordered 10 droids worth 5000 credits!"