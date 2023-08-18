// function inside Function

const app=()=>{

    const function1=()=>{
       console.log("function inside Function");
    }
    const function2=(num1,num2)=>{
         return num1*num2;
    }
    const sqr= n=>{ return n*n };

    console.log("MyAppFunction");

    function1();
   console.log(function2(7,5));
   console.log(sqr(7));
}


app();