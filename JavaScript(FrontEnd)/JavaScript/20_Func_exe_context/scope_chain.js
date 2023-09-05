
// Scope Chain
// Lexically Scoped
const last_name = "Chaudhari";
const printName = function (){
    const first_name = "Yatin";
    
    function myfunction(){
    console.log(first_name);
    console.log(last_name);
    }
    myfunction();
}

printName();

/*
   What is scope and scope chaining in JavaScript?

  It is the process in which, JavaScript engine searches for the value of the variables in the
  scope of the functions. However, the search is in a lexical manner. First of all the engine
  looks out in the current scope of the current function. If not found, it finds it in the parent 
  function.

*/