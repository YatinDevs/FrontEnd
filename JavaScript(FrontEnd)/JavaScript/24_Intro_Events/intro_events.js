// Intro To Events :

// Google --> mdn Event Reference

// 1 .Click Events 

// There are three ways to add Events :

/*  1] first directly in HTML in btn-headline class 

 <!-- Old ways <button class="btn btn-headline" 
 onclick="console.log('You Clicked me')">Learn More
 </button> -->

*/
/*
// 2] second Way .


// 1) Selecting Button:
const btn = document.querySelector(".btn-headline");
console.log(btn); // html representation.
console.dir(btn); // Object Representation .

// 2) using Onclick property.
 
 btn.onclick = function(){
    console.log("You Clicked Me!!");
 }

 */


//=-------------------------------------------------------------

 /*
    3] Third Way
 
 
//The addEventListener() method attaches an event handler to a document.
 // document.addEventListener(event, function, Capture) --> syntax
 You can add many event listeners to the document:

document.addEventListener("click", myFunction1);
document.addEventListener("click", myFunction2);
document.addEventListener("mouseover", myFunction);
document.addEventListener("click", someOtherFunction);
document.addEventListener("mouseout", someOtherFunction);
   
 // addEventListener --> Method
 const btn = document.querySelector(".btn-headline");
 function clickMe(){
    console.log("You Clicked Me!!");
 }

 // btn.addEventlistener("Takes Event",
 // function which will occur on click)
 btn.addEventListener("click",clickMe);

*/
//=-------------------------------------------------------------
const btn = document.querySelector(".btn-headline");

//  btn.addEventListener("click",function(){
//     console.log("You Clicked Me!!");
//  });

 btn.addEventListener("click",()=>{
    console.log("You Clicked Me!!");
 });