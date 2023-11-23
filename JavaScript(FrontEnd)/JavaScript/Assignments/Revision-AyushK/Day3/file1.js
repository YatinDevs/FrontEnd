console.log("Script Start! ");
console.log("0", this);

// Arrow vs Regular func :
let order1 = {
  orderId: "123ab",
  placedOn: "23rd Nov",
  price: "2,330",
  printDetails: function () {
    console.log("1", this);
    const add = () => {
      console.log("2", this);
      console.log(
        `Your Order id ${this.orderId} is of ${this.price} placed on ${this.placedOn}`
      );
    };
    add();
  },
};

order1.printDetails();

// Print 1 ,2,3,4,5, using setTimeout after every 1

// for (var i = 1; i <= 5; i++) {
//   function func(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, i * 1000);
//   }
//   func(i);
// }

// for (let i = 1; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }

// for (var i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     let i = 50;
//     console.log(i);
//   }, i * 1000);
//   console.log(i);
// }

// for (let i = 0; i <= 3; i++) {
//   setTimeout(() => {
//     var i = 50;
//     console.log(i);
//   }, i * 1000);
//   console.log(i);
// }

// loop runs 0 1 2 3 -> 4 times

// ST1 0 sec
// ST2 1 sec
// ST3 2 sec
// ST4 3 sec

// output --> block scoping
// 50
// 50
// 50
// 50

const actors = [
  {
    firstName: "Salman",
    lastName: "Khan",
    gender: "Male",
    age: 58,
  },
  {
    firstName: "Ranbir",
    lastName: "Kapoor",
    gender: "Male",
    age: 40,
  },
  {
    firstName: "Shahid",
    lastName: "Kapoor",
    gender: "Male",
    age: 40,
  },
  {
    firstName: "Katrina",
    lastName: "Kaif",
    gender: "Female",
    age: 40,
  },
  {
    firstName: "Kareena",
    lastName: "Kapoor",
    gender: "Female",
    age: 44,
  },
];

// 1. Print Names of those actors who are above 44
// 2. Find Sum of age of those actors who are female using Reduce
// 3. Print Names of those actors who are male
