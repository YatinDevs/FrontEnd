// ################### Splice Method ##############################//
/*
What is splice method in JavaScript?
The splice() method is a built-in method for JavaScript Array 
objects. It lets you change the content of your array by removing 
or replacing existing elements with new ones. This method modifies 
the original array and returns the removed elements as a new array.
*/

// Changes original array
// Start , delete ,insert

// const array = ['item1' , 'item2','item3','item4','item5'];

// ################ delete using splice ############# 

// input : ['item1', 'item2', 'item3', 'item4', 'item5']

// start from 1st index, delete (how many elements) - 2 
// array.splice(1,2);
// console.log(array);
// output : ['item1', 'item4', 'item5']
// two elements deleted from index 1.

// It also returns deleted Element

// const deletedElement = array.splice(1,2);
// console.log(array);
// console.log(deletedElement);



// ################# insert using Splice #########################


// input : ['item1', 'item2', 'item3', 'item4', 'item5']

// start from 1st ,  delete 0 elements, add from 1st index 
// array.splice(1,0,'newitem');
// console.log(array);
// output : ['item1', 'newitem','item2', 'item3', 'item4', 'item5']


// ############ insert and delete simultaneously ############

const array = ['item1' , 'item2','item3','item4','item5'];

const deletedElements = array.splice(1,2,"insertitem1",'insertitem2');
console.log(array);
console.log(deletedElements);
// return array of deleted items