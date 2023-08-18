const object1={
    name:"Yatin Chaudhari",
    qualif:"B.E",
    sum:function(){ // Method  -->
        var add = 2 + 2;
        console.log(add);
        console.log(this);// Here this is Inside Method
        // here it will refer to its own object.

        function child(){ // Regular Function
            var name="Sanket";
            console.log(name);
            console.log(this);// global Object will be referred 
            // window {}
        }

        child();
    }
}

object1.sum();