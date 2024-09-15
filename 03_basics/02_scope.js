let a = 1; //has only block scope
const b = 2; //has only block scope
var c = 3; //it has global scope so create problems sometimes
//console.log(a, b, c);



function one (){
    let outer = 1;

    function two(){
        let inner = 2;
        console.log(outer) //can access parents' variable
    }
   // console.log(inner) //cannot access here
    two();
}
//one();

addOne(8)//can access here
function addOne (num){
    console.log(num + 1)

}


//addTwo(8) //cant access here before initialization
const  addTwo = function (num){
    console.log(num + 2)

}