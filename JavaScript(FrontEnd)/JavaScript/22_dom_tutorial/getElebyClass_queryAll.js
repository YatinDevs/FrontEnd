/*

// get multiple elements using  getElementbyClassname

const navItems = document.getElementsByClassName("nav-item");
// With getElementsByCLassname we get HTMLCollections
console.log(navItems);

// We get HTMLCollections as output 
// Array like Object (means we can do indexing ,but wont get array methods,
// we can iterate on it).
console.log(navItems[0]);
console.log(navItems[1]);
// It is Object
console.log(typeof navItems[2]);
// But Not Array
console.log(Array.isArray(navItems));

*/

// get multiple elements items using querySelectorAll

const navItems = document.querySelectorAll(".nav-item");
// With querySelectorALL we get Nodelist
console.log(navItems);
// Array like Object (means we can do indexing ,but wont get array methods, 
// we can iterate on it).
console.log(navItems[0]);
console.log(navItems[1]);
