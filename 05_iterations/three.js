//for of loop
const arr = ["flash", "spiderman", "superman"]
const str = "Cool"


const obj = {
    userName : "cooldeep", 
    isLoggedIn : false,
    trackCount : 5
}// cannot use forOf loop here


for (const elements of arr) {
    console.log(elements);
}

//Maps

const map = new Map();
map.set('NP', 'Nepal')
map.set('IN', 'India')
map.set('US', 'United States')
//console.log(map)

for (const [key, val] of map) {
    console.log(`key is ${key} and value is ${val}`)
}