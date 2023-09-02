
/*

- Factory functions & discuss some memory related problems
- First solution to that problem
- Why that solution isn’t that great

*/


// - First solution to that problem
/*

function createUser(first_name,last_name,email,age,address){
      
    const user = {};
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address,

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1= createUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);


*/
//-----------------------------------------------------------------------------------------------------
// - Why that solution isn’t that great We Will Disuss Here
/*
function createUser(first_name,last_name,email,age,address){
      
    const user = {};
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address,

    user.about = function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },

    user.is18 = function(){
        return this.age>=18;
    }

    return user;
}

const user1= createUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

const user2= createUser("Siddesh","Pandey","c.siddesh@gmail.com",22,"home,building,pincode,state");
const user3= createUser("Alia","Bhatt","c.alia@gmail.com",21,"home,building,pincode,state");

*/
// So Problem with Above Solution Lets See
// Now We make user1 , user 2,user 3 All this User are using create User Function
// That Function has two method 
// So As Many times we Call that Create User Function
// Lets Say :

// For User1 : CreateUser Function Creates : two method  about and is18
// For User2 : CreateUser Function Creates : two method  about and is18
// For User3 : CreateUser Function Creates : two method  about and is18

// So for Each Users There are Two methods created which takes Space in Memory 
// As many Users Created more Memory Wasted 
// SO here what we can Do is As method works same for All
// We Remove Those Methods and Make User Methods Object .

const userMethods={
    // User Method Objects
    // Method about
    // key : value
    // about : method
    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },
    // Method is18
    // key : value
    // is18 : method
    is18 : function(){
        return this.age>=18;
    },

    sing : function(){
        return 'abc efg hijk lmno lmno pq rs t u v w';
    }
    
}


function createUser(first_name,last_name,email,age,address){
      
    const user = {};
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address,
    // Reference given
    user.about = userMethods.about;
    user.is18 = userMethods.is18;
    user.sing = userMethods.sing;

   return user;
}

const user1= createUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

const user2= createUser("Siddesh","Pandey","c.siddesh@gmail.com",22,"home,building,pincode,state");
const user3= createUser("Alia","Bhatt","c.alia@gmail.com",21,"home,building,pincode,state");

// I want User to Have One More Sing Method

// Every time We Make New Method In User Methods we Have to Make changes in Create
// Create User Function as Well and keep it Updated

//_------------------------------------------------------------------
/*

const obj1 = {
    key1 : "value1",
    key2 : "value2",
     
}

const obj2 = {
    key3 : "value3",
     
}

console.log(obj1.key1);  // value1
console.log(obj2.key3); // value3
console.log(obj2.key1); // undefined
// I dont want Undefined here
// if Obj2 dont have key1 it should go to obj1 and check if it has key1
// if yes should return from there

// Agar Object 2 ko Key 1 na mile toh 
// Object2 khud jaye object 1 ke pass jaye aur key 1 waha hai toh 
// waha se de
*/
// -------------------------------------------------

const obj1 = {
    key1 : "value1",
    key2 : "value2",
     
}

// object literals
// const obj2 = {};
// // there is one more way to create empty objects.
// obj2.key3 = "value3";  

// // there is one more way to create empty objects.
const obj2 = Object.create(obj1);
obj2.key3 = "value3"; 
// obj2.key2 = 'unique'; 

console.log(obj1.key1);  // value1
console.log(obj2.key3); // value3
console.log(obj2.key1); // value1
console.log(obj2.key2); // unique
// if obj.key2= unquie is commented 
console.log(obj2.key2); // value2


// Solution USing Object.create();

// We have Achieved Solution lets See How

// When We Create Empty object here with help of Object.create();
// const obj2 = Object.create(obj1);
// and add obj1
// while calling console.log(obj2.key2);
// it is checking if obj2 has the key2 if yes it will return it with highest priority
// but if not it will go to // const obj2 = Object.create(obj1);
// obj1 mentioned and check if it has the key2 and return its value

console.log(obj2);

// __proto
// Official Ecmascript documentation
// [[prototype]]
// __proto__,[[prototype]]


// prototype is different


// -------------------------------------------------------------------------

// what is happening ?
// obj2 __proto__ is obj1
/*
   ########################## proto ###########################

-  proto is also a way to share behavior and data between multiple objects access 
   using __proto__

- All the objects have proto property.
- proto gives access to the prototype of the function using the object.

Syntax: (object.__proto__)

-It is used in the lookup chain to resolve methods, constructors, etc.
- It is the property of the instance of that class.

- It is also called dunder proto.
- It is rarely used in JavaScript.

- It is introduced in ECMAScript 5.

- proto property that is set to an object when it is created using a new keyword.
 All objects behavior newly created have proto properties.

*/

console.log(obj2.__proto__); // proto properties 
// Obj2 proto is set to obj1
// so proto give access to obj1
