// Array Destructuring

const myArray=[1,2,3,4,5];

/*
let myVar1=myArray[0];
let myVar2=myArray[1];
console.log("value of Var1",myVar1);
console.log("value of Var2",myVar2);
*/

let [myVar1, ,myVar2,...myNewArray]=myArray;
console.log("value of Var1",myVar1);
console.log("value of Var2",myVar2);
//let myNewArray=myArray.slice(2);
console.log(myNewArray);