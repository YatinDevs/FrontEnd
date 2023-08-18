class Animal  // Super class  parent Class
{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    eat(){
        return `${this.name} is Eating`;
    }
    isSuperCute(){
        return this.age<=5;

    }
    isCute(){
        return true;
    }
}

const animal=new Animal("tom",23);


class Dog extends Animal{ // sub Class  Child Class
    constructor(name,age,speed){
       super(name,age);
       this.speed=speed;
    }
    run(){
        return ` ${this.name} is Running At ${this.speed} speed`;
    }
    eat(){
        return `Modified Eat`;
    }
}
// create object or instance
const tommy=new Dog("Tommy",3,20);
console.log(tommy);
console.log(tommy.eat());
console.log(tommy.isSuperCute());
console.log(tommy.isCute());
console.log(tommy.run());

// Static Method and Properties
