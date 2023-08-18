// Spread Operator in Arrays
/*
const array1=[1,2,3];
const array2=[4,5,6];

const newarray=[...array1,...array2,7,8,9];
const newarray2=[..."12345678"];
console.log(newarray2);
*/

// Spread Operator in Objects
const obj1={
    key1:"value1",
    key2:"value2",
    key1:"value56"// this one will override previous key1
    // only 1 key can exist
};
const obj2={
    key3:"value3",
    key4:"value4",
    key1:"value69"// this one will override previous key1
    // only 1 key can exist
};
const newObj={...obj1,...obj2,key5:"value5"};
console.log(newObj);

// Destructing Object

const band={
    bandName: "led Zeppelin",
    famousSong: "stairway to Heaven",
    year: 1999,
    anotherSong:"Caanbee",

};
/*
const bandName=band.bandName;
const famousSong=band.famousSong;
console.log(bandName,famousSong);
*/
let{bandName:var1,famousSong,...restProps}=band;
bandName="queen";
console.log(var1,famousSong);
console.log(restProps);