// Lexical Scope
   
const myVariable="Value1";

function myApp(){
    
    //const myVariable="Value1";

    const myFunction1=()=>{
          //  const myVariable="Value2";
          const myFunction2=()=>{
          console.log("inside Myfunction1",myVariable);
          }
          
          myFunction2();
    }




    console.log(myVariable);
    myFunction1();
}

myApp();