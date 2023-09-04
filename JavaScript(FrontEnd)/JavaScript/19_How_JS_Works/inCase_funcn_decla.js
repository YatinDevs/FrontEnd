// What Happens to Function Declaration??



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
console.log(this);
console.log(window);
console.log(myfunction);
console.log(full_name);

// Lexically (function is inside Global Scope)
function myfunction(){
    console.log("this. is my Function!!");
}

var first_name = "Yatin";
var last_name = "Chaudhari";
var full_name = first_name + "  " + last_name;
console.log(full_name);

// Code Flow : Analysing Code 

// 1 Compilation Phase 

// In Global Scope we Have:
/*
    1. first_name
    2. last_name
    3. full_name
    4. myfunction()

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
 
                                                    1. first_name :undefined
                                                    2. last_name :undefined
                                                    3. full_name : undefined
                                                    4. myfunction(): (function)->

    Code Execution Phase :                                   console:

1.console.log(this);                                        window object printed
2.console.log(window);                                      window object printed
3.console.log(myfunction); (will check in Global memory)   ( it is stored as function)
                                                           so that function is printed.
4.console.log(full_name);  (will check in Global memory)   (it is undefined)
                                                            so undefined printed

5. function myfunction(){                              
    console.log("this. is my Function!!");                 (nothing here as it is 
                                                          present in Global memory.)
}

6.var first_name = "Yatin";                               (setting in Global Memory)
7.var last_name = "Chaudhari";                            (setting in Global Memory)
8.var full_name = first_name + "  " + last_name;          (setting in Global Memory)
9.console.log(full_name);                                  Yatin Chaudhari. (printed)

                                                   (After Code Execution)
                                                    In Global Memory :
                                                    (Even Before GEC created)
                                                    Window Object (present )

                                                    (after GEC value is set
                                                        this binded with window
                                                        object here.)
                                                    this : window{}
 
                                                    1. first_name : Yatin
                                                    2. last_name : Chaudhari
                                                    3. full_name : Yatin + " " + Chaudhari.
                                                    4. myfunction(): (function)->

                                                    

*/




// 2 Code Execution Phase

