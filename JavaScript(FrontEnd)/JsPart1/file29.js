// fill method

// value,start,end

/*
const myArray = new Array(10).fill(0);
console.log(myArray);
*/

const myArray = [1,2,3,4,5,6,7,8];
myArray.fill(1,3,5);
// value,start,end
console.log(myArray);

 // Splice Method

 // Start ,Delete ,Insert

 const myArray1=['item1','item2','item3'];

 // delete
 const deleteditem=myArray1.splice(1,1);
 console.log(deleteditem);
 console.log(myArray1);

 // insert

 myArray1.splice(2,0,'insertitem');
 console.log(myArray1);

 // insert and Delete together

 const deleted=myArray1.splice(1,2,"inserteditem1","inserteditem2");
 console.log(deleted);
 console.log(myArray1);