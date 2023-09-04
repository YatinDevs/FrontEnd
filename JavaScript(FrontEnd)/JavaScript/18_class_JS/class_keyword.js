// Class Keyword
// Es6

/*
   1]]   ## JavaScript Class Syntax
- Use the keyword class to create a class.
- Always add a method named constructor():

2]] A JavaScript class is not an object.

- It is a template for JavaScript objects.

 3]]] # # The constructor method is a special method: ## 

- It has to have the exact name "constructor"
- It is executed automatically when a new object is created
- It is used to initialize object properties
- If you do not define a constructor method, 
- JavaScript will add an empty constructor method.

--A class in javascript is basically a blueprint or 
template of the object. New objects can be created from a class.

// Classes are similar to functions. Here, a class keyword is used instead of
 a function keyword. Unlike functions classes in JavaScript are not hoisted. 
The constructor method is used to initialize. The class name is user-defined.

Syntax:

class classname {
  constructor(parameter) {
    this.classname = parameter;
  }
}
*/

class CreateUser{

    constructor(first_name,last_name,email,age,address){
        console.log("constructor Called");
        this.first_name = first_name,
        this.last_name = last_name,
        this.email = email,
        this.age = age,
        this.address = address;    
    
    }

    about(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    }
       
    is18 (){
           return this.age>=18;
    }
       
    sing (){
         return 'abc efg hijk lmno lmno pq rs t u v w';
      }

}
// Cannot invoke class constructor without new
// first the constructor is invoked in class
const user1= new CreateUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
const user2= new CreateUser("Siddesh","chaudhari","c.siddeshyatin727@gmail.com",24,"home,building,pincode,state");
const user3= new CreateUser("Priya","chaudhari","c.priyayatin727@gmail.com",23,"home,building,pincode,state");
// console.log(user1);

console.log(Object.getPrototypeOf(user1));



/*
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
*/