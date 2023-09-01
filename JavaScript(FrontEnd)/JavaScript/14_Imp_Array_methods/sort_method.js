
// Sort Method
// Sorting According to ASCII value :
// a to z = 97 to 22
// A to Z = 65 to 90
// o to 9 = 48 to 57

/*
   The sort() sorts the elements of an array.
   The sort() overwrites the original array.
   The sort() sorts the elements as strings in alphabetical
   and ascending order.


*/


// Sort Method Mutates Original Array
// forEach , Map,Filter didnt Change Original Array
// Returns new Array

/*

// 5,9,1200,400,3000
// 5,9,400,1200,3000 (expected output)
const numbers = [5,9,1200,400,3000];
// ["5","9","1200","400","3000"];  // INPUT
// [53,57,49,52,51]
// ["1200","3000","400","5","9"];  // OUTPUT

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57
numbers.sort();
console.log(numbers);



// Sorting UserName

const UserNames = ['harshit','abcd','mohit','nitish','aabc'];
UserNames.sort();
console.log(UserNames);

*/

/*
// Then How to get Expected Output 
// Sort Method can also take callback function

const numbers = [5,9,1200,400,3000];

numbers.sort((a,b)=>{
    return a-b;
});

console.log(numbers); 

// 1200 , 400
// a ,b
// a - b
// 1200 - 400 = positive 
// i.e > 0 (greater than  0)
// --> then  b,a
// 400 , 1200

// a-b --> negative ---> a,b
// 5,9 ---> -4
// a ,b 
// 5,9

*/


// Real World Example
// price lowToHigh HighToLow


const products = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},
    {product_Id : 5,product_Name : "ipad", price : 15000},

]

// Low to High Price

const lowToHigh = products.slice(0).sort((a,b)=>{
   return a.price - b.price;
})

console.log(lowToHigh);

// High to Low Price

const HightoLow = products.slice(0).sort((a,b)=>{
    return b.price - a.price;
 })
 
 console.log(HightoLow);
 