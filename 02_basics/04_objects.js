// const tinderUser = new Object(); //it will create singleton 

let tinderUser = {
    name : "Cooldeep",
    userId : "123abc",
    isLoggedIn: false
}
//console.log(tinderUser)

const regularUser  = {
    email : 'abc@wright.edu',
    fullName : {
        firstName : "Kuldeep ",
        lastName : "Singh"
    }
}
//console.log(regularUser);

const obj = Object.assign({}, tinderUser, regularUser)
//console.log(obj)

let newObj = {...tinderUser, ...regularUser}
console.log(newObj)

