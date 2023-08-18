// arrow function

const user1={
    firstName : "Yatin",
    age : 24,
    about : ()=>{
        console.log(this); // Incase of Arrow function This is Window
        // and Not the User1
        console.log(this.firstName,this.age);
    }
}
user1.about(user1);
