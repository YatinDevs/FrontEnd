// important array methods

// for each
// filter
// map    // important
// reduce


const numbers=[4,5,6,3];


function  multiplyby2(number,index){
    console.log(`index is : ${index} number is ${number}`);

    // console.log(`${number}*2 = ${number*2}`);
}

/*

for(let i=0;i<numbers.length;i++){
multiplyby2(numbers[i],i);
}
*/
// numbers.forEach(myFunction);
numbers.forEach(function(number,index){

    console.log(number*2,index);

});


// Realistic Usage

const users=[
    {firstName:"Yatin",age:23},
    {firstName:"Siddesh",age:24},
    {firstName:"Karthik",age:25},
    {firstName:"Sanket",age:26},

]

users
.forEach((user)=>{
    console.log(user.firstName,user.age);
})

users.forEach(function(user){
    console.log(user.firstName);
})