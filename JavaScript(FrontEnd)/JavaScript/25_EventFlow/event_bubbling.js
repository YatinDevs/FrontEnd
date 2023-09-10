// 1. Event Bubbling / Event Propogation.
// 2. Event Capturing.
// 3. Event Delegation.


const grandparent = document.querySelector(".grandparent");
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
/*
// addEventListener (event,function,capture="true")
// Capturing Events


child.addEventListener("click",()=>{
    console.log("Capture !!!!!!  Child !!");
},true);


parent.addEventListener("click",()=>{
    console.log("Capture !!!!!!  parent !!");
},true);


grandparent.addEventListener("click",()=>{
    console.log("Capture !!!!!!  grandparent !!");
},true);


document.body.addEventListener("click",()=>{
    console.log("Capture !!!!!!  body !!");
},true);


// addEventListener (event,function,capture="false")
//  Event Bubbling / Event Propogation.

//-------------------------------------------------------------------
child.addEventListener("click",()=>{
    console.log("Bubble Child !!");
})


parent.addEventListener("click",()=>{
    console.log("Bubble parent !!");
})


grandparent.addEventListener("click",()=>{
    console.log("Bubble grandparent !!");
})


document.body.addEventListener("click",()=>{
    console.log("Bubble body !!");
})
*/

// ---Event Delegation
grandparent.addEventListener("click",(e)=>{
    console.log(e.target);
})