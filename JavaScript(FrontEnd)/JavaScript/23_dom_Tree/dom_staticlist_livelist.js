
// Static list Vs Live list


// QuerySelectorAll gives static list 
/*
const listItems = document.querySelectorAll(".todo-list li");
console.log(listItems);

const sixthli = document.createElement("li");
sixthli.textContent = "item6";
console.log(listItems);

const ul = document.querySelector(".todo-list");
ul.append(sixthli);

console.log(listItems);
*/

// getElementbySomething gives live list 

const ul = document.querySelector(".todo-list");

const liItems = ul.getElementsByTagName("li");
console.log(liItems);


const sixthli = document.createElement("li");
sixthli.textContent = "item6";
ul.append(sixthli);

console.log(liItems);
