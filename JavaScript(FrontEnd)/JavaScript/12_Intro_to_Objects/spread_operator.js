// Spread Operator

/// -------------------------------------------------------------------------------
const arr1 = [ 1,2,3];
const arr2 = [5,6,7];

// const newarr = [...arr1];
// const newarr = [...arr1,...arr2];
// const newarr = [...arr1,arr2]; 
// whole array object added as third element 
// with ... it is spread and then added to elements of new arr
// const newarr = [...arr1,...arr2,82,13];


// const newarr = ["abc"];
// const newarr = [..."abc"];
// Spreading String and adding Each Element 
// On seperate Index
// In Case of Number they are not Iteratable
// we Have String Iterable , Array Iteratable
// const newarr = [...123241244214];
const newarr = [..."123241244214"];
// we can convert it into string and do it

console.log(newarr);

/// -------------------------------------------------------------------------------


// Spread Operator in Objects

// In Object only one key can exist they are unique
// value will override in key if added 
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2",
//     key1 : "value3",
// };
// console.log(obj1);

/// -------------------------------------------------------------------------------


/*

// Cloning in Objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
};
const obj2 = {
    key3 : "value3",
    key4 : "value4",
};

// const newobj = {...obj1}
const newobj = {...obj1,...obj2};

console.log(newobj);

*/
/// -------------------------------------------------------------------------------


// Even when we clone objects in new Object
// it will override the values if two objects have same key
// But there are two cases according
// to they way there are added and cloned in sequence
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    
};
const obj2 = {
    key1 : "addingUnique",
    key3 : "value3",
    key4 : "value4",
};

// const newobj = {...obj1}
// const newobj = {...obj1,...obj2};

// console.log(newobj);
// case 1:
// Here the key of obj2 will override the key of obj1 
// as it is added afterwards


// const newobj = {...obj2,...obj1};
// console.log(newobj);
// case 2:

// Here the key of obj1 will override the key of obj2
// as it is added afterwards



/// -------------------------------------------------------------------------------
// also we can add new key value pairs

// const newobj = {...obj2,...obj1,key23:"abcd"};

// console.log(newobj);

/// -------------------------------------------------------------------------------

// Using Spread Iterable in String in Object

// const newobj = {..."abcdef"};
// we spread string  and will be saved as key value pair
// console.log(newobj);
/// -------------------------------------------------------------------------------

// Spreading array items with key value pairs
const newobj = {...["item1","item2"]};

console.log(newobj);