
/*
export class Person{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log (`Clients FullName is ${this.firstName} ${this.lastName} and Age is ${this.age}.`);
    }
}

*/

// One file can have only one export default
// Gives Error --> Duplicate export of 'default' ;
/*
export default class Person{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log (`Clients FullName is ${this.firstName} ${this.lastName} and Age is ${this.age}.`);
    }
}
*/
// // One file can have only one export default
// export default class Person2{

//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     info(){
//         console.log (`Clients FullName is ${this.firstName} ${this.lastName} and Age is ${this.age}.`);
//     }
// }

// Simple export is possible and can be done 
/*
export class Person2{

    constructor(firstName,lastName,age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    info(){
        console.log (`Buyers FullName is ${this.firstName} ${this.lastName} and Age is ${this.age}.`);
    }
}
*/


// ------------------------------------------------------------------------------
const hello = "hello world";
export default hello;