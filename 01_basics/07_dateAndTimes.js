let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

console.log(typeof(myDate));

let newDate = new Date(2024, 0, 13, 4, 5,  6);
console.log(newDate);


let myCreatedDate = Date.now();
console.log(myCreatedDate);
console.log(myDate.getDate());