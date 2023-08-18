// for loop in array

let fruits=["apple","mango","orange"];
//console.log(fruits);
/*
for(let i=0;i<fruits.length;i++){
    console.log(fruits[i]);
}
*/

let fruits2=[];
for(let i=0;i<fruits.length;i++){
    fruits2.push(fruits[i].toUpperCase());
 }
console.log(fruits2);

// use const for creating array

const pi=3.14;
// pi=233; // assign to const var error
console.log(pi);

const num=[1,2,3,4];
num.push(5,6,7);
// num=[9,10,11]; // we are assigning here not using methods to push so error
console.log(num);

// while loop in array
/*
let i=0;
while(i<num.length){
    console.log(num[i]);
    i++;
}
*/

// for of loop in array

for(let fruit of fruits){
    console.log(fruit);
}

// for in loop in array

for(let index in fruits){
    console.log(fruits[index]);
}