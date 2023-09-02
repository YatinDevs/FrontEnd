
/*

- Factory functions & discuss some memory related problems
- First solution to that problem
- Why that solution isn’t that great

*/


/*
const user1 = {
    first_name : 'Yatin',
    last_name : 'Chaudhari',
    email : "c.yatin727@gmail.com",
    age : 24,
    address : "House Number,colony,pincode,state",
    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age>=18;
    }
}

const user2 = {
    first_name : 'Yatin',
    last_name : 'Chaudhari',
    email : "c.yatin727@gmail.com",
    age : 24,
    address : "House Number,colony,pincode,state",
    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age>=18;
    }
}

const user3 = {
    first_name : 'Yatin',
    last_name : 'Chaudhari',
    email : "c.yatin727@gmail.com",
    age : 24,
    address : "House Number,colony,pincode,state",
    about : function(){
        return `${this.first_name}  ${this.last_name} is ${this.age} years old.`;
    },

    is18 : function(){
        return this.age>=18;
    }
}

// To make many more User Similary is Difficult So we will make One Function
// So Lets Make One Function Which takes all data name address email and return object.
const aboutUser = user1.about();
console.log(aboutUser);
// Memory Issue is Here
*/
// #####################################################################################################

// Function (That Function Create New Object)
// Add Key Value Pair
// Returns Object

// - First solution to that problem


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
