//  #################### Click Events on Multiple Buttons ##################################

// console.log("hello world");

/*

const firstbtn = document.querySelector("#one");

firstbtn.addEventListener("click",function(){
    console.log("you Click me!!");
});

*/


/*
const allbtns = document.querySelectorAll("button");
console.log(allbtns);

for(let btn of allbtns){
    btn.addEventListener("click",function(){
        console.log("you Click me!!");

    });
}

*/

/*
const allbtns = document.querySelectorAll("button");
console.log(allbtns);

for(let btn of allbtns){
    btn.addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);

    });
}

// In Case of Arrow function this point to window Object.
*/



const allbtns = document.querySelectorAll("button");


for(let i = 0;i<allbtns.length;i++){
    allbtns[i].addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });
}


/*
const allbtns = document.querySelectorAll("button");

allbtns.forEach(function(btn){

    btn.addEventListener("click",function(){
        console.log(this);
        console.dir(this);
        console.log(this.textContent);
    });

});

*/