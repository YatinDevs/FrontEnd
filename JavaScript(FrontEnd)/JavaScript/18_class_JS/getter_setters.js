// Getters And Settersss ::



class Person{
    constructor(first_name,last_name,age){
        this.first_name =first_name;
        this.last_name =last_name;
        this.age =age;
    }
    
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

