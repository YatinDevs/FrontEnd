
/*
   There is Performance Issuses in Case of InnerHTML :
   1. There was previous todo before adding new 
   whenever you add new one with this method 
   it render previous one as well So may cause peformance.


   Use Only in Case of Changing Inner Data of Html like
   Data manipulation and Editing Dont Use for adding .

   So what is Solution for adding New Elements :
   1. document.createElement() -> method
   2. append method
   3. prepend method
   4. remove method
   5. before method
   6. after method
 
*/

/*
// Case 1: This is Long Way :

// With Help of createElement Method new li created.
const newTodoItem = document.createElement("li");
// console.log(newTodoItem);

// Here New TextNode Created added data and appended with li.
const newTodoItemText = document.createTextNode("Teach Students");
newTodoItem.before(newTodoItemText);
console.log(newTodoItem);

// So Now li new Element is created we need to add it to
// Existing ul list
// fetching the ul todolist:
const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem);
// appending to ul list the new element we created
console.log(newTodoItem);

*/

/*
// Case 2: there is No Need to create new textNode
// we have short solution for it .
const newTodoItem = document.createElement("li");
newTodoItem.textContent = "New Students";

const todolist = document.querySelector(".todo-list");
todolist.append(newTodoItem);
console.log(newTodoItem);


// Here we can use append as well as appendChild
// append is latest where as appendChild is older version
// append doesnt work on internet Explorer.


// Append :- Adds New Element at last . 
// Prepend:- Adds New Element at Start .
*/



// Case 3 : In Case you want to Remove any Element
// Remove Existing Element :

// Selecting what to Remove :
// const todo1 = document.querySelector(".todo-list li");
// console.log(todo1);
// todo1.remove();

//--------------------------------------------------------

// Before 
/*
const newTodoItem = document.createElement("li");
newTodoItem.textContent= "Teach Students";
const todolist = document.querySelector(".todo-list");

todolist.before(newTodoItem);
*/
// after
/*
const newTodoItem = document.createElement("li");
newTodoItem.textContent= "Teach Students";
const todolist = document.querySelector(".todo-list");

todolist.after(newTodoItem);
*/