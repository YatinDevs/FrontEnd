// ################ Function Inside Function ######################

const app = () => {

    // declaring function inside function
     const myfunction = () =>{
        console.log("Inside myFunction");
     }
         
     // declaring function inside function
     const addition = (num1,num2) =>{
        return num1+num2;
     }

     // declaring function inside function
     const multiply = (num1,num2) => num1*num2; 
    
     // actions of Main Function:
    console.log("inside app");
    // Calling Inside Function
    myfunction();
    // Calling Inside Function
    console.log(addition(5,3));
    // Calling Inside Function
    console.log(multiply(5,3));

}

app(); // Main function is called
