/*
let newarray = [];
console.log(newarray);
console.log(newarray.pop());
console.log(newarray);
*/

// add first unshift
// remove first shift
// add last push
// remove last pop
// concat method to add 2 arrays

// COnvert arr to String
//  replace and replaceAll method
/*
const charArr = ["A", "M", "A", "N"];
const res = charArr.toString().replaceAll(",", "");
console.log(res);
*/

/*
// slice method
// doesnt modify orignal
const num = [1, 2, 3, 4, 5, 6, 7];

// exclusive value taken <2
const res1 = num.slice(2);
// exclusive value taken <4
const res2 = num.slice(0, 4);

// exclusive value taken <2
console.log(res1);
// exclusive value taken <4
console.log(res2);

// splice method
// modifies Original Array
// (start,deletecount,anythingtoAdd)
console.log(num);
num.splice(3, 0, "Abc");
num.splice(3, 2, "krk");
console.log(num);
*/

/*
// join method
const charArr = ["A", "M", "A", "N"];
const res = charArr.toString().replaceAll(",", "/");
console.log(res);
// replacement of above scenario using join
let charStr = charArr.join("/");
console.log(charStr, typeof charStr);

//  includes Method
// indexOf Method --> search from beginning
// lastIndexOf Method --> search from Last

let newArray = ["N", 1, 3, 4, 5, "A", 87];
console.log(newArray.includes("A"));
console.log(newArray.includes(2));
console.log(newArray.indexOf(2));
console.log(newArray.indexOf("N"));
console.log(newArray.lastIndexOf("N"));

// forEach --> ES6 Introduction
// works on array
// doesnt work on object
newArray.forEach((e, index) => {
  console.log(e, index);
});

// forEach
// Doesnt return array
// Only perform operation on array

const newArray1 = newArray.map((e, index) => {
  return e * 3;
});

console.log(newArray1);
// map
// same as foreach
// returns new Array
*/

// =================================================================================

let number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// filter method
// return new array as output acc to call back condition
const evenArray = number.filter((value, idx) => {
  console.log(value, idx);
  return value % 2 == 0;
});

console.log(evenArray);

let newArray = ["N", 1, 3, 4, 5, "A", 87, { name: "Newton" }];
newArray.forEach((e, index) => {
  if (typeof e === "object") {
    console.log(e, index);
  }
});

//find method
const checkObject = newArray.find((e) => e.name === "Newton");
const checkObjectIndex = newArray.findIndex((e) => e.name === "Newton");
console.log(checkObject);
console.log(checkObjectIndex);

// some

const check = newArray.some((e) => e === "N");
console.log(check);
