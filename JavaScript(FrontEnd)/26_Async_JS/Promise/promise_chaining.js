// Promise.resolve
// Promise Chaining

/*
const myPromise = Promise.resolve(5);

myPromise
.then((value)=>{console.log(value);})

// then Method ---> always Consumes Promise --> and Returns the Promise .


*/


function myPromise(){
    
    return new Promise ((resolve,reject)=>{
        resolve("foo");
    })
}

myPromise()
.then((value)=>{
    console.log(value);
    value += "bar";
     return value;  // Returning ---> Promise and Not value
    // Internally working as in ---> return Promise.resolve(value);
    // return Promise.resolve(value);

    // In Case we didnt use return type here 
    // Lets comment return type
    // return undefined; //  will occur by default;
    // Internally working as in ---> return Promise.resolve(undefined);
    // return Promise.resolve(undefined);
})
.then((value)=>{
    console.log(value);
    value +="baaz";
    return value;

})
.then(value=>{
    console.log(value);
})

// This Above Concept is Promise Chaining . 