// fetch API 

/*
const URL ="https://jsonplaceholder.typicode.com/postss";


const promise = fetch(URL); // --> returns PRomise

// console.log(promise);


// Promise ---> after Resolve --> giving response
promise.then(response=>{
    console.log(response);
     // Response here can be fetched using json method --> parsing the response
    const data = response.json();
    // gives Promise
    // console.log(data);

    return data;

}).then(data =>{
    // this promise gives data after resolve
    console.log(data);
})
.catch(error=>{
    console.log("inside catch block");
    console.log(error);
})
*/

// here You can see when theres 404 error 
// fetch doesnt stop and catch block doesnt work
// response is still given inside then --> so we can handle Error in fetch like :
// below code :
//_------------------------------------------------------------------------------------
/*
const URL ="https://jsonplaceholder.typicode.com/posts";
// const URL ="https://jsonplaceholder.typicode.com/postss";

const promise = fetch(URL);

promise.then((response)=>{
    console.log("inside then")
    console.log(response);
   
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something Went Wrong!!");
    }
   
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("inside catch block");
    console.error(error);
})

*/

/* 
  more about it :
  https://jsonplaceholder.typicode.com/guide/

*/

// =========================================================================================

const URL ="https://jsonplaceholder.typicode.com/posts";
// const URL ="https://jsonplaceholder.typicode.com/postss";

const promise = fetch(URL,{
    method: 'POST',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
});

promise.then((response)=>{
    console.log("inside then")
    console.log(response);
   
    if(response.ok){
        return response.json();
    }else{
        throw new Error("Something Went Wrong!!");
    }
   
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log("inside catch block");
    console.error(error);
})
