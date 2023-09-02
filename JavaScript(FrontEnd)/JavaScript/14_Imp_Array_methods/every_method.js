// ##################### Every Method #####################

/*
   The every() method is an iterative method. It calls a provided 
callbackFn function once for each element in an array, until the 
callbackFn returns a falsy value. If such an element is found, 
every() immediately returns false and stops iterating through the
 array.

*/
const numbers = [2,4,6,8,10];

const ans = numbers.every((number)=>{
    return number % 2 ===0;
})

/// Callback function ---> true / false is returned (boolean).
// Every method ---> true /  false (boolean).

console.log(ans);


//-----------------------------------------------------------------------

// Real world example of Every 


const userCart = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]

const giveDiscount = userCart.every((product)=>{
    return product.price<=35000;
})

console.log(giveDiscount);

// ------------------------------------------------------------------------------

