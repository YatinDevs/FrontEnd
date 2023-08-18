/*
// Select Element Using get Element by Id:
//console.log(document.getElementById("main-heading"));
//console.dir(document.getElementById("main-heading"));
const mainHeading=document.getElementById("main-heading");
console.log(mainHeading);
*/

// Select Element using Query Selector

// for id we use #
const mainHeading=document.querySelector("#main-heading");
console.log(mainHeading);

const header=document.querySelector(".header");
console.log(header);

const navitem=document.querySelector(".nav-item");
console.log(navitem);

const navitem1=document.querySelectorAll(".nav-item");
console.log(navitem1);