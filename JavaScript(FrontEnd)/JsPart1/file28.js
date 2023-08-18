// find method

const myArray=["Hello","cats","dog","lion"];

function  isLength3(string){
    return string.length===3;
}

const ans= myArray.find(isLength3);
console.log(ans);

const users=[
    {userId:1,userName:"yatin"},
    {userId:2,userName:"aniket"},
    {userId:3,userName:"sanket"},
    {userId:4,userName:"Siddhi"},
    {userId:5,userName:"Pinky"},
];

const myUser=users.find((user)=>user.userId===3);
console.log(myUser);
// every

const numbers=[2,4,9,10];
// callback function --> true/false (boolean)
// every Method ---> true/false (boolean)
const result = numbers.every((number)=> number%2===0);
console.log(result);



const products=[
    {productId : 1,
        productName:"Mobile",
        price:12000},

        {productId : 2,
            productName:"Tv",
            price:24000},
        
            {productId : 3,
                productName:"Laptop",
                price:45000},

                {productId : 4,
                    productName:"Mobile",
                    price:52000},
                    {productId : 5,
                        productName:"Tv",
                        price:34000},
                    
                        {productId : 6,
                            productName:"Laptop",
                            price:5000},
]

const result1=products.every((cartItem)=>cartItem.price<1000000);

console.log(result1);


// some  Method

const num=[3,7,9];


const ansm=num.some((number)=>number%2==0);
console.log(ansm);



const cartItem=[
    {productId : 1,
        productName:"Mobile",
        price:12000},

        {productId : 2,
            productName:"Tv",
            price:24000},
        
            {productId : 3,
                productName:"Laptop",
                price:45000},

                {productId : 4,
                    productName:"Mobile",
                    price:52000},
                    {productId : 5,
                        productName:"Tv",
                        price:34000},
                    
                        {productId : 6,
                            productName:"Laptop",
                            price:15000},
]


const anscart=cartItem.some((cartItem1)=>cartItem1.price>100000);
console.log(anscart);


// fill
// value,start,end

// splice