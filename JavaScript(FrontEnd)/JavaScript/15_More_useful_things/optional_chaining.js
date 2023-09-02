// ## Optional Chaining :


/*
     What is optional chaining in JavaScript?
  Optional chaining (?.) The optional chaining ( ?. ) operator accesses an object's
 property or calls a function. If the object accessed or function called using this
  operator is undefined or null , the expression short circuits and evaluates to 
  undefined instead of throwing an error.


*/

/*
    Is it good to use optional chaining in JavaScript?
  We can use Javascript Optional Chaining in case of function calls as well.
 This is useful in cases when some method of an API that we are using is unavailable. 
 Instead of throwing an error, Javascript will return undefined if Optional Chaining 
 is used.
 


*/
/*
const user = {
    firstName : "Yatin",
    address : {houseNumber : '12345'}    
}

console.log(user.firstName);
console.log(user.address);
// address is object
console.log(user.address.houseNumber);
//getting inside object value
*/
// -----------------------------------------------


const user = {
    firstName : "Yatin",
    // lets comment below pair ans see output
    // address : {houseNumber : '12345'}    
}

console.log(user?.firstName);
console.log(user?.address);// undefined 
// address is object
console.log(user?.address?.houseNumber);
//Error : cannot read properties of undefined

// we dont want this error we are ok with undefined