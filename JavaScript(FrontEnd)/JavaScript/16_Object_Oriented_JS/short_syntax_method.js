// short syntax for methods

// method function inside object
const user1 = {
    first_name : "Yatin",
    age : 23,
  
    about (){

     console.log(this);

    console.log(this.first_name,this.age);
    }

}
user1.about();