// Promise Created
// Consuming Promise Using Async Await :
console.log("Script Start");

const URL ="https://jsonplaceholder.typicode.com/posts";

// Get Request :

// const promise = fetch(URL);


// Consuming promise with then
// promise.then(res=>res.json()).then(data=>console.log(data));


/*
  The await operator is used to wait for a Promise and get its fulfillment value.
   It can only be used inside an async function or at the top level of a module.

*/

// Async Function --> return type -->> will always return Promise\
// can use arrow function in it too
/*
async function getPosts(){
  const response = await fetch(URL);
  if(!response.ok){
    throw new Error("Something went Wrong!");
  }
  const data =  await response.json();
  return data;
}
*/

 const getPosts = async()=>{
    const response = await fetch(URL);
    if(!response.ok){
      throw new Error("Something went Wrong!");
    }
    const data =  await response.json();
    return data;
  }

getPosts()
.then(data =>{console.log(data)})
.catch(error=>{console.error(error);})

console.log("Script End");
