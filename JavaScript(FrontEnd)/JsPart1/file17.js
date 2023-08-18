// Block Scope Vs Function Scope

// let and Const are Block Scope
// Var is Function Scope

/*
{
       const x=10;
    // let x=10;
}
console.log(x); //Gives  Error --> let and Const are Block Scope
// Reference Error --> x is not defined
*/

/*
{
    let y=10;
    const x=10;
    console.log(x,y);
}

{
    const name="Yatin";
    console.log(name);

}

{
    const name="Mohit";
    console.log(name);
    
}
const name="Siddesh";
console.log(name);
*/

// Var is Function Scope
/*
{
    var name="Yatin";
    console.log(name);

}

{
    // var name="Mohit";
    console.log(name);
    
}
// var name="Siddesh";
console.log(name);
*/

// let first_name="abc";
function myApp(){

    if(true){
  //  var first_name ="Yatin";
    let first_name ="Yatin";
    console.log(first_name);
    }
    console.log(first_name);
}

myApp();