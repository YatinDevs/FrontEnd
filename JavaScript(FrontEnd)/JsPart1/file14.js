// hoisting

hello();

function hello(){
    console.log("Hello World");
}

// In Case of Function Declaration
// Even if We Call function Before Declaration 
// and Initialization it will Run 
// But in Case of 
// Function Expression and Arrow Function 
// We get Error (Cannot Access Before Initialization).

// hello1();
const hello1 =()=>{
    console.log("Hello world");
}
hello1();