var a="Hello Guys";

function first(){
    var b= "how are you?";
    second();
    function second(){
        var c="Myself abc";
        console.log(a+b+c);
        three();
    }
}

    function three (){
        var d= "abafdsfa";
        console.log(a+b+c+d);
    }


first();

