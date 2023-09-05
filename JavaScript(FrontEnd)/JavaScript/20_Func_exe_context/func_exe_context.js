// Function Execution Context :

let foo = "foo";
console.log(foo);

 function getFullName(firstName,lastName){
    console.log(arguments); // array like Object --> arguments
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    
    return fullName;
 }

const personName = getFullName("harshit","sharma");
console.log(personName);

// ------------------------------------------------------------------------------------------------------

// Code Flow : Analysing Code 

// 1 Compilation Phase 

// In Global Scope we Have:
/*
    1. foo
    2. getfullName()
    3. personName

    we Have following Things JS gets knowledge about it
*/
// a) Error Syntax Checking by tokenizing / 
// b) Appropriate Scope for variable decided with lexically scoping 
//    and looking at the code.

/*
    We Have Stack

    Global ExecutionContext (by default added to Stack).
    Even before code is Executed it is created with certain things are provided:

    So Inside GlobalExecution Context :
                                                   (Before Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
 
                                                    1. foo : uninitialised.
                                                    2. getfullName(): ->(function)->
                                                    3. personName: uninitialised.

   2. Code Execution Phase :                                   console:

1. let foo = "foo";                                         changes in Memory(initialized)

2. console.log(foo);                                          foo is printed

3. function getFullName(firstName,lastName){
    console.log(arguments);
    let myVar = "var inside func";
    console.log(myVar);                                          function is already stored
    const fullName = firstName + " " + lastName;
    
    return fullName;
 }

4. const personName = getFullName("harshit","sharma");        now for function call
                                                              getFullName function 
                                                              new Function Execution Context created
5. console.log(personName);

                                                   (After Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
                                        
                                                    1. foo : foo.
                                                    2. getfullName(): ->(function)->
                                                    3. personName: uninitialised.

    Global Execution Context is Popped after completion of Code Execution .

                                                     

*/




/*
  There are two types of execution contexts: global and function. The global execution context
   is created when a JavaScript script first starts to run, and it represents the global scope
    in JavaScript. A function execution context is created whenever a function is called, 
    representing the function's local scope.


*/

/*
    What is execution context and execution stack in JavaScript?
The Execution Context is an abstract environment created by JS to execute code.
The Execution Stack is used to execute functions and keep track of all the Execution Context
 created. The Execution context is created in two stages, the creation and the execution stage


*/
