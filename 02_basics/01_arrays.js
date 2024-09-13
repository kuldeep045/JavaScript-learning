let myArr = [1, 2, 3, 4, 5, 6];
//console.log(myArr);
//access any  elements
//console.log(myArr[0]);


let arr = new Array(1, 2, 3, 4, 5);
//console.log(arr)

// +++++++++++++++++++++++++++++++++  Array Methods

//adding new elements
arr.push(6);
//console.log(arr);

//pop
arr.pop(); //remove last element
//console.log(arr);


//shift and unshift
arr.unshift(0) //add at first, not preferable to use in large datas as it may be time causing;
console.log(arr)

arr.shift(); //remove from start
console.log(arr);

console.log(arr.includes(3)); //true
console.log(arr.includes(9)); //false

console.log(arr.indexOf(4)); //gives the position of 4 in the array
console.log(arr.indexOf(9)); //-1 as it doesn't exist


// +++++++++++ Slice vs Splice +++++++++ //
let newArr = [9, 8, 7, 6, 5, 4, 3, 2];
let newArr2 = [9, 8, 7, 6, 5, 4, 3, 2];
let slicedArr = newArr.slice(1, 3);
//console.log("A: ", newArr) 
//console.log("slicedArr: ", slicedArr); //note:- slice do not modify the original array and dont resutl the last index

let SplicedArr = newArr2.splice(1, 3);
//console.log("D: ", newArr2);
//console.log("SplicedArr: ", SplicedArr); //note:- Splice modify the original array and include the last index




