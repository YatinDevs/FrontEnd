// this

let person1 = {
  firstName: "Akshay",
  lastName: "Khurana",
  printMyName: function () {
    // console.log(this);
    console.log(`${this.firstName} ${this.lastName}`);
  },
  printMyDetails: function (hometown, age) {
    console.log(
      `My name is ${this.firstName} ${this.lastName}. I am from ${hometown}. I am ${age} years old.`
    );
  },
};

let person2 = {
  firstName: "Harshit",
  lastName: "Sharma",
};

let person3 = {
  firstName: "Sonia",
  lastName: "Gandhi",
};

// person1.printMyName();

// Method Borrowing

// Call, Apply, Bind

// person1.printMyName.call(person2);
// person1.printMyName.call({ firstName: "Honey", lastName: "Singh" });

// person1.printMyDetails.call(person3, "Delhi", 24);
// person1.printMyDetails.apply(person3, ["Delhi", 24]);

const printHarshitDetails = person1.printMyDetails.bind(person2, "Delhi", 24);

printHarshitDetails();

person2.lastName = "Kapoor";

// person1.printMyDetails.call(person3, "Delhi", 24);

printHarshitDetails();
