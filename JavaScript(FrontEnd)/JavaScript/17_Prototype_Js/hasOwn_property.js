




// Constructor FUnction ---> constructing Object
// Convention Captial start letter which function are called using new keyword
function CreateUser(first_name,last_name,email,age,address){
      
    this.first_name = first_name,
    this.last_name = last_name,
    this.email = email,
    this.age = age,
    this.address = address
    return this;


}

// ---> We already have prototype so lets add function  here instead of 
// creating new __proto__
// console.log(createUser.prototype);
//

CreateUser.prototype.about=function(){
 return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
}

CreateUser.prototype. is18 = function(){
            return this.age>=18;
        }

CreateUser.prototype.sing = function(){
            return 'abc efg hijk lmno lmno pq rs t u v w';
        }


console.log(CreateUser.prototype);





const user1= new CreateUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
console.log(user1);
const is18 = user1.is18();
console.log(is18);
const about = user1.about();
console.log(about);


// [[prototype]] is Reference
// prototype is empty object where methods and properties can be added

// for(let key in user1){
//     console.log(key);
// }

// All Keys are returned 
// In CAse you just dont want prototype 

/*

  What is hasOwnProperty like in JavaScript?
The hasOwnProperty() method in JavaScript is used to check whether the object has
 the specified property as its own property. This is useful for checking if the 
 object has inherited the property rather than being it's own. Parameters: This 
 method accepts a single parameter.


*/


for(let key in user1){
    if(user1.hasOwnProperty(key)){
      console.log(key);
    }
}

/*
  The hasOwnProperty() method in JavaScript is used to check whether the object
   has the specified property as its own property. This is useful for checking 
   if the object has inherited the property rather than being it’s own.

  Return Value: It returns a boolean value indicating whether the object has the 
  given property as its own property.
*/