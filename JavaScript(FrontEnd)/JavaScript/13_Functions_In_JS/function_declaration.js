//################# Function in JavaScript ############### 


// #############  Basics OF Function ###########
// All Below Are Function Declaration
/*
// Printing data 
// Not convenient to print this way 

console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");
console.log("This is console text");


// So We can make function and just call its function
// Declaration of function:
function printText(){
    console.log("This is console text");
}
// Calling Function / Invoked Function/ Run Function
// Code Reusability
printText();
printText();
printText();

*/
// ###################################################################
/*
function addition(){
  return 2+4;
}
const result = addition();
console.log(result);
*/
// ###################################################################

function addition(num1,num2){
    return num1+num2;
  }
  const result = addition(10,20);
  console.log(result);
  
  // Undefined + Undefined = NAN
  
  function additionofThree(num1,num2,num3){
      return num1 + num2+num3
  
  }
  
  // const sumofThree = additionofThree(10,20); // 10+20+undefined = NAN
  const sumofThree = additionofThree(10,20,30); // 10+20+30 = 60
  console.log(sumofThree);
  
  // ------------------------------------------------
  
  // odd or Even 
  
  // function isEven(num){
  //     if(num % 2 === 0){
  //         return true;
  //     }
  //     return false;
  // }
  
  // ------------------------------------------------
  
  function isEven(num){
  
      return num % 2 === 0;
  }
  
  console.log(isEven(2));
  
  // ------------------------------------------------
  
  function firstChar(str){
      return str[0];
  }
  
  console.log(firstChar("abcdef"));
  
  // ------------------------------------------------
  
  // Create function
  // input : array , target(number)
  // output : index of target present in array
  // linear Search
  
  function linearSearch(arr,target){
      
      for(let i=0;i<arr.length; i++){
          if(arr[i]===target){
              return i;
          }
      }
      return -1;
  }
  const arr = [1,2,3,4,5,6,7,8,9,10];
  const res = linearSearch(arr,10);
  console.log(res);
  
  