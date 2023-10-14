// let arr = []; //array literal

// let arr2 = new Array(5).fill(null); //using  constructor

// let arr3 = Array();

// let arr4 = Array.from('');

// let arr5 = Array.of();

// console.log(arr2)

// let rating = 3.5;

// let stars = Math.floor(rating)

// console.log(stars)

// let starEmojis = new Array(stars).fill('🌟');

// console.log(starEmojis)

//add/ remove items

//  push => add items in the end
//  pop => removes item from the end
// shift => remove item from the beginning or start
// unshift => add items to the start or the beginning

//splice

//swiss knife of array
//it can do multiple things => insert, delete, replace

//arr.splice(startIndex, deleteCount, item1, item2, item3....... itemN)

// let arr = ['My', 'Name', 'Is'];

// let arr = [10, 20, 30, 40, 50];

// delete arr[1]; dont do this

// arr.splice(1, 1);

// arr.splice(0, 0, 'John', 'Doe');

// let values = arr.splice(-1, 0, 60, 70);

// console.log(values);

// console.log(arr);

//slice

// arr.slice(startIndex, endIndex) => not including end index
//if end index is not mentioned it will go the the end index

// let obj = {};
// let value;

// let arr = ['h', 'e', 'l', 'l', 'o'];
// // let slicedArray = arr.slice(1, 3);

// // console.log(slicedArray)
// // console.log(arr)

// value = 100;

// // console.log(arr.slice(-2));

// // console.log(arr.slice(2));
// obj.name = 'John'
// //slice can also be used to create a copy of the array, shallow copy

// let copyArray = arr.slice();

// arr[0] = 10;

// console.log('items', { arr, copyArray, value, obj })

// concat

//forEach

// [10, 20, 30, 40, 50].forEach(function (item, index, array) {
//     console.log(`${item} is at index ${index} in ${array}`)

// })

//Searching in an array

//arr.indexOf(item, startIndex) => looks for the item statting from start index and return the index if found otherwise ir returns -1;

//arr.includes(item, startIndex)  => looks for the item statting from start index and return the true if found otherwise it returns false;

// let arr = [1,0, false];

// console.log(arr.indexOf(0));
// console.log(arr.indexOf(false));
// console.log(arr.indexOf(undefined));
// console.log(arr.includes(1));

// let nums = [10, 100, 10];

// console.log(nums.indexOf(10));
// console.log(nums.lastIndexOf(10));

// //lastIndexOf looks from right to left

// let arr = [10, 20, 30, 40, 'hello', false, NaN];

// console.log(arr.indexOf(NaN)); //cannot handle NaN cases

// console.log(arr.includes(NaN));

//includes is latest method

//find =>

// let users = [
//     { id: 1, name: 'John', age: 20 },
//     { id: 2, name: 'Peter', age: 30 },
//     { id: 3, name: 'Pete', age: 50 },

// ];

// const userId = 4;

// let user = users.find(function (item, index, array) {
//     //it will return the item if it is true then iteration is also stopped otherwise it will returns undefined

//     return (item.id < userId)
// })

// let foundUser = users.findIndex(user => user.name == 'abcde');

// console.log(foundUser);

// let arr = [1, 2, 15];

// arr.sort();

// console.log(arr);

//the items are sorted based on strings by default

//callback function or compare function to a sort funtion

//function should compare two values and return something

// function compare(num1, num2) {
//     if (num1 > num2) return 1;
//     if (num1 == num2) return 0;
//     if (num1 < num2) return -1;
// }
// arr.sort(compare);

// console.log(arr);

let arr = [2, 4, 9, 1, 3, 5];

//ascending order
//callback function

// arr.sort(function (num1, num2) {
//     // console.log({ num1, num2 })

//     return num1 - num2;
//     //if output is positive it is a greater num
//     //if output is negative it is a smaller num
// })

// arr.sort((a, b) => a - b);

//descending order
// arr.sort((a, b) => b - a);

// console.log(arr)

//split and join methods

let recipients = "John, Peter, Rock";

let recipientsArr = recipients.split(", ");

console.log(recipientsArr);

recipientsArr.forEach((recipient) => {
  console.log(`A message to ${recipient}`);
});
