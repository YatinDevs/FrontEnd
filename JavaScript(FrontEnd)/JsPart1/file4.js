// primitive vs reference data types

let num1 = 6;
let num2 = num1;
console.log("value is num1 is ",num1);
console.log("value of num2 is ",num2);
num1++;// after incrementing num1
console.log("value is num1 is ",num1);
console.log("value of num2 is ",num2);

// reference types
// array
let array1 =["item1","item2"];
let array2=array1;
console.log("value is arr1 is ",array1);
console.log("value of arr2 is ",array2);
array1.push("item3");// after pushing element in array 1
console.log("value is arr1 is ",array1);
console.log("value of arr2 is ",array2);

// how to clone array
// how to concatenate two arrays
let array_1=["item1","item2"];
// let array_2=["item1","item2"];
// cloning with slice
let array_2=array_1.slice(0)//.concat(["item3","item4"]); // fastest cloning method
// let array_2=[].concat(array_1);
// new way cloning ==> spread operator
let oneMore=["item3","item4"];
//let array_2=[...array_1,...oneMore,"item5"];
console.log(array_1===array_2);
array_1.push("item3");
console.log(array_1);
console.log(array_2);


