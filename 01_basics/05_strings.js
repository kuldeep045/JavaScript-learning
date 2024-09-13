let name = "   Kuldeep   ";
let surName = "Singh";
// let fullName = name + " " + surName

let fullName = name.concat("", surName);
console.log(fullName);

console.log(`Hello my name is ${name} and my Surname is ${surName}`)//more preffered these days

let gameName = new String("Cooldeep");
console.log(gameName.__proto__); //gives an object of prototypes 

console.log(gameName.length);//8
console.log(gameName.toUpperCase());

console.log(gameName.charAt(0)); //C
console.log(gameName.indexOf('o')); //1

console.log(name.trim()); //removes whitespaces
console.log(gameName.substring(0,4)); //starts from 0th index and includes upto third only

let newName = gameName.replace("o", "r"); //replace first o
let anotherName = gameName.replaceAll("o", "r"); //replace all o
console.log(newName + ' and ' + anotherName);

console.log(gameName.includes("Cool")) //true





//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
                // Slice//


let userName = "Thethar-and-brothers";
let anotherUserName = "daju-bhai-jewellary"
let returnUser = userName.slice(0,3);
console.log(userName);
console.log(returnUser);
