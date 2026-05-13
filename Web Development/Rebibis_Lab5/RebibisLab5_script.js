const buttons = document.querySelectorAll(".board button");
const resetBtn = document.querySelector(".reset");

let currentPlayer = "X";
let gameOver = false;

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.textContent !== "" || gameOver) 
        return;

    btn.textContent = currentPlayer;

    if (checkWin()) {
      alert(currentPlayer + " wins!");
      gameOver = true;
      return;
    }

    if (isDraw()) { 
      alert("Draw!");
      gameOver = true;
      return;
    }

    if (currentPlayer === "X") {
      currentPlayer = "O";
    } else {
      currentPlayer = "X";
    } 
  });
});

resetBtn.addEventListener("click", resetGame);

function checkWin() {
  const win = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ];

  if (win.some(combo => {
    const [a, b, c] = combo;
    return (
        buttons[a].textContent &&
        buttons[a].textContent === buttons[b].textContent &&
        buttons[a].textContent === buttons[c].textContent
    );
  })) {
    return true;
  }
}

function isDraw() {
  return [...buttons].every(btn => btn.textContent !== "");
}

function resetGame() {
  buttons.forEach(btn => btn.textContent = "");
  currentPlayer = "X";
  gameOver = false;
}
