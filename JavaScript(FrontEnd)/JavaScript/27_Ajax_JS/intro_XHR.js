// XHR ---> XML Http Request


const url = "https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();

// we will get XHR object --> contains properties.
//  console.log(xhr);
//  contains properties.

/*
 // step 1:
 console.log(xhr.readyState);
 xhr.open("GET",url);
 console.log(xhr.readyState);

 xhr.onreadystatechange = function(){
    console.log(xhr.readyState);
 }

 xhr.send();    

*/

// onreadystatechange will run only when readystate will change ---> 3 and 4

//  xhr.onreadystatechange = function(){
//     if(xhr.readyState===3){

//          console.log(xhr);
//         //  console.log(xhr.response);
//          console.log(typeof xhr.response); // string
//          // We get response in json 
//          // we need to convert in js object

//     }
//     if(xhr.readyState===4){

//         console.log(xhr);
//         // console.log(xhr.response);
//         console.log(typeof xhr.response); // string
//         // We get response in json 
//         // we need to convert in js object
//         const response = xhr.response;
//         const  data = JSON.parse(response);
//         console.log(typeof data);
//         console.log(data);

//    }
//  }


// ==================================================================================
/*
// onload will run only when readystate ---> 4
xhr.onload = function(){
    console.log(xhr.readyState);
    // converting xhr Response --> from JSON to JS object
    const response = xhr.response;
    const data = JSON.parse(response);
    console.log(data);
}
*/
// xhr.send();


 // XHR ready State --> phases.
 /* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState */

 // HTTP response status code :
 /* https://developer.mozilla.org/en-US/docs/Web/HTTP/Status */