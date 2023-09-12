// Call Back hell / call Backs / the Pyramid of Doom :

// const heading1 =document.querySelector(".heading1");
// const heading2 =document.querySelector(".heading2");
// const heading3 =document.querySelector(".heading3");
// const heading4 =document.querySelector(".heading4");
// const heading5 =document.querySelector(".heading5");
// const heading6 =document.querySelector(".heading6");
// const heading7 =document.querySelector(".heading7");

/*
setTimeout(()=>{

    heading1.textContent = `Heading 1`;
    heading1.style.color = "violet";
   
},1000);


setTimeout(()=>{ 
    heading2.textContent = `Heading 2`;
    heading2.style.color = "purple";
},3000);
*/
/*
// call back hell
setTimeout(()=>{
    heading1.textContent = `Heading 1`;
    heading1.style.color = "violet";
    setTimeout(()=>{ 
    heading2.textContent = `Heading 2`;
    heading2.style.color = "purple";
    setTimeout(()=>{ 
        heading3.textContent = `Heading 3`;
        heading3.style.color = "red";
        setTimeout(()=>{ 
            heading4.textContent = `Heading 4`;
            heading4.style.color = "pink";
            setTimeout(()=>{ 
                heading5.textContent = `Heading 5`;
                heading5.style.color = "green";
                setTimeout(()=>{ 
                    heading6.textContent = `Heading 6`;
                    heading6.style.color = "blue";
                    setTimeout(()=>{ 
                        heading7.textContent = `Heading 7`;
                        heading7.style.color = "brown";
                        },1000);
                    },3000);
                
                },2000);
            
            },1000);
        
        },2000);
    
    },2000);

},1000)
*/
/*

    Callback Hell: Callback Hell is essentially nested callbacks stacked below
    one another forming a pyramid structure. Every callback depends/waits for
    the previous callback, thereby making a pyramid structure that affects
    the readability and maintainability of the code.

    What difference between callback or callback hell in JavaScript?
As you know that we can pass an argument to a function, right? But Javascript
 also allows us to pass functions as an argument to some other function. 
 This property of Javascript is known as 'Callback'. Callback hell is a 
 scenario where multiple Callbacks are nested together, one above the other.


*/


// const heading1 =document.querySelector(".heading"); // for else part 
const heading1 =document.querySelector(".heading1");
const heading2 =document.querySelector(".heading2");
const heading3 =document.querySelector(".heading3");
const heading4 =document.querySelector(".heading4");
const heading5 =document.querySelector(".heading5");
const heading6 =document.querySelector(".heading6");
const heading7 =document.querySelector(".heading7");
const heading8 =document.querySelector(".heading8");
const heading9 =document.querySelector(".heading9");
const heading10 =document.querySelector(".heading10");


function changeText(element,text,color,time,onSucess,onFailure){
    setTimeout(()=>{
        if(element){
          element.textContent = text;
          element.style.color = color;
           if(onSucess){
              onSucess();
            }
           
        }else{
            // console.log("your element doesnt exists")
            if(onFailure){
                onFailure();
            }
        }
    },time)
}

// Pyramid of DOOM :
changeText(heading1,"one","violet",3000,()=>{
    changeText(heading2,"two","purple",2000,()=>{
        changeText(heading3,"three","red",1000,()=>{
            changeText(heading4,"four","pink",1000,()=>{
                changeText(heading5,"five","green",2000,()=>{
                    changeText(heading6,"six","blue",2000,()=>{
                        changeText(heading7,"seven","cyan",2000,()=>{
                            changeText(heading8,"eight","#cda562",1000,()=>{
                                changeText(heading9,"nine","#dca652",1000,()=>{
                                    changeText(heading10,"ten","brown",1000,()=>{

                                    },()=>{console.log("There is Some Error in Code.heading10");});
                                },()=>{console.log("There is Some Error in Code.heading9");});
                            },()=>{console.log("There is Some Error in Code.heading8");});
                        },()=>{console.log("There is Some Error in Code.heading7");});
                    },()=>{console.log("There is Some Error in Code.heading6");});
                },()=>{console.log("There is Some Error in Code.heading5");}); 
            },()=>{console.log("There is Some Error in Code.heading4");}); 
        },()=>{console.log("There is Some Error in Code.heading3");});   
    },()=>{console.log("There is Some Error in Code.heading2");});   
},()=>{console.log("There is Some Error in Code.heading1");});

/*
  What is the pyramid of doom in JavaScript?
The phenomenon which happens when we nest multiple callbacks within a function
 is called a callback hell. The shape of the resulting code structure resembles 
 a pyramid and hence callback hell is also called the “pyramid of the doom”.
  It makes the code very difficult to understand and maintain.

*/