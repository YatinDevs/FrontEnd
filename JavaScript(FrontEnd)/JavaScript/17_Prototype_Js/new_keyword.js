// New Keyword :
/*
  1. creates empty object // this = {}
  2. return this
  3 .  const user = Object.create(createUser.prototype); no need to apply this
  // this. automatically creates link of function and proto reference to prototype

*/
function createUser(first_name,age){
    this.first_name = first_name;
    this.age = age;

}

createUser.prototype.about = function(){
    console.log(this.first_name,this.age);
 } 

const user1 = new createUser("Yatin",22);
console.log(user1);
console.log(createUser.prototype);
user1.about();