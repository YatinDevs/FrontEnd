// ####################### Events Behind the Scenes ############################

console.log("~!!!!!! Script Start")
const allBtns = document.querySelectorAll(".my-buttons button");
console.log(allBtns);


/*
for(let btn of allBtns){

    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });
};

*/

/*
allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        console.log(e.target);
    });

});

*/
allBtns.forEach((btn)=>{

    btn.addEventListener("click",(e)=>{
        let num = 0;
        for(let i = 0; i<=1000000000;i++){
            num+=i;
        }
        console.log(e.currentTarget.textContent,num);
    });

});

let outerVar = 0;
for(let i = 0; i<=1000000000;i++){
    outerVar+=i;
}
console.log("Value of Outer variable :",outerVar);

console.log("~!!!!!! Script End")
