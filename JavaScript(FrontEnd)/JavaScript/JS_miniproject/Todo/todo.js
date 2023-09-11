// TODO

const  todoForm = document.querySelector(".form-todo");
/*
todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    console.log("form Submitted!");
});
*/
const todoInput = document.querySelector(".form-todo input[type='text']");
// console.log(todoInput);

const todoList = document.querySelector(".todo-list");

todoForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log(todoInput.value);
    const newTodoText = todoInput.value;
    const newli = document.createElement("li");
    const  newliinnerHTML = `
    <span class="text">${newTodoText}</span>          
    <div class="todo-buttons">
      <button class="todo-btn done">Done</button>
      <button class="todo-btn remove">Remove</button>
    </div>
   `
    newli.innerHTML = newliinnerHTML;
    todoList.append(newli);
    todoInput.value="";
});


// -----------Event Delegation

todoList.addEventListener("click",(e)=>{
    // console.log(e.target);
    if(e.target.classList.contains("remove")){
         console.log("remove it!");
         const targetedLi = e.target.parentNode.parentNode;
         targetedLi.remove();
    }
    if(e.target.classList.contains("done")){
        console.log("great!");
        const lispan = e.target.parentNode.previousElementSibling;
        lispan.style.textDecoration = "line-through";
        console.log(lispan);

    }
})
