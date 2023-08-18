//Map

// Map is iterable

/*
// Object Literals
// key --> String
// key --> Symbol
const person={
    firstName : "Yatin",
    age : 23,
     1 : "one"
}

*/

// key Value 
/*
const person =new Map();

person.set('firstName','Yatin');
person.set('age',23);
person.set(1,'one');
console.log(person);
console.log(person.get(1));
console.log(person.keys());

for( let key of person.keys()){
    console.log(key,typeof key);
}
*/
// Can use any type of data for Keys
// string, number ,arrays or objects.

/*
for(let [key,value] of person){
   // console.log(Array.isArray(key));
   console.log(key,value);
}
*/
// in Ordered Fashion
/*
const person =new Map([['firstName','Harshit'],['age',24]]);
console.log(person);
*/
const person1={
    id:1,
    first_Name:"harshit"
}


const person2={
    id:2,
    first_Name:"harshitaa"
}

const moreinfo=new Map();
moreinfo.set(person1,{age:23,gender:"male"});
moreinfo.set(person2,{age:25,gender:"female"});

console.log(person1.id);
console.log(moreinfo.get(person1).gender);
console.log(moreinfo.get(person2).gender);
