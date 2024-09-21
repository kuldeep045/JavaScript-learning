let myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


let Total = myNums.reduce( (acc, currval)=> {
 //   console.log(`acc is ${acc} and currval is ${currval}`)

    return acc + currval;
})
console.log(Total);