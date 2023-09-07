//  ## get and set attributes ##

/*
// Inside nav lets say ui  and inside li 
// class href id all will be considered attributes .

// fetching the element anchor tag 
const link = document.querySelector("a");

// getAttribute is Method
// here with help of getAttribute method on link Element i.e anchor tag we fetched
// we are getting href attribute data.
console.log(link.getAttribute("href"));


// lets check the type of attribute in html file

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));
*/

// We can also change the value of attribute .
// setAttribute :
// const link = document.querySelector("a");
// link.setAttribute("href","https://www.google.com");

// console.log(link.getAttribute("href"));
// console.log(link.getAttribute("href").slice(8));


/*  !important :

  # The getAttribute() method returns the value of an element's attribute.
  # The getAttribute() method of the Element interface returns the value of a specified
    attribute on the element. If the given attribute does not exist, the value returned will
    either be null or "" (the empty string); see Non-existing attributes for details.

  # What is setAttribute ()?
  - JavaScript setAttribute() 
  - The setAttribute() method is used to set or add an attribute to a particular element and 
   provides a value to it. If the attribute already exists, it only set or changes the value of
   the attribute.

 */