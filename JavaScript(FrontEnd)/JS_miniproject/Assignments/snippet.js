// var me = 1;
// function findMe() {
//   if (me) {
//     var me = 100;
//     console.log(me);
//   }
//   console.log(me);
// }
// findMe();

//---------------------------------------------------------
/*
var x = 3;

var foo = {
  x: 2,

  baz: {
    x: 1,

    bar: function () {
      return this.x;
    },
  },
};

var go = foo.baz.bar;

alert(go());

alert(foo.baz.bar());
*/
//=========================================================
// The following recursive code will cause a stack overflow if the array list is too large. How can you fix this and still retain the recursive pattern?
/*
var list = readHugeList();

var nextListItem = function () {
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem();
  }
};
*/

// A
// if (item) {
//        // process the list item...
//        setTimeout( nextListItem, 0);
//=========================================================

//    }
// const pi = 3.14;
// var pi = 4;
// console.log(pi);
//=========================================================
/*
function sayHi(name) {
  console.log(`Hi, ${name}!`);
}

sayHi("Alice", "Bob");
//=========================================================

function greeting(name) {
  return function () {
    console.log("Hello, " + name + "!");
  };
}

const greetJane = greeting("Jane");

greetJane();
//=========================================================

function oddsums(n) {
  let total = 0,
    result = [];
  for (let x = 1; x <= n; x++) {
    let odd = 2 * x - 1;
    total += odd;
    result.push(total);
  }
  return result;
}

let arr = oddsums(5);
console.log(arr);
*/
