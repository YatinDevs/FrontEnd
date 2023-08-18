// new Keyword

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

// new keyword
// 1. creates empty Object this={}
// 2.  returns this (values specified in this)
// 3.       const user = Object.create(createUser.prototype); // creating empty object
  // no need of this 

  // __proto__
  // official ecmascript documentation
  // [[prototype]]

  // hasownProperty