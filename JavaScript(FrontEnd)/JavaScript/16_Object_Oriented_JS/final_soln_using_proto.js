
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
      
    // const user = {};// 1 . Creating empty object -> Object literals
    // other way with proto 
    const user = Object.create(userMethods);
    // proto property of object is used to fetch the functions
    user.first_name = first_name,
    user.last_name = last_name,
    user.email = email,
    user.age = age,
    user.address = address
    // Reference given
    // user.about = userMethods.about;
    // user.is18 = userMethods.is18;
    // user.sing = userMethods.sing;

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

console.log(user1);
const is18 = user1.is18();
console.log(is18);

/*

    JavaScript object.create() method is used to create a new object with the specified
     prototype object and properties. Object.create() method returns a new object with 
     the specified prototype object and properties.
   
     Return Value: Object.create() returns a new object with the specified prototype 
     object and properties. 

*/

/// - What is __proto__ , [[prototype]] is done here.
