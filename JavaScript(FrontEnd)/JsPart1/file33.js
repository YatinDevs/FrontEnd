// clone Using Object Assign

// Memory
// Reference Type
/*
const obj={
    key1:"value1",
    key2:"value2"
}
const obj2=obj;

obj.key3="value3";
console.log(obj);
console.log(obj2);
*/

const obj={
    key1:"value1",
    key2:"value2"
}
//const obj2={...obj}; cloning with spread operator to avoid reference type addressing

const obj2=Object.assign({},obj);

obj.key3="value3";
console.log(obj);
console.log(obj2);
