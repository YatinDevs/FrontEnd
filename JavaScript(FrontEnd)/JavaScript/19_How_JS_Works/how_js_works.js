
//  ## How Java Script Works ?? ##

// console.log(this);
// console.log(window);
// console.log(firstName);
// var firstName = 'Yatin';



// Before Even Executing First Line of Above Code our code is First Compiled
// Why is it Compiled ?
// 1. Early Error Checking.
// 2. Determining Appropriate Scope for Variable.


// 1]}} ## Compilation Phase : ## 
// 1. Tokenizing / Lexing .
// 2. Parsing - AST .
// 3. Code Generation - Executable .

// Here we got outcome from above code is :

// variable is present firstName ---> Belonging to Global Scope . 
// During Compilation Phase firstName variable is Not Created
// We Just get to Know it exists and is in Global Scope variable.


// 2]}} ## Now Code Execution Phase: ## 

// -- In JavaScript code Executes inside Execution context .
// -- To Execute Any Code Execution Context is Must.

// -- When we create First Execution Context is called 
// -- Global Execution context .

//////////////////////////////////////////////////////////////////////////////////////

//  ## ## ## Now Lets Analyse Below Code //
/*
console.log(this);
console.log(window);
console.log(firstName);
var firstName = 'Yatin';
/*

// first thing will happen is even before executing first line of code is:
// 1. Global Execution Context will be created :
//      -- a) Creation Phase -->
//      -- b) Code Execution Phase -->    


/*
  this value in Global Scope : Window {} --> window object.




   Ecma Script Official :

   Every Function and constructor call Enters a new EXecution Context,
   even if a function is calling itself recursively.
   Every return exits an Execution Context.
   A Throw Exception if not caught may also exit one or more execution contexts.

   ##]]
  --> When Control Enters an Execution Context :
  - The Scope chain is created and initialised,
  -  variable instantiation is performed.
  - the this value is determined.

  -- > JavaScript is a Synchronous Programming Language.
  -- > JavaScript is Single Threaded.
  //( Asynchronous is provided by Browser)


  2. Code Execution Phase                      1. Creation PHase
                                            ..(Consider :Global Memory)


*/

console.log(this);  // window Object
console.log(window);  // Window Object
console.log(firstName); // undefined
var firstName = 'Yatin'; 
console.log(firstName); // Yatin

/*
  Flow of Above Code :

  1. Compilation Phase :
   lexing / tokenizing code and line by line checked syntax
   parsing ---> arranging --> Abstract syntax Tree 
   code generated ---> executable

   // Global Execution Phase
   -- Early Error Checking Done
   -- Scope of Variable Determined Done

   2. Execution Phase :

  line1: this -> window object --> provided by browser --> global object in case browser
  line2: window -> return 
  line3: firstname : Undefined set during // Global Execution Phase
  line4: firstname : Yatin; assigned new value
  line5: yatin return


*/

/*
   Important!!!!!!!!! Notes :
   To Run JS ---> we Need Enviornment 
   Execution Context:
   The Enviornment in which our code is Executed and is Evaluated .

   JS Engine ---> Creates Global Execution Context(by Default) -->
   {Even Before the Code start to execute }

   Variable and function that is not inside any function  A new Execution Context
   gets created every time a function is created.

   Global Execution Context is Just like any other Execution Context ,
   Except that it gets created by Default. It is Associated with global Object
   i.e. Window Object {}


   Whenever a Function is Called a NEw Execution Context is cReated for that
   function.

   Read : Newton School Dairy Of Notes:
 
*/