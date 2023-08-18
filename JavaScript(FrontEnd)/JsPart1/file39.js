/*
const user1 = {
    firstName : "Yatin",
    age : 23,

    about : function(){
        console.log(this.firstName,this.age);
    }
}
*/


const user2 = {
    firstName : "Yatin",
    age : 23,

    about(){
        console.log(this.firstName,this.age);
    }
}

user2.about();