//map
//transform is array
//most useful and most use method
//it returns a enw array
//it calls the callback function for each element of the array amd returns the
//array of results
//syntax
// arr.map(function (item, index, array){})

// let nums = [10, 20, 30, 40, 50];

// [20, 40, 40, 80, 100]

// nums.map(function (item, index, array) {
//     console.log(`${item} is at ${index} of array ${array}`)
// })

// const numbersTimes2 = nums.map(function (value) {

//     return value * 2;
// })

// console.log(numbersTimes2)

// const numbersTimes2 = nums.map(v => v * 2);

// console.log(numbersTimes2)

// const numbersTimes2Obj = nums.map(v => ({ value: v * 2 }))
// console.log(numbersTimes2Obj)

// const numbersWithNegatives = [-10, 20, 30, -40, -50];

// const positiveBy10 = numbersWithNegatives.filter(v => v > 0).map(v => v * 10);
// console.log(positiveBy10)

const arrayOfNames = ["John", "Peter", "Rock"];

//array of object where each object has a key of the  name and the value should be its length

// const arrayOfObj = arrayOfNames.map(v => ({ [v]: v.length }))

const arrayOfObj = arrayOfNames.map(function (name) {
  const obj = {
    [name]: name.length,
  };
  return obj;
});

console.log(arrayOfObj);
// const greet = () => {
//     //explicit return
//     return 'Greetings for the day';
// }

// const greet = () => 'Greetings for the day';

// const user = () => ({ name: 'John', age: 20 });

// //implicit return

// console.log(user())
