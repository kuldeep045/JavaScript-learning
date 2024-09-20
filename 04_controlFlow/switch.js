// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }


let month = 1;

switch(month){
    case 1:
        console.log(month + " jan")
        break; //without break keyword all the codes below executes too 
    case 2:
        console.log(month + " feb")
        break;
    case 3:
        console.log(month + " mar")
        break;
    case 4:
        console.log(month + " apr")
        break;
    case 5:
        console.log(month + " may")
        break;
    default:
        console.log("KOi na koi hai naa bhai...")
}

//let userEmail = "cooldeep@gmail.co";
let userEmail = {}
//let userEmail = []

if(userEmail){
    console.log("Got user Email");
} else{
    console.log("Cant get e-mail Id");
}

// falsey values
 //-------> 0, -0,BigInt 0n, "", null, undefined, NaN

 //other all are truthy values
 // "0", "false", " ", [], {}, function(){}