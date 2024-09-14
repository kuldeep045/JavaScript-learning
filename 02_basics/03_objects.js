//Singleton =------is made when using constructor
// Object.create()

let mySym = Symbol('key');
//Object literals
const fbUser = {
    name : "Kuldeep", //here keys are recognized as a String
    number : 9876543210,
    isLoggedIn: true,
    age:12,
    [mySym]: '345',//if large bracket is not used then it will be string only
   'House No': 34
}

console.log(fbUser.name)
console.log(fbUser["House No"]) //square bracket is compulsory here
console.log(fbUser[mySym]) //square bracket is compulsory here
console.log(typeof mySym) //symbol //square bracket is compulsory here

//Symbols do not show up in regular object iterations (like for...in or Object.keys()), making them useful for adding hidden or "private" properties to objects.


//Since symbols are not enumerable, you can't access them directly using common object methods like Object.keys(). However, you can use the Object.getOwnPropertySymbols() method:

console.log(Object.keys(fbUser)); //mySym will not be printed

// Object.freeze(fbUser);
console.log(Object.isFrozen(fbUser))//true
fbUser.name = "Sajja"; //dont changes as object is freezed
//console.log(fbUser)





fbUser.greeting = function (){

    console.log("Nameste❤️❤️");
}
//console.log(fbUser.greeting) //function
console.log(fbUser.greeting()) //throws error as it was frozen

fbUser.greeting2 = function(){
    console.log(`Hello ${this.name} How are you?`)
}
console.log(fbUser.greeting2()) //throws error as it was frozen
