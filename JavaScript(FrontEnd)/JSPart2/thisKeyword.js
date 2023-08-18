/*
console.log(this); // global Object Reference

function sum(){ // Inside Regular Function
    var add = 2+ 2;
    console.log("Sum of Two no is " + add);
    console.log(this);// global Object Reference
}
sum();
*/
/*
const object1 ={
    name : "Yatin",
    qualification : "B.E.",

    sum : function(){  // this inside Method
        var add=4+4;
        console.log(add);
        console.log(this);// this keyword
        // Gives Reference to Object it Belongs to
        // here sum  Method belongs to Object1
        // so Object1 will be console logged out
        console.log(this.name);// this keyword
       // now with help of this we can call any property of
       // reference object example
       console.log(this.qualification);// this keyword

    }
}

object1.sum();
*/

/*
'use strict'
function sum(){ // Inside Regular Function
    var add = 2+ 2;
    console.log("Sum of Two no is " + add);
    console.log(this);// Undefined while using strict Mode
}
sum();
*/