// this Keyword

const person = {
  firstName: "Akshay",
  lastName: "Khurana",
  printMyDetails: function () {
    console.log(this);
  },
  printMyDetails2: () => {
    console.log(this);
  },
};

// person.printMyDetails();
// person.printMyDetails2();

// console.log(this);

// Functions

// Normal Function

// first();
// second();

function first() {
  console.log("First!");
}

// first();

// Function Expression

const second = function () {
  console.log("Second!");
};

// second();

// Arrow Function

const arrow1 = () => {
  return "Hello from Arrow Function 1!";
};
// console.log(arrow1());

const arrow2 = () => "Hello from Arrow Function 2!";
// console.log(arrow2());

const arrow3 = (value1) => `Hello, ${value1}!`;
console.log(arrow3("Akshay"));

// Call
// Apply
// Bind
