//################# Function in JavaScript ############### 


// #############  Basics OF Function ###########
// All Below Are Function Expression

// Printing data 
// Not convenient to print this way 
/*
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");


// So We can make function and just call its function
// Declaration of function :
const printText = function (){
    console.log("This is console text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();

*/

// ###################################################################

// Function Expression 
// we initialize const variable to function
// so addition here expresses function
const addition = function (){
  return 2+4;
}
const result = addition();
console.log(result);

// ###################################################################

// function addition(num1,num2){
//     return num1+num2;
//   }
//   const result = addition(10,20);
//   console.log(result);
  
  // Undefined + Undefined = NAN
  
//   function additionofThree(num1,num2,num3){
//       return num1 + num2+num3
  
//   }
  
  // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
//   const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
//   console.log(sumofThree);
  
  // ------------------------------------------------
  
  // odd or Even 
  
//   const isEven= function (num){
//     if(num % 2 === 0){
//           return true;
//       }
//       return false;
//   }
  
  // ------------------------------------------------
  
const isEven= function (num){
  
      return num % 2 === 0;
  }
  
  console.log(isEven(2));
  
  // ------------------------------------------------
  
// const firstChar =  function (str){
//       return str[0];
//   }
  
//   console.log(firstChar("abcdef"));
  
  // ------------------------------------------------
  
  // Create function
  // input : array , target(number)
  // output : index of target present in array
  // linear Search
  
//  const linearSearch = function (arr,target){
      
//       for(let i=0;i<arr.length; i++){
//           if(arr[i]===target){
//               return i;
//           }
//       }
//       return -1;
//   }
//   const arr = [1,2,3,4,5,6,7,8,9,10];
//   const res = linearSearch(arr,10);
//   console.log(res);
  
  

// Above All are function expression :
// anynomous function --> is assigned const variable
// to call the function .
