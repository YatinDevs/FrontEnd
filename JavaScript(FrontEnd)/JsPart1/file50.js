// Getter And Setters 

class Person{


    constructor(firstName,lastName,age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }
    // working as Function
   /* fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    */
    // Working as Property
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
  /*
    setName(firstName,lastName){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    */
    set fullName(fullName){
        const [firstName,lastName]=fullName.split(" ");
        this.firstName=firstName;
        this.lastName=lastName;
    }
    // Static Method

    static classInfo(){
        return `This is Person Class`};
   // Static Property
   static desc ="Static Property";
}

const person1=new Person("Yatin","Chaudhari",25);
console.log(person1);
console.log(person1.fullName);
console.log(person1.fullName);
/*
person1.setName("Siddesh","Tawade");
console.log(person1);
console.log(person1.fullName);
*/
person1.fullName="Siddesh Tawade";
console.log(person1);

// Static Method and Properties

const info=Person.classInfo();
console.log(info);
console.log(Person.desc);