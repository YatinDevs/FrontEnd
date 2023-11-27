// Map Reduce Filter

let numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// Array of Square
// [4, 9, 16.... 81]

function square(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * arr[i]);
  }
  return newArr;
}

const squareArray = square(numbers);
console.log(squareArray);

// Map

console.log(
  numbers.map(function (curr) {
    return curr * curr;
  })
);

// Filter
// All Odd Numbers

console.log(
  numbers.filter((curr) => {
    if (curr % 2 !== 0) {
      return true;
    }
    return false;
  })
);

let cart = [
  {
    id: 1,
    title: "Socks",
    price: 200,
  },
  {
    id: 2,
    title: "Pants",
    price: 1400,
  },
  {
    id: 3,
    title: "Jeans",
    price: 2000,
  },
];

// Reduce

const totalValue = cart.reduce((acc, curr, i) => {
  return (acc = acc + curr.price);
}, 0);

console.log(totalValue);

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
    age: 38,
  },
  {
    firstName: "Kareena",
    lastName: "Kapoor",
    gender: "Female",
    age: 45,
  },
];

// 1. Print Names of those actors who are above or equal to 44

console.log(
  actors
    .map((curr) => {
      if (curr.age >= 44) {
        return `${curr.firstName} ${curr.lastName}`;
      }
    })
    .filter((curr) => {
      if (curr === undefined) {
        return false;
      }
      return true;
    })
);

console.log(
  actors
    .filter((curr) => curr.age >= 44)
    .map((curr) => `${curr.firstName} ${curr.lastName}`)
);

// 2. Find Sum of age of those actors who are female using Reduce

const sumOfFemaleActorsAge = actors.reduce((acc, curr) => {
  if (curr.gender === "Female") {
    return (acc = acc + curr.age);
  }
  return acc;
}, 0);

console.log(sumOfFemaleActorsAge);

// 3. Print Names of those actors who are male
