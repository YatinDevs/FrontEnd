//reduce
//hardest methods of all the array functions
//super powerful method
//gives u the power to create anything u want from an array.

// const numbers = [10, 20, 30, 40];

// 0 + 10 + 20 + 30 + 40

//syntax

//arr.reduce(function(acc, curr, index, array){}, initialValueOfAccumulator)

//basic sum or multiplication

// let sum = numbers.reduce(function (acc, curr) {

//     acc = acc + curr;

//     return acc
// }, 0)

// console.log(sum)

//implicit single liner

// let sum = numbers.reduce((acc, curr) => acc + curr, 0);

// console.log(sum)

// const numbers = [10, 20, 30, 40, 50];

// 10 / 5 + 20 / 5 + 30 / 5 + 40 / 5 + 50 / 5

// let average = numbers.reduce(function (avg, value, _, arr) {
//     avg = avg + (value) / arr.length
//     return avg;
// }, 0);

// console.log(average)

// let average = numbers.reduce((avg, value, _, arr) => avg + (value) / arr.length, 0)
// console.log(average)

//

// const numbers = [10, 20, 30, 40, 50];

// const includes30 = numbers.includes(30);

// console.log(includes30);

// const includes30 = numbers.reduce(function (includes, value) {
//     const isFound = includes ? includes : value === 100;
//     return isFound;
// }, false)

// const includes30 = numbers.reduce((includes, value) => (includes ? includes : value === 30), false)

// console.log(includes30);

//

// const numbers = [10, 20, 30, 40, 50];

// const transformedArray = numbers.reduce((accumulator, currentValue) => {
//     const transformedValued = currentValue * 2;

//     accumulator.push(transformedValued);

//     return accumulator;
// }, [])

// console.log(transformedArray)

// let transform = numbers.reduce((arr, value) => [
//     ...arr, value * 2
// ], [])

// console.log(transform)

// let numbers = [12, 2, 3, 4, 5, 4, 3, 2, 1, 10];

// //output {min, max}

// let minMax = numbers.reduce((acc, value) => ({

//     min: Math.min(acc.min, value),
//     max: Math.max(acc.max, value)
// }), {
//     min: Infinity,
//     max: -Infinity
// })

// console.log(minMax)

let groups = [
  [2, 3],
  [3, 7],
  [4, 5],
];

//[2,3]  [count, value]
//output => [3,3,7,7,7,5,5,5,5]

// let result = groups.reduce((arr, group) => {

//     let count = group[0];
//     let value = group[1];

//     for (let index = 0; index < count; index++) {
//         arr.push(value);
//     }

//     return arr;

// }, [])

// console.log(result)

// let result = groups.reduce((arr, group) => [
//     ...arr, ...Array(group[0]).fill(group[1])
// ], [])

// console.log(result)
