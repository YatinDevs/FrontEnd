// This Keyword in Events:
/*
const btn = document.querySelector(".btn-headline");
function clickMe(){
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 }

btn.addEventListener("click",clickMe);
*/
// Value of this is Button itself in case of
// function declaration

const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",function(){
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 });
 
// Value of this is Button itself in case of
// call back function declaration

// const btn = document.querySelector(".btn-headline");

btn.addEventListener("click",()=>{
    console.log("You clicked me!!!");
    console.log("value of this");
    console.log(this);

 });
 
// Value of this is Button itself in case of
// call back function declaration
