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

// 1. Print Names of those actors who are above 44
// solution :
// actors.map((actor) => {
//   if (actor.age > 44) {
//     console.log(
//       "Guys with age above 44",
//       actor.firstName + " " + actor.lastName
//     );
//   }
// });

// 2. Find Sum of age of those actors who are female using Reduce
// reduce((acc, currvalue, currentidx, arr) => {}, initialvalue);
const SumofAge = actors.reduce((age, actor) => {
  // console.log(actor.age);
  return age + actor.age;
}, 0);

console.log(SumofAge);

// 3. Print Names of those actors who are male
// actors.filter((actor) => {
//   if (actor.gender !== "Female") {
//     console.log(`Gender : Male , Name : ${actor.firstName} ${actor.lastName}`);
//   }
// });
