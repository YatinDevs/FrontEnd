// ## ## ## ## ##    Maps    ## ## ## ## ## ## 

// Maps are Iterables.

// 1. Store data in Ordered Fashion
// 2. Store Key Value pair(like Objects).
// 3. Duplicates keys are not allowed like Objects.

//-------------------------------------------------------------------
/*

// Difference Between Maps and Objects .

// ##  ## 1. Objects can only have String or Symbol as key

// ##  ## 1. In Maps you can use anything as key 
// like array,number, string .

//------------------------------------------------------------------
// object Literal 
//  keys in Object literal are always in String or Symbol.
// key -- > String.
// key -- > symbol.
const person = {
    first_name : "Yatin",
    age : 22 ,
    1 : "one" // Assigned key as number
}
// this key 1 is converted to string and stored as string we can
// check type of key
console.log(person['1']); // calling as string 
// output : one

// Iterate
for(let key in person){
    console.log(typeof key,key);
}

console.log(person.first_name); // call by Dot
console.log(person["first_name"]); // call by bracket

*/

// ########################################################################\

/*
// Working of Map:

// Stores Key , Value Pairs:

const users = new Map();
users.set('firstname','Yatin');
users.set('age',"22");
// console.log(users);

// ##  ## 1. Objects can only have String or Symbol as key

// ##  ## 1. In Maps you can use anything as key 
// like array,number, string .

users.set(1,'sanket');
console.log(users);

// In Object we use to access data: 

// console.log(person.first_name); // call by Dot
// console.log(person["first_name"]); // call by bracket

// How to access Key value pairs from Map


// console.log(users.firstname); // undefined
// console.log(users["firstname"]); //  undefined
// Not applicable in Map

// In Map we Have get Method

console.log(users.get('firstname')); 
console.log(users.get('age')); 
console.log(users.get(1));

// I want to print all keys: 
console.log(users.keys());

// I want to print all values: 
console.log(users.values());


// for of loop

for(let key of users.keys()){
    console.log(key,typeof key);
}

*/
//-----------------------------------------------------------------------------------------

// In map key can be object literal , array , number , string ,symbol any thing.
// In object for in loop was applicable not for of loop.
// here for of loop is directly applicable.


const users = new Map();
users.set('firstname','Yatin');
users.set('age',"22");
users.set(2,"siddhi");
users.set(1,'sanket');
for (let key  of users ){
    console.log(Array.isArray(key),typeof key,key);
}
users.set(1,'sanket');
for (let [key,value]  of users ){ // destructuring array which key gives above
    console.log(key,value);
}


// Can Pass Array also :
const customer = new Map([['firstName','Yatin'],['age','7']]);
console.log(customer);



const customer1 = {
    id : 1,
    first_name : "Yatin"
}
const customer2 = {
    id : 1,
    first_name : "siddhi"
}
// Object Mapped with Object
const extraInfo = new Map();
extraInfo.set(customer1,{age:27,gender:'male'});
extraInfo.set(customer2,{age:22,gender:'female'});
console.log(extraInfo);
console.log(customer1.id);
console.log(extraInfo.get(customer1).gender);
console.log(extraInfo.get(customer1).age);
console.log(extraInfo.get(customer2).age);
console.log(extraInfo.get(customer2).gender);

// ---------------- ######### Real Life Examples ###################### ---------------------------------