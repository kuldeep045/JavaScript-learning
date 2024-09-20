//nullish coalescing operator(??): null undefined
let val1;
//val1 = 5 ?? 10;
// val1 = null ?? 10;
val1 = undefined ?? 12

console.log(val1);

//terniary operator
// condition ? true : false;

let price = 99;

price < 100 ? console.log("item is cheap") : console.log("Item is a bit expensive.");
