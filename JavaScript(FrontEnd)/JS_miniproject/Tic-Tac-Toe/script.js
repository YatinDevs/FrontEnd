console.log("Script Started");

const grid = document.querySelector(".game");

console.log(grid);

let firstTurn = true;

grid.addEventListener("click", (e) => {
  console.log(e);

  console.log(e.target);

  if (firstTurn) {
    e.target.value = "X";
    firstTurn = false;
  } else {
    e.target.value = "O";
    firstTurn = true;
  }
  e.target.setAttribute("disabled", "");
});
