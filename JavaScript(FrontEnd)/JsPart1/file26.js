// reduce Method
const numbers =[1,2,3,4,5];

// Aim: SUm of All numbers in Array
const sum =numbers.reduce((accumulator,currentValue)=>{
    return accumulator+currentValue;
},100);

console.log(sum);

// accumulator ,currentvalue  ,  return 
//    1        ,   2          ,     3
//    3        ,   3          ,     6
//    6        ,   4          ,     10
//    10       ,   5          ,     15

// Realife Senario

const userCart = [
    {productId : 1,
    productName:"Mobile",
    price:12000},
    {productId : 2,
        productName:"Tv",
        price:24000},
    
        {productId : 3,
            productName:"Laptop",
            price:45000},
        
]

const totalAmount=userCart.reduce((totalPrice,currentProductPrice)=>{

    return totalPrice+currentProductPrice.price;
},0);

console.log(totalAmount);

// totalPrice     current Value            return
  
 //    0              {}.price=12000        12000
 //   12000           {}.price=24000        36000
 //   34000           {}.price=45000        