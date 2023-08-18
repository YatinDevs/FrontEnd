// nested Destructuring
const users = [
    {user_Id: 11 ,first_Name:"Yatin",gender:"male"},
    {user_Id: 22 ,first_Name:"Mohit",gender:"female"},
    {user_Id: 33 ,first_Name:"Siddesh",gender:"Male"},
]
/*
const[user1,user2,user3]=users;

console.log(user1);
*/

const[{first_Name:first_NameUser1}, {gender:genderUser2} , 
    {user_Id:useridUser3}]=users;
    
console.log(first_NameUser1);
console.log(useridUser3);
console.log(genderUser2);
