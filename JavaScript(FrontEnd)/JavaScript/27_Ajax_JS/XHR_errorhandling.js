/* https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState*/


// XHR --> XMLHttpRequest --> using Callback function --> error handling .

/*

// url --> to fetch and send
const URL ="https://jsonplaceholder.typicode.com/posts/2";

const xhr = new XMLHttpRequest();
// XHR Object 
// console.log(xhr); 

// console.log(xhr.readyState);
xhr.open("GET", URL);

// when ready state is 4 --> do inside function tasK
xhr.onload = () =>{

  if(xhr.status>=200 && xhr.status <300){
    const data = JSON.parse(xhr.response);
    console.log(data); 
  }else{
    console.log("something went wrong!!");
  }

}

// to handle network related error or we couldnt reach to server
// like network or server issue
xhr.onerror = () =>{
    console.log("network error!");
}
xhr.send();

*/
// ---------------------------------------------------------------------------------------------------

// Case 2:

// url --> to fetch and send
const URL ="https://jsonplaceholder.typicode.com/posts";

const xhr = new XMLHttpRequest();
// XHR Object 
// console.log(xhr); 

// console.log(xhr.readyState);
xhr.open("GET", URL);

// when ready state is 4 --> do inside function tasK
xhr.onload = () =>{

  if(xhr.status>=200 && xhr.status <300){
    const data = JSON.parse(xhr.response);
    console.log(data); 
    const id = data[3].id;
    // console.log(id);

    const xhr2 = new XMLHttpRequest();
    const URL2 = `${URL}/${id}`;
    console.log(URL2);

    xhr2.open("GET", URL2);

    xhr2.onload = () =>{
        const data2 = JSON.parse(xhr2.response);
        console.log(data2);
    }

    xhr2.send();

  }else{
    console.log("something went wrong!!");
  }

}

// to handle network related error or we couldnt reach to server
// like network or server issue
xhr.onerror = () =>{
    console.log("network error!");
}
xhr.send();


/* What is called callback?
A callback is a function passed as an argument to another function. 
This technique allows a function to call another function. 
A callback function can run after another function has finished.
*/
