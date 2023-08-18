// Iterables

// On which we can apply for of loop  are iterables
// String and arrays are iterables . 

const firstName='Yatin';

for(let char of firstName){
    console.log(char);

}

const items=['item1','item2','item3'];
for(let item of items){
    console.log(item);
}
/*
const users ={'key1':'value1',
'key2':'value2'};
for(let user of users){
    console.log(user);

}
*/
// array like object
// jinke passs length property hoti hai
// aur jinko hum index se access kar sakte hai

// example -: String and Arrays