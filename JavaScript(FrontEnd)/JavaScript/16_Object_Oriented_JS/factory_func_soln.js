
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


// console.log(user1);
// const is18 = user1.is18();
// console.log(is18);
// const about = user1.about();
// console.log(about);

// console.log(user2);
// const is18 = user2.is18();
// console.log(is18);
// const about = user2.about();
// console.log(about);

// console.log(user3);
// const is18 = user3.is18();
// console.log(is18);
// const about = user3.about();
// console.log(about);
