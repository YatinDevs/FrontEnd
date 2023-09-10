// little practice with click Event:

const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

const body = document.querySelector("body");
console.log(body);

allButtons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        e.target.style.backgroundColor='yellow';
        e.target.style.color='gray';
    })
})

/*

allButtons.forEach((button)=>{

    button.addEventListener("click",(e)=>{
        body.style.backgroundColor = 'yellow';
        button.style.backgroundColor = 'gray';
    })
})

*/