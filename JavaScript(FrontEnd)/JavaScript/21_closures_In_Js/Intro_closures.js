// Closures : 


// 
/*
// Function can return Functions 
function outerFunction(){
     function innerFunction(){
        console.log("hello world");
     }
     return innerFunction;
}

const ans = outerFunction();
console.log(ans);
ans();


*/

// Function can return Functions 
function printFullName(first_name,last_name){
   function printName(){
      console.log(first_name,last_name);
   }
   return printName;
}

const ans2 = printFullName("Yatin","chaudhari");
console.log(ans2);
ans2();

/*
  A closure is a feature of JavaScript that allows inner functions to access the outer 
  scope of a function. Closure helps in binding a function to its outer boundary and is 
  created automatically whenever a function is created. A block is also treated as a scope
   since ES6. Since JavaScript is event-driven so closures are useful as it helps to
    maintain the state between events.

Prerequisite:: Variable Scope in JavaScript 

Lexical Scoping: A function scope’s ability to access variables from the parent scope 
is known as lexical scope. We refer to the parent function’s lexical binding of the child 
function as “lexically binding.”




*/