// Map Method

const numbers=[3,6,5,4,1];

/*
const square= function(number){
    return number*number;
}


const squaredAns=numbers.map(square);
*/
// map method take in call back function
// map creates new Array
// saves the returned output in Array
// and in its expression creates and Array of Returned output


const squaredAns=numbers.map((number,index)=>{
    return number*number;}
);

console.log(squaredAns);


const users=[
    {firstName:"Yatin",age:23},
    {firstName:"Siddesh",age:24},
    {firstName:"Karthik",age:25},
    {firstName:"Sanket",age:26},

]

const userNames= users.map((user)=>{
     return user.firstName;
})
console.log(userNames);
