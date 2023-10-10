let num = [1, 2, 3, 4, 5, 6];

let avg = num.reduce((total, curr, _, arr) => total + curr / arr.length, 0);

console.log(avg);

let output = num.reduce((includes, curr) => {
  const isPresent = includes ? includes : curr === 3;
  return isPresent;
});

console.log(output);

let numbers = [12, 2, 4, 35, 436, 34, 3, 2];

let groups = [
  [2, 3],
  [3, 7],
  [4, 5],
];

let output1 = groups.reduce((acc, curr) => {
  let count = curr[0];
  let value = curr[1];

  for (let idx = 0; idx < count; idx++) {
    acc.push(value);
  }

  return acc;
}, []);

console.log(output1);

let output2 = groups.reduce((acc, curr) => {
  let count = curr[0];
  let value = curr[1];
  
     
   ...acc,...Array(count).fill(value);

 
}, []);

console.log(output2);
