// sort Method

const numbers=[5,-9,1200,400,3000];
// a= 5  b= 4
//  
numbers.sort((a,b)=>a-b); // ascending sorting a-b    // descending order  b-a
console.log(numbers);

// Ascii Values Compared Here

/*
    '0'   : 48
    1:49
    2:50
    3:51
    4:52
    5:53
    6:54
    7:55
    8:56
    9:57
*/
// in Case of Numbers Sorting Asccii compared so issue is there 49 to 57
// in case of Alphabet 97 to  122
// in case of Capital alphabets 65 to 90

const userNames = ['Yatin','Siddesh','Aditya','Shivani'];
userNames.sort();
console.log(userNames);

// Price lowto high     highto Low

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

//low To High

const lowtoHigh=products.slice(0).sort((a,b)=>{
    return a.price-b.price;
});

console.log(lowtoHigh);

// Highto Low

const HightoLow=products.slice(0).sort((a,b)=>{
    return b.price-a.price;
});

console.log(HightoLow);