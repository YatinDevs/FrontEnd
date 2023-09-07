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
/*
// get multiple elements items using querySelectorAll

const navItems = document.querySelectorAll(".nav-item");
// With querySelectorALL we get Nodelist
console.log(navItems);
// Array like Object (means we can do indexing ,but wont get array methods, 
// we can iterate on it).
console.log(navItems[0]);
console.log(navItems[1]);

*/




// ################################################################################################
//                                   Iterate Elements
// ################################################################################################



// get multiple elements using  getElementbyClassname / getElementbyTagName
// HTMLCollections




// const navItems = document.getElementsByClassName("nav-item"); 


// HTMLCollections :
// Array Like Object :
// Indexing Use --> can Iterate --> Using loop or index.
// length property
// console.log(navItems.length);

// 1.Simple for loop
// 2.for of loop
// 3.for each --- > cannot use this method to iterate through HTMLCollection.

// // Iteration Through Nav items 
// for(let i = 0; i < navItems.length;i++){
//     console.log(navItems[i]);

// }


/*
// So we Have to solve below problem we have getElementByTagName.

for(let i = 0; i < navItems.length;i++){
    const navItem = navItems[i];
    navItem.style.backgroundColor = "#fff"; // changed
    navItem.style.color = "black"; // No change as text is inside li a i.e anchor tag

}

*/

// const anchorTags = document.getElementsByTagName("a");
// console.log(anchorTags);

// 1.Simple for loop

/*
for(let i = 0; i < anchorTags.length;i++){
    const anchorTag = anchorTags[i];
    anchorTag.style.backgroundColor = "#fff"; // changed
    anchorTag.style.color="green"; // No change as text is inside li a i.e anchor tag
    anchorTag.style.fontWeight="bold"; 

}
*/

/*
// 2.for of loop

for(let anchorTag of anchorTags){
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

}

*/

/*

// 3.for each --- > cannot use this method to iterate through HTMLCollection.

anchorTags.forEach((anchorTag)=> {
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

});

*/
//-----------------------------------------------------------------------------------------

/*
// But We Resolve Problem 
// By changing HTMLCollections ------------> to Array

// const navItems = document.getElementsByClassName("nav-item"); 
// As we going to change HTMLCollection we are using let instead of const

 let anchorTags = document.getElementsByTagName("a"); 
 
 anchorTags = Array.from(anchorTags);
 
 console.log(Array.isArray(anchorTags)); // True
 // By changing HTMLCollections ------------> to Array
 // We can Use For Each Method now and all the Array Methods.
anchorTags.forEach((anchorTag)=> {
    anchorTag.style.color = "purple";
    anchorTag.style.backgroundColor = "#fff";
    anchorTag.style.fontWeight = "bold";

});

*/
