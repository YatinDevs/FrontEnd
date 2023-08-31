// and  or operators



let firstname = "Harshit";
let age = 22;


// Conditions checked but separately
// if(firstname[0]=== "H"){
//     console.log("Name starts with H");
// }

// if(age>18){
//     console.log("you are above 18");
// }



// Conditions checked but Both at once


// Both a or b condition should be true 
// to get if condition
// or else will run
if(firstname[0]=== "H" && age>18){
     console.log("Name starts with H and above 18");
}else{
    console.log("not qualified");
}


// Atleast a or b condition should be true 
// atleast 1 should be true to get if condition
// or else will run
if(firstname[0]=== "H" || age>18){
    console.log("Name starts with H and above 18");
}else{
   console.log("not qualified");
}