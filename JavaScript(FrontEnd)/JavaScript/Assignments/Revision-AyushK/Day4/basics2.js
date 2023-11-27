// Functions

function outer() {
  return function () {
    console.log("Hello World");
  };
}

const abc = outer();
abc();

outer()();

// Currying

let totalSum = 0;

function sum(num) {
  if (typeof num === "number") {
    totalSum += num; // totalSum = totalSum + num
    return sum; // Recursively call the function if the argument is a number
  } else {
    return totalSum;
  }
}

console.log(sum(1)(2)(3)(4)(5)(6)());

// Function Declaration or Function Definition

function printHello() {
  console.log("Hello World 1!");
}

const printHello2 = function () {
  console.log("Hello World 2!");
};
