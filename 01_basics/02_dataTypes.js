// "Use Strict"; //treats all codes in newer version of js


// alert("Helllo"); //throws error if run in node

console.log(3 
    + 
    45
); //runs appropriatly but code readability is low...

console.log(2 + 3); //high readablility

let name = "Cooldeep"; //String
let cellNo = 9876543210; //number
let isLoggedIn = true; //boolean
let state = null; //standalone value =====> type is object
let defination; //Not defined yet
// Symbol


console.log(typeof(defination));
// nonPrimitiveDataTypes
// Object,  array, function
let myArr = [1, 2, 3, 4];
let myObj = {
    name : "Kuldeep",
    cellNo: 9889678678
}

function newfunc (){
    console.log("I am a function...")
}
console.log(typeof(myArr))
console.log(typeof(myObj))
console.log(typeof(newfunc))



//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//
//Stack(Primitive ) and Heap Memory(Non-Primitive)

let myName = "Cooldeep";
let anotherName = myName; //Provides a copy so that if myName is modified no change in anotherName occurs


console.log(myName, anotherName);
myName = "Sajja";
console.log(myName, anotherName);





// +++++++++++++++++++++//
let Obj1 = {
    name : "One",
    email : "one@google.com"
}
let Obj2 = Obj1; //Provides reference of original so that any change in original also changes in Obj2
console.log(Obj1.email, Obj2.email)

Obj1.email = "Cooldeep@wright.edu"
console.log(Obj1.email, Obj2.email)



