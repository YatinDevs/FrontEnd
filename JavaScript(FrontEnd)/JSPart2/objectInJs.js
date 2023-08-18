let a=1;
let b="String";
let c=true;
let d;
let e=" ";
let f=null;

console.log(typeof(a));
console.log(typeof(b));
console.log(typeof(c));
console.log(typeof(d));
console.log(typeof(e));
console.log(typeof(f));

const object1={
    name : "Yatin Chaudhari",
    age  : 25 ,

}

object1.gender = "male"; // Dot Notations

console.log(object1);
console.log(typeof({}));
console.log(typeof([]));
console.log(typeof(function(){})); // In JS everything is Object

const check = () => {
    console.log("checking");
}

check.letsfun="allright abc";
console.log(check.letsfun);