// Select ELement using QuerySelector :

/*

const mainHeading = document.querySelector("#main-heading");

mainHeading.style.color="red";

*/

const header = document.querySelector(".header");

console.log(header);

const navItem = document.querySelector(".nav-item");

console.log(navItem);
// we will get the first nav-item as output among other three.


// SO in case we want all the nav-items we can use querySelectorAll 
const navItems = document.querySelectorAll(".nav-item"); 
console.log(navItems);
// returns all the nav-items in form of Nodelist 

/* !important 

 -  The querySelector() method returns the first element that matches a CSS selector.
 -  To return all matches (not only the first), use the querySelectorAll() instead.
 -  Both querySelector() and querySelectorAll() throw a SYNTAX_ERR exception if the selector(s) is invalid.

 - The querySelectorAll() method returns all elements that matches a CSS selector(s).
 - The querySelectorAll() method returns a NodeList.
 - The querySelectorAll() method throws a SYNTAX_ERR exception if the selector(s) is invalid


*/

/* 

 We will Study Further in detail :

 ###  The Difference Between an HTMLCollection and a NodeList ###

A NodeList and an HTMLcollection is very much the same thing.

Both are array-like collections (lists) of nodes (elements) extracted from a document. The nodes can be accessed by index numbers. The index starts at 0.

Both have a length property that returns the number of elements in the list (collection).

An HTMLCollection is a collection of document elements.

A NodeList is a collection of document nodes (element nodes, attribute nodes, and text nodes).

HTMLCollection items can be accessed by their name, id, or index number.

NodeList items can only be accessed by their index number.

An HTMLCollection is always a live collection. Example: If you add a <li> element to a list in the DOM, the list in the HTMLCollection will also change.

A NodeList is most often a static collection. Example: If you add a <li> element to a list in the DOM, the list in NodeList will not change.

The getElementsByClassName() and getElementsByTagName() methods return a live HTMLCollection.

The querySelectorAll() method returns a static NodeList.

The childNodes property returns a live NodeList.



  
*/