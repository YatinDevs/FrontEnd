// Check Object is Empty

let obj1 = {};

// 1

console.log(Object.keys(obj1).length === 0);

// 2

console.log(Object.values(obj1).length === 0);

// 3

console.log(JSON.stringify(obj1) === "{}");
