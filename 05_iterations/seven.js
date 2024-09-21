let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.map( (num) => {
//     return num + 67;
// })

let newNums = [];
myNums.forEach( (nums) => {
    newNums.push(nums + 67)
})

console.log(newNums)






