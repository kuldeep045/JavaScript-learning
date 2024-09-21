// const coding =  ["Python", "Js", "Java", "Ruby"];

// const values = coding.forEach( (elements) => {
//     console.log(elements);
//     return elements;
// } )
// console.log(values)  //returns undefined



const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = nums.filter( (num) => {
//  return num > 4 //returns numbers greater that four
// } )


let newNums = []
nums.forEach( (num) => {
    if(num > 4){
        newNums.push(num) //does same work as done by filter 
    }
})

console.log(newNums)