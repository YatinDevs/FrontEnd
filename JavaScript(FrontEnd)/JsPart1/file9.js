// objects inside array
// very useful in real World Applications

const users = [
    {user_Id: 11 ,first_Name:"Yatin",gender:"male"},
    {user_Id: 22 ,first_Name:"Mohit",gender:"male"},
    {user_Id: 33 ,first_Name:"Siddesh",gender:"Male"},
]

for(let user of users){
    console.log(user.user_Id);
    console.log(user.first_Name);
    console.log(user.gender);
}

for(let user of users){
    console.log(user);
}
