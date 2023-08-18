// Using Object.Create 
const obj1 = {
    key1 : "value1",
    key2 : "value2"
}

/*
const obj2={};
    // there is one more way to create empty object
    obj2.key3="value3";
*/

const obj2= Object.create(obj1);
obj2.key3="value3";
//obj2.key2="value3";

console.log(obj2);

// this is happening

// proto 
// official ecmaScript documentation
// [[prototype]]
//  __proto__,[[prototype]]

// prototype is different from above

console.log(obj2.__proto__); // dunder