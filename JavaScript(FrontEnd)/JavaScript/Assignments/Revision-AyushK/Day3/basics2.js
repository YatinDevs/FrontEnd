// setTimeout

// console.log("1");
// console.log("2");

// setTimeout(function hello2() {
//   console.log("Hello 2!");
// }, 0);

// setTimeout(function hello1() {
//   console.log("Hello 1!");
// });

// console.log("5");
// console.log("4");

// Interview Questions 1

// 1. Print 1, 2, 3, 4, 5 ..... After every second

// let i = 100;
// let j = 50;

// Using Let
// for (let i = 1; i <= 5; i++) {
//   let j = 60;
//   setTimeout(() => {
//     console.log(i, j);
//   }, i * 1000);
//   j++;
// }

// ST1 -> 1000
// ST2 -> 2000
// ST3 -> 3000
// ST4 -> 4000
// ST5 -> 5000

/*

Callback Queue ->

Initial -> [ST1, ST2, ST3, ST4, ST5]

*/

// for (var i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     let i = 50;
//     console.log(i);
//   }, i * 1000);
// }

// Using var

for (var i = 1; i <= 5; i++) {
  function myFunction(i) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
  myFunction(i);
}
