// Methods 
// Function inside objects
/*
const person={
     firstName: "Yatin",
     age : 24,
     about : function(){
       console.log(`person name is ${this.firstName} and Person Age is ${this.age}`);
     }    
}

person.about();
*/
// this gets value at runtime
// this --> specifies this object if exist firstname take that
// this keyword

function personInfo(){
       console.log(`person name is ${this.firstName} and Person Age is ${this.age}`);
}


const person1={
    firstName: "Yatin",
    age : 24,
    about : personInfo
}

const person2={
    firstName: "Ankita",
    age : 21,
    about :personInfo
}

const person3={
    firstName: "Sayali",
    age : 25,
    about : personInfo
}

console.log(person3.about());
