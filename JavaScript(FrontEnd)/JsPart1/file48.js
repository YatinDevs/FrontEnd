// Class KeyWord

class CreateUser {
    constructor(firstName,age){
        console.log("constructor called")
        this.firstName=firstName;
        this.age=age;
    }
    about(){
        return `${this.firstName} is ${this.age}`;
    }
    is18 (){
        return this.age>=18;
    }
    sing(){
     return "songssssssss";
    }
    func(a){
       console.log(a);
    }
}

const user1=new CreateUser("Yatin",24);

console.log(user1);
console.log(Object.getPrototypeOf(user1));
user1.func(1234);
/*
// constructor function
function CreateUser(firstName,age){
    this.firstName=firstName;
    this.age=age;
}

CreateUser.prototype.about=function(){
    console.log(this.firstName,this.age);
}
const user1=new CreateUser("harshit",24);
console.log(user1);
user1.about();
*/