// Static Method and Properties :





class Person{
    constructor(first_name,last_name,age){
        this.first_name =first_name;
        this.last_name =last_name;
        this.age =age;
    }

    static classInfo(){
        return `This is Person Class . `;
    }

    static desc = "static property";
    
    get fullname(){
        return `Full Name is  ${this.first_name} ${this.last_name} .`;

    }
    // fullname(){
    //     return `Full Name is  ${this.first_name} ${this.last_name} .`;

    // }

    setName(first_name,last_name){
        this.first_name =first_name;
        this.last_name =last_name;
    }

    set fullname(fullname){
        // fullName.split("");
        const[first_name,last_name]=fullname.split(" ");
        this.first_name =first_name;
        this.last_name =last_name;
    }
}


const person1 = new Person("Yatin","Chaudhari",24);
console.log(person1);
// console.log(person1.fullname()); // Calling Method
// we dont need to call properties we can print them :
console.log(person1.first_name); 
console.log(person1.fullname); 
// function is returned ---> I want output from it similar to properties

// I want to call fullname method similar to properties

// So we add get in function
// Getter Method Created :
console.log(person1.fullname); 
// Now we can use method as property.

person1.setName ("siddesh","tawade");
// or we can set indiviually
person1.first_name ="Priya";
person1.last_name = "Patil";
console.log(person1.fullname); 


//// Setter Method Created :

person1.fullname ="Aditya Gaikwad";
console.log(person1.fullname); 

// ---------------------------------------------------------------------------------------

// Static Method
// No need to create object 
// we can call it through class itself directly.
const info = Person.classInfo();
console.log(info);
console.log(Person.desc);

/*
  The static properties and methods are assigned to the class function instead 
  of to the prototype of the class function. So, we cannot call the static method 
   properties using the instance of the class. However, we can access the 
   property and method directly using the class name.

What are the properties of a static class?
Static classes are sealed and therefore cannot be inherited. 
They cannot inherit from any class or interface except Object.
 Static classes cannot contain an instance constructor. 
 However, they can contain a static constructor.

 What is static method?
A static method is a method that belongs to a class rather than an instance of 
a class. This means you can call a static method without creating an object of 
the class. Static methods are sometimes called class methods.


*/