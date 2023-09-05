function hello(x){
    const a = "varA";
    const b = "varB";

    return function(){
        console.log(a,b,x);
    }
}

const ans = hello("arg");
ans();

/* 

       A closure is a function having access to the parent scope, 
      even after the parent function has closed.

 */