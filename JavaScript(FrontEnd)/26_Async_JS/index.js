// Callback Function - When a function is passed as an argument to another
// function then its a callback function.
// Argument and Parameter

function sum(a, b) {
  // a, b are called as parameters.
  //   console.log(a + b);
  return a + b;
}

var x = sum(10, 20); // 10,20 are called as arguments.
console.log(x);

// Parent Higher Order Function (HOC)
// Map, For Each, Filter, Reduce, Sort, Find, FindIndex
function addIntoArray(value, totalSum) {
  let array = [1, 2, 3, 4, 5];
  array.push(value);
  totalSum(array);
  return array;
}

// Child
function totalSum(array) {
  console.log("I am a callback function" + array);
}

// const totalSum = (array) => {
//   console.log("I am a callback function" + array);
// };

// Grand Father
// Father
// Son

addIntoArray(6, totalSum);

// Default parameters
function multiply(x, y = 20) {
  console.log("Multiply ->");
  console.log(x);
  console.log(y);
  console.log(" ");
}

multiply();
multiply(10);
multiply(15, 25);

// Operators precedence BODMAS

// First Order Functions
// When any function is used as a variable, its a FOF.
function sumOfArray() {
  let arr = addIntoArray(6, totalSum);
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}
let newValue = 10 + sum(20, 30);
console.log("New Value ->", newValue);
sumOfArray();

// Try Catch Throw Finally

function tryCatchExample() {
  //10lines of code
  // 500rs denominations are not available.
  // finally
  try {
    console.log("I am inside Try block");
    let x = 20;
    let y = 2;
    // 100rs, 50rs.
    // if(totalBalance < withdrawBalance){
    //     throw new Error("Insufficient Funds").
    // }
    if (y === 0) {
      throw new Error("Cannot divide by zero.");
    }
    let div = x / y;
    console.log(div);
  } catch (error) {
    console.log("I am inside catch block and the error is ->", error);
  } finally {
    console.log("I dont care about try or catch. I will run anyhow.");
  }
}

tryCatchExample();

// Anonymous Functions
// When any function doesn't have any name, then its..

var test = function () {
  console.log("I am a normal function without any name");
};

test();

var test1 = () => {
  console.log("Arrow Function");
};
test1();

// IIFE -> Immediately Invoked Function Expression
(() => {
  console.log("I dnt have any name");
})();

// setTimeout, setInterval

// 2000ms or 2s delay
// setTimeout(() => {
//   console.log("Notice me");
// }, 2000);

// setInterval(() => {
//   console.log("What is happening?");
//   console.log("");
// }, 1000);

function countDownTimer(number) {
  console.log(number);
  let newNumber = number - 1;
  if (newNumber > 0) {
    countDownTimer(newNumber);
  }
}

countDownTimer(5);

// Var, Let, and Const
// var can be duplicated, reassigned, hoisted
// let can be no-duplicacy, reassigned, cannot be hoisted
// const can be no-duplicacy, cnt be reassigned, cannot be hoisted

// global scope
// var price = 2000;
// // block scope
// function checkPrice() {
//   var price = 3000;
// }

// checkPrice();

// console.log(price);

// price = 1000;
// console.log(price);
// let price;

// var price1;
// console.log(price1);
// price1 = 1000;
