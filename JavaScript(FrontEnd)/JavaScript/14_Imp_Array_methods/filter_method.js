// filter Method in Array Methods.

const numbers = [1,3,2,6,4,8];

const isEven= function(number){
    return number % 2 === 0;
}

const Even_numbers = numbers.filter(isEven);
console.log(Even_numbers);

/*
Inside Filter function
We pass callback function
for Every index and value callback function is executed
those who pass the test provided by a function
boolean true and false in this case
It is stored in array and return as array
It Doesnt change original Array
*/
/*
What is filter method in JavaScript?
The filter() method creates a new array filled with elements 
that pass a test provided by a function. The filter() method 
does not execute the function for empty elements. 
The filter() method does not change the original array

*/