// for (let i = 0; i < 10; i++) {
// console.log(i)
// }


// print table of  a number
// let num = 9;
// for(let i = 1; i <=10; i++){
//     console.log(num + ' X ' + i + ' = ' + num * i)
// }

let myArr = ["Flash", "SuperMan", "Padman"];

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element);
    
}

//break and continue

for (let i = 1; i <= 20; i++) {
    if(i === 5) {
    console.log('Detected 5...')
    // break;
    continue;
    };
   console.log(`value of i is: ${i}`)

    
}

