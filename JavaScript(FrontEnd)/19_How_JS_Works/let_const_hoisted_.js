// What Happens to Function Expression??



// Lexical Scope Language ---> JavaScript .
/*
   Notes : 
   Scope Chain is used to resolve the value of variable names in Js.
   Scope Chain in Js is Lexically Defined, 
   which means that we can  see what the scope chain will be by looking at the code.

   At the top of scope chain we have Global Scope,which is window Object{}
   in case of Browser


   Lexical Scoping : A function that is Lexically within another function gets 
   access to the scope of the outer function
   (Inner function can get Access to their Parent function variables But the vice 
    versa is not true.)
*/

/*
    Execution Stack also Known as Calling Stack is a Stack with a LIFO structure,
    which is used to store all the Execution Context created during Code
    EXecution.

*/
// Global Scope (Outer Scope)

console.log(myfunction);


// Lexically (function is inside Global Scope)
var myfunction = function(){           // Anonoymous Function Expression
    console.log("this. is my Function!!");
}
console.log(myfunction);


// Code Flow : Analysing Code 

// 1 Compilation Phase 

// In Global Scope we Have:
/*
 
    1. myfunction()

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
 
                                                  // will be treated as variable
                                                    1. myfunction(): undefined
                                                    //(its stored as var and 
                                                    function Expression is used.
                                                    not function declaration.)

  2//  Code Execution Phase :                                   console:


1. console.log(myfunction);                            undefined printed .


2. var myfunction = function(){                       changes in Global Memory
        console.log("this. is my Function!!");
 }

3. console.log(myfunction);                           Full function will be Printed
                                                   ƒ (){          
                                                   console.log("this. is my Function!!");
                                                   }

                                                   (After Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
 
                                                   
                                                    1. myfunction(): (function)->


    Global Execution Context is Popped after completion of Code Execution .

                                                    

*/





