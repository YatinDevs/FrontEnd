

// ############### Clone Array In JavaScript ####################
// how to clone array
// how to concatenate two arrays

// 1. Slice Method
// 2. Concat
// 3. Spread Operator

/*
let array_1=["item1","item2"];
// let array_2 = array_1;
let array_2=["item1","item2"];

array_1.push("item3");

console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

*/

/*
// cloning with slice

// fastest cloning method

let array_1=["item1","item2"];
// let array_2 = array_1;
let array_2=array_1.slice(0)

array_1.push("item3");

console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

*/


/*
// cloning with Concat

let array_1=["item1","item2"];
// let array_2 = array_1;
let array_2=[].concat([array_1]); 

// array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);


*/


/*
// cloning with Spread Operator

// new way cloning ==> spread operator

// Mostly used
let array_1=["item1","item2"];
let array_2=[...array_1];

array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

*/

/*

let array_1=["item1","item2"];
let array_2=array_1.slice(0).concat(["item3","item4"]);

array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);
*/

/*
let array_1=["item1","item2"];
let array_2=[].concat(array_1,["item3","item4"]);

array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);

*/


let array_1=["item1","item2"];
let oneMore=["item3","item4"];
let array_2=[...array_1,...oneMore,"item5"];

array_1.push("item3");
console.log(array_1==array_2);
console.log(array_1);
console.log(array_2);