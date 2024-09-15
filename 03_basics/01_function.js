//Function
function welcome(){
    console.log("Hii!!");
    console.log("Kuldeep!!");
    console.log("How!!");
    console.log("are!!");
    console.log("You!!");
}
//welcome();


function sum(num1, num2){
    console.log(num1 + num2);
    return num1 + num2

    console.log("Hii Kuldeep ") //unreachable code
}
let res = sum(2, 4);
//console.log("Sum is : ", res) //undefined if return statement is not given

//values passed during calling is called as argument


function sayHii (userName = 'Sire'){
    return `${userName} kaise ho aap`
}
//console.log(sayHii()); //if value not passed defalut value sore will be passed here....


function calculateCArtPricce(...num){
    return num
}
//console.log(calculateCArtPricce(1, 2, 3, 4)) //makes array of all passed arguments

function handleObj (obj){
    console.log(`${obj.name} your nickname is ${obj.nickName}`)
}
let objOne = {
    name: 'kuldeep',
    nickName: 'Cooloo baby'
}
handleObj(objOne);