// Classes Practice and Extends Keyword:



class Animal {

    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is Eating`;
    }

    isCute(){
        return true;
    }

    ishealthy(){
        return this.age<=10;
    }
}

// const animal1 = new Animal("Dog", 8);
// console.log(animal1);
// console.log(animal1.eat());
// console.log(animal1.isCute());
// console.log(animal1.ishealthy());

/*
// Dog Class

class Dog{
    
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is Eating`;
    }

    isCute(){
        return true;
    }

    ishealthy(){
        return this.age<=10;
    }
}

const tommy = new Dog("tommy",9);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());

*/


// Extends keyword 
// Inheritances
// Here Dog class uses constructor of Animal Class
// And Inherits all method and property of Animal Class.

class Dog extends Animal{

    constructor(name,age,speed){
        super(name,age)
        // Super keyword
        this.speed = speed;
    }
    run(){
        return `${this.name} is Running at ${this.speed} kmph speed .`
    }

    // Same method in child class as parent
    
    eat(){
        return `Of Child class : ${this.name} is Eating`;
    }


}

// base class --> Animal --> parent class 
// derived class --> DOg --> subclass --> child class

// Object in JS / Instance of Class in java ----> we created here
// Instance of Class Dog // Object of Class Dog
const tommy = new Dog("tommy",9,33);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isCute());
console.log(tommy.run());


/*
   The super keyword in JavaScript acts as a reference variable to the parent 
   class. It is mainly used when we want to access a variable, method, or 
   constructor in the base class from the derived class.


*/

/*
  Method Overriding is an OOPs concept closely knit with inheritance.
   When a child class method overrides the parent class method of the same name, 
   parameters and return type, it is termed as method overriding.
*/