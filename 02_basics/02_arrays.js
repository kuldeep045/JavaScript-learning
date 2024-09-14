let marvelHeroes = ["thor", "Spiderman", "Ironman"];
let dcHeroes = ["Superman", "Flash", "Batman"];


//console.log(marvelHeroes.push(dcHeroes)); //add second array as an element in first array
//console.log(marvelHeroes.concat(dcHeroes)); //add all elements of arrray second as elements in first array


let newHeroes = [...dcHeroes,...marvelHeroes]//spreadOperator
//console.log(newHeroes);


let anotherArr = [1, 2, [3, 4, 5], 6, 7, [8,11, [9, 10]]];
let realAnotherArr = anotherArr.flat(Infinity);
//console.log(realAnotherArr);

console.log(Array.isArray("Cooldeep"))
console.log(Array.from("Cooldeep"))
console.log(Array.from({name: "Cooldeep"})) //gives empty array