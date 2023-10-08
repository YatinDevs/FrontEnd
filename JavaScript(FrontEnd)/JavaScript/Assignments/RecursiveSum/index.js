let sumForm = document.getElementById("sumForm");
let numSeqInput = document.getElementById("numSeqInput");
let sumResult = document.getElementById("sumResult");

function sumOfSeq(numSeq) {
  let total = 0;

  for (let i = 0; i < numSeq.length; i++) {
    let num = parseFloat(numSeq[i]);
    if (!isNaN(num)) {
      total = total + num;
    }
  }

  return total;
}

sumForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let numSeq = numSeqInput.value.split(",");

  sumResult.textContent = `Sum is: ${sumOfSeq(numSeq)}`;
});
