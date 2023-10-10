const grids = document.querySelectorAll(".grid");
const message = document.getElementById("message");
let currentPlayer = "Player1";
let moves = 0;
let board = ["", "", "", "", "", "", "", "", ""];

const checkWin = () => {
  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const condition of winConditions) {
    const [a, b, c] = condition; // object destruction
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return true;
    }
  }

  return false;
};

const checkDraw = () => {
  return moves === 9;
};

// when grid buttons are click
const handleClick = (index) => {
  if (board[index] === "") {
    // checking current is player1 or not is yes then 'X' else 'O'
    board[index] = currentPlayer === "Player1" ? "X" : "O";
    // showing 'X' or 'O' in the grid box
    grids[index].textContent = board[index];
    moves++;
    // check win or draw and change the player
    if (checkWin()) {
      alert(`Congratulations! ${currentPlayer} wins.`);
      disableGrids();
    } else if (checkDraw()) {
      alert("Draw! The match is drawn.");
    } else {
      currentPlayer = currentPlayer === "Player1" ? "Player2" : "Player1";
    }
  }
};

//  disable the further action is someone is win
const disableGrids = () => {
  grids.forEach((grid) => grid.removeEventListener("click", handleClick));
};

grids.forEach((grid, index) => {
  grid.addEventListener("click", () => {
    if (!message.textContent) {
      handleClick(index);
    }
  });
});
