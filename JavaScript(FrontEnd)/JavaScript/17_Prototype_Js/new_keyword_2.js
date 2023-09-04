

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


function createUser(first_name,last_name,email,age,address){
      
    const user = Object.create(createUser.prototype);
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address


    return user;
}

// ---> We already have prototype so lets add function  here instead of 
// creating new __proto__
// console.log(createUser.prototype);
//

createUser.prototype.about=function(){
 return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
}

createUser.prototype. is18 = function(){
            return this.age>=18;
        }

createUser.prototype.sing = function(){
            return 'abc efg hijk lmno lmno pq rs t u v w';
        }


console.log(createUser.prototype);





// const user1= createUser("Yatin","chaudhari","c.yatin727@gmail.com",25,"home,building,pincode,state");
// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

// __proto__ is Reference
// prototype is empty object where methods and properties can be added


// --------------------------------------

/*
    New keyword
 
*/