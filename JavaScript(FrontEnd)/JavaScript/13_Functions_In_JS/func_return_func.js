// function returning function

function myfunc(){
    // return "a";
    // return 54;
    // return [1,3,45,5,6,6];
    // return {name:"yatin"};
  //declaration of function
    function hello(){
        return "hello world";
    }


    // function returning function
    return hello;
}

const ans = myfunc();
// console.log(ans);

// calling the function returned function
// ans();
console.log(ans());


// Higher Order Functions 

// Call back
// or function returning funcn
// or doing both