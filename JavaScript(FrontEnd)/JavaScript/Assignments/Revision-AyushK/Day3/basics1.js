// IIFE

// (function abc() {
//   console.log("ABC");
// })();

// Arrow Function vs Regular Function

console.log(this);

let order1 = {
  orderId: "123AH",
  placedOn: "23rd Nov",
  price: "1,060",
  printOrderDetails: function () {
    console.log("1", this);
    const abc = () => {
      console.log("2", this);
      console.log(
        `Your order with ID '${this.orderId}' is of Rs. ${this.price}.`
      );
    };
    abc();
  },
};

order1.printOrderDetails();
