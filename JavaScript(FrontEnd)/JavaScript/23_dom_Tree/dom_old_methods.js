// Some Old Methods to Support Poor Internet Explorer :

// 1.appendChild Method
// 2.insertBefore
// 3.replaceChild
// 4.removeChild

/*
 // 1. appendChild Method 

const ul = document.querySelector(".todo-list");
// new Element
const li = document.createElement("li");
li.textContent = "new todo";
ul.appendChild(li);
*/

/*

  // 2. insertBefore Method 

const ul = document.querySelector(".todo-list");
// new Element
const li = document.createElement("li");
const referenceNode = document.querySelector(".todo-list > li");
li.textContent = "new todo";
//  syntax :
// tomakechangesin.insertbefore(what to insert,before whom);
ul.insertBefore(li,referenceNode);

*/

/*
   //3. replaceChild Method

const ul = document.querySelector(".todo-list");
// new Element
const li = document.createElement("li");
li.textContent = "new todo";

const referenceNode = document.querySelector(".todo-list > li");

ul.replaceChild(li,referenceNode);

*/

/*

// 4. removeChild
const ul = document.querySelector(".todo-list");
const li = document.querySelector(".first-todo");
ul.removeChild(li);

*/