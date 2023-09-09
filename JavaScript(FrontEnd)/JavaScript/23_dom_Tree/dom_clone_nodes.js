// Clone Nodes :

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");
li.textContent = "new Todo1";

ul.append(li);
// ul.prepend(li);
//One work will be done at time
// append or prepend we need to clone to do both at once

// const li2 = li.cloneNode();
// Only li is clone not its child and innerHTML
// for it we need to :
const li2 = li.cloneNode(true); 
// deep cloning 
// now inner html and its child content will also be there:

console.log(li2);
ul.prepend(li2);
