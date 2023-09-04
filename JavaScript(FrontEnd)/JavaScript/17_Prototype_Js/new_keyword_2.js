

// const userMethods={
//     // User Method Objects
//     // Method about
//     // key : value
//     // about : method
//     about : function(){
//         return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
//     },
//     // Method is18
//     // key : value
//     // is18 : method
//     is18 : function(){
//         return this.age>=18;
//     },

//     sing : function(){
//         return 'abc efg hijk lmno lmno pq rs t u v w';
//     }
    
// }



// Constructor FUnction ---> constructing Object
// Convention Captial start letter which function are called using new keyword
function CreateUser(first_name,last_name,email,age,address){
      
    this.first_name = first_name,
    this.last_name = last_name,
    this.email = email,
    this.age = age,
    this.address = address


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


// --------------------------------------

/*
    New keyword :

    New keyword in JavaScript is used to create an instance of an object that has
     a constructor function. On calling the constructor function with ‘new’ 
     operator, the following actions are taken:

    1.  A new empty object is created.

    2 . The new object’s internal ‘Prototype’ property (__proto__) is set the
     same as the prototype of the constructing function.

    3. The ‘this’ variable is made to point to the newly created object. 
    It binds the property which is declared with ‘this’ keyword to the new object.
    bout the returned value, there are three situations below. 
 
*/

//  New Keyword

// Creates Empty object
// Return {} constructor
// function has prototype  and when we set proto of that function is is auto 
// set to its prototype