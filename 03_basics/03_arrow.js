let user = {
    userName: "Kuldeep",
    Price: 999,
    sayHii:
        function(){
        console.log(`Hey ${this.userName} you are welcome to my website`)
        console.log(this);
        }
}
//user.sayHii();
 //user.userName = "Sajja";
// user.sayHii();


//console.log(this) //logs an empty object in node environment and window object in browser


function chai(){
    userName: "Srijana";
    console.log(this.userName);
}
// let chai = function(){
//     userName: "Srijana";
//     console.log(this.userName);
// }
//}
// chai();



        // const addTwo = (a, b) => {
        // return a + b;
        // }

        const userName = () => ({userName : "cooldeep"});
        // const addTwo = (a,b) => a + b;

         console.log(userName ());