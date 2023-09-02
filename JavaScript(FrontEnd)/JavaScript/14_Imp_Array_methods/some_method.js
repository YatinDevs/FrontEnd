// ######################## some method ####################### //

/* 
What does some () do in JavaScript?
The some() method of Array instances tests whether at least one 
element in the array passes the test implemented by the provided
 function. It returns true if, in the array, it finds an element 
 for which the provided function returns true; otherwise it returns
  false. It doesn't modify the array.

*/

const numbers = [3,5,8,9];

const ans = numbers.some((number)=>{

    return number % 2==0;
});

console.log(ans);

//-----------------------------------------------------------------------

// Real world example of Every 


const userCart = [
    {product_Id : 1,product_Name : "mobile", price : 12000},
    {product_Id : 2,product_Name : "TV", price : 22000},
    {product_Id : 3,product_Name : "Laptop", price : 35000},
    {product_Id : 4,product_Name : "charger", price : 1000},

]

const giveDiscount = userCart.some((product)=>{
    return product.price>30000;
})

console.log(giveDiscount);