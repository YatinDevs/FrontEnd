// function returning function

function myfunction(){

    function hello(){
        return "hello world";
    }

    return hello;
    // or

    /*
    
     return hello(){
        return "hello world";
    }
    */
}

const ans=myfunction();
console.log(ans());