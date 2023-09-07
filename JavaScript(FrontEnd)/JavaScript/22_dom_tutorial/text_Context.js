// To Change the Text :

// textContent and innerText


/*
     Task: To change main-heading with js file .

     1. So with the help of getElementById - We are fetching id ---> main-heading here
     (The getElementById() is a JavaScript function that lets you grab an HTML element,
     by its id , and perform an action on it. )
     2. fetching and storing data of main-heading id in const mainHeading
     3. then we will be changing the text content of main-heading so,
      we use textContent DOM property with stored const mainHeading and change the 
      text content .
     (The textContent is the DOM property that is used to set text content for the HTML 
        element or get the text content written inside that element.)


*/
/*
    // !solution :

const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent);

mainHeading.textContent = "This is Something Else.";

*/

    
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading.textContent); 
// we can get all the text content of main-heading even which is hidden
// lets say in span tag with display none a text is stored in heading
// it will also give it out as output in text Content property DOM.
console.log(mainHeading.innerText);
// we can get all the Inner text content of main-heading but which is hidden
// lets say in span tag with display none a text is stored in heading
// it will not be given out as output innerText  property DOM.