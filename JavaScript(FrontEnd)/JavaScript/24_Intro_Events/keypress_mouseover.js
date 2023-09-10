// Keypress Event 

/* 
    What is keypress event in JavaScript?
 The keypress event is fired when a key that produces a character value is pressed down.
 Examples of keys that produce a character value are alphabetic, numeric, and punctuation keys.

 What is the keypress attribute in JavaScript?

This attribute fires when a user presses a key on the Keyboard. 
This event attribute can not be used for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers.


*/

const body = document.body;

body.addEventListener("keypress",(e)=>{
    console.log(e.key);
})
// Mouse Over Event
/*
  What is the difference between mouseover and Mouseleave?
mouseleave A pointing device is moved off the element that has the listener attached.
 mouseover A pointing device is moved onto the element that has the listener attached
  or onto one of its children. mouseout A pointing device is moved off the element that 
  has the listener attached or off one of its children.

  The mouseover event fires when the user moves the mouse onto an element.
   The mouseout event fires when the user moves the mouse out of an element. 
   Unfortunately these events bubble up. Fires when the user moves the mouse over
    the element you registered the event on or one of its descendants.


*/

const mainButton = document.querySelector(".btn-headline");
// console.log(mainButton);
mainButton.addEventListener("mouseover",(e)=>{

    console.log("mouseover event Occurred !! ");
})


mainButton.addEventListener("mouseleave",(e)=>{

    console.log("mouseleave event Occurred !! ");
})