// Promise :
// Promise Feature of Browser not JS.
/*

  A JavaScript Promise object can be:

1. Pending
2. Fulfilled
3. Rejected

- The Promise object supports two properties: state and result.
- While a Promise object is "pending" (working), the result is undefined.
- When a Promise object is "fulfilled", the result is a value.
- When a Promise object is "rejected", the result is an error object.

// ---------------------------------------------------------------------
Create:
- You cannot access the Promise properties state and result.
- You must use a Promise method to handle promises.

Consume :
- Promise.then() takes two arguments, a callback for success and another for failure.
- Both are optional, so you can add a callback for success or failure only.
*/

// const bucket = ['coffee','chips','vegetables','salt','rice'];


// create Promise -> class or constructor function 
// Promise(()=>{}) --> we pass Executor functions inside Promise --> executes Promise.

// Promise((resolve,reject)) --> Pass Two Parameters--> which will be functions.

// We Produced Promise here :
/*
const friedRicePromise  =new Promise((resolve,reject)=>{
     if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
        // resolve("Fried Rice"); // can take any value string , array,object
        resolve({value:"Fried Rice"}); // can take any value string , array,object

     }else{
        // reject("Couldnt Achieve Target!");
        reject(new Error ("something missing in bucket")); // Error Object
     }
});
*/

/*
// Consume Promise
// How to Consume Promise :

// friedRicePromise.then(()=>{}) // then method --> as input takes call back
// Resolved Value will come inside call back parameter

// then(resolved,rejected) ---> takes two callback function
// One for resolved ---> returns resolved output
// one for rejected ---> returns rejected values
friedRicePromise.then((myfriedrice)=>{
    console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
},(error)=>{
    console.log(error);
}) // then method --> as input takes call back

*/

// ---------------------------------------------------------------------------------------------------
// catch

// const bucket = ['coffee','chips','vegetables','salts','rice'];

/*
  What is catch in JavaScript?
The catch statement allows you to define a block of code to be executed, 
if an error occurs in the try block. The JavaScript statements try and catch 
come in pairs: try { Block of code to try. }

*/
/*

const friedRicePromise  =new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
       // resolve("Fried Rice"); // can take any value string , array,object
       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       // reject("Couldnt Achieve Target!");
       reject(new Error ("something missing in bucket")); // Error Object
    }
});


friedRicePromise.then(
    (myfriedrice)=>{
    // console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
    }
).catch((error)=>{
    console.log(error);
})

*/

// ---------------------------------------------------------------------------------------------------

// code flow
// On paper :
// 1. will run on console
console.log("Script Start");

// 2. will be stored in  memory 
const bucket = ['coffee','chips','vegetables','salt','rice'];

// 3. Promise is Object only will be stored in memory
const friedRicePromise  =new Promise((resolve,reject)=>{
    if(bucket.includes('vegetables') && bucket.includes('rice') && bucket.includes('salt')){
       // resolve("Fried Rice"); // can take any value string , array,object
       resolve({value:"Fried Rice"}); // can take any value string , array,object

    }else{
       // reject("Couldnt Achieve Target!");
       reject(new Error ("something missing in bucket")); // Error Object
    }
});

// 4. consumption will be done by browser of this then
friedRicePromise.then(
    (myfriedrice)=>{
    // console.log(`lets Eat my ${myfriedrice}`,);
    console.log(`lets Eat my `,myfriedrice);
    }
).catch((error)=>{
    console.log(error);
})

// Then goes to Microtask Queue


setTimeout(()=>{
    console.log("execution of Set Timeout.");
},0);

// 5. js will come here to execute async manner
for(let i = 0;i<=100;i++){
    console.log(Math.random(),i);
}

// 6. last line of code
console.log("Script End");

/* 

https://www.geeksforgeeks.org/what-is-the-difference-between-microtask-queue-and-callback-queue-in-asynchronous-javascript/

*/