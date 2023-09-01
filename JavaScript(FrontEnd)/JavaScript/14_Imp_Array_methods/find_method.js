 // Find Method
/*
The find() method returns the value of the first element 
that passes a test. The find() method executes a function 
for each array element. The find() method returns undefined 
if no elements are found. The find() method does not execute 
the function for empty elements.


*/
/*
 const myArray = ["hello","catt" ,"dog","lion"];

 function islength3(string){
           return string.length===3;
 }


 const ans = myArray.find(islength3);
// Returns First occurrence of condition
// which call back function gave if it satisfy 
// element is returned

 console.log(ans);

 */



 // real world Example


 
const users = [
    {userId :1 ,firstName:"Yatin",age : 22},
    {userId :2,firstName:"mohit",age : 20},
    {userId :3,firstName:"rajesh",age : 23},
    {userId :4,firstName:"ramesh",age : 27},
    {userId :5,firstName:"siddhi",age : 24},
]

const userfound = users.find((user)=>{

    return user.userId===4;
    
});
console.log(userfound);
