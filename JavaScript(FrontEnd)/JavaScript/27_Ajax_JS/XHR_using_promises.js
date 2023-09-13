// XHR using Promises.
// XMLHttprequest 

// URL
const URL ="https://jsonplaceholder.typicode.com/posts";



function sendRequest(method,url){

    return new Promise (function (resolve,reject){

        const xhr = new XMLHttpRequest();
        xhr.open(method,url);
        xhr.onload = function () {

          if(xhr.status >= 200 && xhr.status <300){

             resolve(xhr.response);

          }
          else{
  
              reject(new Error("Something Went Wrong!!"));

          }
        }

        xhr.onerror = function(){
            reject(new Error("Server Side Error or Network Down"));
        }

        xhr.send();
  

         });
}

// Created Promise
// const data = sendRequest("GET",URL);
// console.log(data);

// Consuming 
sendRequest("GET", URL)
.then((response)=>{

    const data = JSON.parse(response);
    // console.log(data);
    return data;
})
.then(data=>{
    console.log(data);
    const id = data[4].id;
    return id;
})
.then(id=>{
    console.log(id);
    const url = `${URL}/${id}`;
    console.log(url);
    return sendRequest("GET",url);
})
.then(newreponse=>{
    const newData = JSON.parse(newreponse);
    console.log(newData);
})
.catch(error=>{
    console.log(error);
})