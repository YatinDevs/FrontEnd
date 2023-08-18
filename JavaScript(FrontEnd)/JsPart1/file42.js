// proto , prototype, class 
// storing methods in different object
const userMethods ={
    about : function(){
        return `${this.firstName} is ${this.age} Years old,`;
   },
   is18 : function(){
       return this.age>=18;
   },
   sing: function(){
    return "songssssssss";
   }
}

const user = {
    firstName : "Yatin",
    lastName :"Chaudhari",
    email: "c.yatin279@gnail.com",
    age : 23,
    address : "House 101,Near Abc, Xyz Road,State,Pincode.",
    about : function(){
         return `${this.firstName} is ${this.age} Years old,`;
    },
    is18 : function(){
        return this.age>=18;
    }
}

// function (that function create object)
// 2. add key value pair
// 3. object ko return karega

// function to create multiple user objects
function createUser(firstName,lastName,email,age,address){
    const user = Object.create(userMethods); // creating empty object
    // as well as providing
    user.firstName =firstName;
    user.lastName = lastName;
    user.email =email;
    user.age =age;
    user.address = address;
    user.about =userMethods.about;
    user.is18= userMethods.is18;
    user.sing= userMethods.sing;

    return user;
}

const user2=createUser('Ankita','Chavan','ankita23@gnail.com',24,'101 apt, city name,residance,state,pincode');
console.log(user2);
console.log(user2.about());
console.log(user2.sing());


const user3=createUser('siddesh','tawade','siddesh24@gmail.com',23,'address');
console.log(user3);
