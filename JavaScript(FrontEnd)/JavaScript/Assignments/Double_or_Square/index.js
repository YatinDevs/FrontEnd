let sequenceForm = document.getElementById("sequenceForm");
let numInput = document.getElementById("numInput");
let operationDropdown = document.getElementById("operationDropdown");
let resultSequence = document.getElementById("resultSequence");

sequenceForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let numSeq = numInput.value.split(",");

  const square = (numSeq) =>
    numSeq.map((num) => {
      return num * num;
    });
  const double = (numSeq) =>
    numSeq.map((num) => {
      return num * 2;
    });

  if (operationDropdown.value == "Square") {
    square(numSeq).map((num) => {
      return num;
    });

    resultSequence.textContent = `Result: ${square(numSeq)}`;
  }
  if (operationDropdown.value == "Double") {
    double(numSeq).map((num) => {
      return num;
    });

    resultSequence.textContent = `Result: ${double(numSeq)}`;
  }
});
