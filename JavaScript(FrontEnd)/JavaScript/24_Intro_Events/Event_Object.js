// #################### ############# Even Object ###################

/*
const firstbtn = document.querySelector("#one");

// Adding Click Event with addEventListener Method
// It takes Event and functions are argument
firstbtn.addEventListener("click",function(){
    console.log(this);
})
*/
// On Click ---> after Event ---> here Function declaration this is returning button only.

//--- in case of arrow function this value changes to one more scope

// jab bhi mai kisi bhi element pe event listener add hoga
// js Engine--- > line by line code execution occurs.
/// browser --> js Engine + Extra features
// browser --> js Engine + WebAPI


// When Browser gets to known that user performed Event of Click Event,then Browsers 
// JS Engine + Extra features will do two things :
// 1) callback Function will be Given to JS Engine.
// 2) Callback function will be given with Information of Event which happended at time of
//  function execution.
//  Above Information of Event --> will be in form of Object.



const firstbtn = document.querySelector("#one");
const secbtn = document.querySelector("#two");

// Adding Click Event with addEventListener Method
// It takes Event and functions are argument
firstbtn.addEventListener("click",function(e){
    console.log(this,e);
});


secbtn.addEventListener("click",(e)=>{
    console.log(this,e);
});

// the return Event Object consists many Properties. Among them two are imp ones:
// target property --> returns which Element triggered the Event. -->  button#one here
// currentTarget property --> returns which Element EventListener was Attached --> null here

firstbtn.addEventListener("click",function(e){
    console.log(e.target);
});


secbtn.addEventListener("click",(e)=>{
    console.log(e.target);
});
