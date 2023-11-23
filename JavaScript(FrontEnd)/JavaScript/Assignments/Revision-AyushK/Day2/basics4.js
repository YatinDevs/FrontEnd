// Operators

let a = 50;
let b = 60;

let sum = a + b;
console.log(sum);

let count = 10;
count = count + 1; // 1
count += 1; // count = count + 1 // 2
count -= 1; // 1
count *= 1; // 1 * 1
count /= 1; // 1

count %= 4;

console.log(count);

let number2 = 12;
// number2 &= 2; // number = number & 2;
// console.log(number2);

number2 |= 2; // number = number & 2;
console.log(number2);

/*

000111

2 ^ 0 (1) -> 1 * 1
2 ^ 1 (2) -> 2 * 1
2 ^ 2 (4) -> 4 * 1

12 -> 0001100

2 ^ 0 (1) -> 1 * 0
2 ^ 1 (2) -> 2 * 0
2 ^ 2 (4) -> 4 * 1
2 ^ 3 (8) -> 8 * 1


2 -> 00000010


12 -> 00001100
 2 -> 00000010
0  -> 00000000 (& Result)
0  -> 00001110 (| Result)


*/

// Comparison Operators

let a2 = 2;
let b2 = 3;
let b3 = "3";

console.log("**********");

// Equality ==
// Strict Equality ===

console.log(a2 === b2); // false
console.log(b2 == b3); // true
console.log(b2 === b3); // false

console.log("**********");

// Not Equal !=
// Strict Not Equal !==

console.log(a2 !== b2); // true
console.log(b2 != b3); // false
console.log(b2 !== b3); // true

console.log("**********");

// Arithmetic Operators

console.log(2 % 3); // 2
console.log(3 % 2); // 1

console.log("**********");

let var1 = 50;
var1++;

var1--;
var1--;

console.log(var1);

console.log("**********");

let var2 = null;
console.log(+var2);
