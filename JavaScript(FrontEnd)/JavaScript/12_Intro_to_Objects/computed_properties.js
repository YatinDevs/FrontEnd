// computed properties

const key1 = "objkey1";
const key2 = "objkey2";

const value1="myvalue1";
const value2="myvalue2";

// const obj = {
//     "objkey1" : "myvalue1",
//     "objkey2" : "myvalue2",
// }


// Here we  want to fetch the values of key1 and key2
// for it we need to use computed properties
// just like value1 and value2  fetched its variable data.
// we want  it for keys so just add bracket Notation 
// const obj = {
//     key1 : value1,
//     key2 : value2,
// }

// const obj = {
//     [key1] : value1,
//     [key2] : value2,
// }

// other way

const obj = { };

    obj[key1] = value1,
    obj[key2] = value2


console.log(obj);
