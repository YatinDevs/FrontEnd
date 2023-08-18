// proto , prototype, class 


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

function createUser(firstName,lastName,email,age,address){
    const user = {};
    user.firstName =firstName;
    user.lastName = lastName;
    user.email =email;
    user.age =age;
    user.address = address;
    user.about =function(){
        return `${this.firstName} is ${this.age} Years old,`;
   },
   user.is18=function(){
    return this.age>=18;
    }

    return user;
}

const user2=createUser('Ankita','Chavan','ankita23@gnail.com',24,'101 apt, city name,residance,state,pincode');
console.log(user2);
console.log(user2.about());
console.log(user.is18());
