// Inner HTML in JavaScript :


const headLine = document.querySelector(".headline");
console.log(headLine);

// Fetching Inner html
console.log(headLine.innerHTML);

// Making changes in inner HTML
headLine.innerHTML = "<h1>Inner Html Changed So Manage </h1>";
headLine.innerHTML += "<button class =\"btn btn-headline\">Learn More<button>";


console.log(headLine.innerHTML);


/*
 #   The innerHTML property sets or returns the HTML content (inner HTML) of an element.
   

 # What is innerHTML in JavaScript? 
        innerHTML is an HTML element property that has two uses
 for web developers: 1) You can use it to get the internal HTML content of any HTML element 
 as an HTML string. 2) You can also use it to set or change elements' innerHTML content.


 
*/