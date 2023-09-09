// Add New HTML Element to Web Page With JS :

// innerHTML to add html ELEMENT :

// const todolist = document.querySelector(".todo-list");
// console.log(todolist);
// console.log(todolist.innerHTML);

// Make Changes in it :
// todolist.innerHTML = " <li>New Todo Task </li>";

// To add New ELement with  Existings Ones:

// todolist.innerHTML += "<li>adding New Todo with Existing</li>";
// todolist.innerHTML += "<li>adding One More</li>";

/*
   There is Performance Issuses in Case of InnerHTML :
   1. There was previous todo before adding new 
   whenever you add new one with this method 
   it render previous one as well So may cause peformance.


   Use Only in Case of Changing Inner Data of Html like
   Data manipulation and Editing Dont Use for adding .

   So what is Solution for adding New Elements :
   1. document.createElement()
   2. append
   3. prepend
   4. remove
 
*/

const newTodoItem = document.createElement("li");
const newTodoItemText = document.createTextNode("Teach Students");
newTodoItem.append(newTodoItemText);

const todolist = document.querySelector(".todo-list");
