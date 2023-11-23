// Closure

// function outer() {
//   let a = 50;
//   function inner() {
//     console.log(a);
//   }
//   inner();
// }

// outer();

function outer() {
  let a = 100;
  let b = 50;
  let c = 20;

  {
    console.log(b);
    console.log(c);
  }

  return function inner() {
    console.log(a);
  };
}

let z = outer();
z();
