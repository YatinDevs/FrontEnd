// call  , apply ,  bind

/*
function hello(){
    console.log("hello world");
}
hello.call();

const user1 = {
    firstName : "Yatin",
    age : 23,

    about : function(hobby,favmusician){
        console.log(this.firstName,this.age,hobby,favmusician);
    }
}

user1.about(); // Yatin 23


const user2 = {
    firstName : "Ankit",
    age : 25,

}
user1.about.call(); // undefined
user1.about.call(user2,"guitar","mozart"); // Ankit 25
*/

/*

function about (hobby,favmusician){
    console.log(this.firstName,this.age,hobby,favmusician);
}

const user1 = {
    firstName : "Yatin",
    age : 23,
}


const user2 = {
    firstName : "Ankit",
    age : 25,
}


//about.call(user2,"piano","passengers");

// apply

//about.apply(user1,["guitar","bach"]);

//bind
const func = about.bind(user2,"guitar","bavch"); // returns function
func();
*/

/// dont do this mistake

const user1 = {
    firstName : "Yatin",
    age : 23,

    about : function(){
        console.log(this.firstName,this.age);
    }
}

/*
const myfunc=user1.about; // Yatin 23
// function(){ console.log(this.firstName,this.age);}
myfunc();
*/

const myfunc=user1.about.bind(user1); // Yatin 23
// function(){ console.log(this.firstName,this.age);}
myfunc();