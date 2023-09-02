// ################# Iterables ####################### 

// String and Array are Iterables
// On which we can use loops are basically Iterables

/*
What are iterable data types in JavaScript?
JavaScript Iterables

The data structures that have the Symbol. iterator() method are 
called iterables. For example, Arrays, Strings, Sets, etc

*/

/*
    What are iterables in JavaScript?
The iterable protocol allows JavaScript objects to define or 
customize their iteration behavior, such as what values are looped
 over in a for...of construct. Some built-in types are built-in 
 iterables with a default iteration behavior, such as Array or Map
  , while other types (such as Object ) are not.


*/

/*
    #### On Strings We can Apply For of Loops as they are Iterables.
    #### Array is also Iterable.
*/
// const first_name = "chaudhari";
// for(let ch of first_name){
//     console.log(ch);
// }

// const numbers = [1,2,3,45,6,7,7];
// for(let num of numbers){
//     console.log(num);
// }
/* Objects are not Iterables */
// const users = {'key1':'value1',
//               'key2':'value2',
//               'key3':'value3',
//               'key4':'value4'}

//          for(let user of users){
//                 console.log(user);
//             }

// Error here users is not Iterable
// As objects are not iterable

// ############### Array Like Objects ##########################

/* 
   
  ##  ##  ##  Array like Object  ## ## ##
  for example :
   1. those who have length property .
   2. those whose values can be accessed from index.
   example :- Strings.- Behaves like Array like Object

*/
/*
How to check if object is array-like in JavaScript?
Answer: Use the Array. isArray() Method

You can use the JavaScript Array. isArray() method to check whether
 an object (or a variable) is an array or not. This method returns 
 true if the value is an array; otherwise returns false . */

const first_name = "Yatin";
console.log(first_name.length);
console.log(first_name[3]);
