// const score = 10000000;
// const num = new Number(8);
// console.log(`${typeof(score)} and ${typeof(num)}`)  //number and object
// console.log(score.toString().charAt(0));

// console.log(score.toFixed(2))

// console.log(score.toLocaleString()) //commas in international system
// console.log(score.toLocaleString('en-IN')) //commas in indian system

// console.log(Math);
// console.log(Math.abs(-5))
// console.log(Math.pow(5,2))
// console.log(Math.min() > Math.max())


let rand = Math.floor(Math.random() * 10 + 1)
console.log(rand)


let max = 20;
let min = 10;

console.log(Math.floor(Math.random() * (max - min + 1) ) + min)