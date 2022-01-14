const ROCK_CLASS = "rock";
const PAPER_CLASS = "paper";
const SCRISSOR_CLASS = "scrissor";

const playerBox = document.getElementById("player-box");
const comBox = document.getElementById("com-box");

const playerScore = document.getElementById("player-score");
const comScore = document.getElementById("com-score");

const rockButton = document.getElementById("rock-button");
const paperButton = document.getElementById("paper-button");
const scrissorButton = document.getElementById("scrissor-button");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

const endGameMessage = document.getElementById("end-game-message");
const endGameText = document.getElementById("end-game-text");

let playerScoreCount = 0;
let comScoreCount = 0;
let win;
let draw;

// BUTTON EVENT LISTENER
rockButton.addEventListener("click", function () {
  //  loadingAnimation();
  disableButton();
  placeComChoice();
  playerBox.classList.remove("ready");
  playerBox.classList.add(ROCK_CLASS);
  checkWin();
});

paperButton.addEventListener("click", function () {
  //  loadingAnimation();
  disableButton();
  placeComChoice();
  playerBox.classList.remove("ready");
  playerBox.classList.add(PAPER_CLASS);
  checkWin();
});

scrissorButton.addEventListener("click", function () {
  //  loadingAnimation();
  disableButton();
  placeComChoice();
  playerBox.classList.remove("ready");
  playerBox.classList.add(SCRISSOR_CLASS);
  checkWin();
});

nextButton.addEventListener("click", function () {
  playerBox.classList.remove(ROCK_CLASS);
  playerBox.classList.remove(PAPER_CLASS);
  playerBox.classList.remove(SCRISSOR_CLASS);
  comBox.classList.remove(ROCK_CLASS);
  comBox.classList.remove(PAPER_CLASS);
  comBox.classList.remove(SCRISSOR_CLASS);
  playerBox.classList.add("ready");
  comBox.classList.add("ready");
  enableButton();
});

restartButton.addEventListener("click", function () {
  playerScoreCount = 0;
  comScoreCount = 0;
  playerScore.innerText = playerScoreCount;
  comScore.innerText = comScoreCount;
  playerBox.classList.remove(ROCK_CLASS);
  playerBox.classList.remove(PAPER_CLASS);
  playerBox.classList.remove(SCRISSOR_CLASS);
  comBox.classList.remove(ROCK_CLASS);
  comBox.classList.remove(PAPER_CLASS);
  comBox.classList.remove(SCRISSOR_CLASS);
  playerBox.classList.add("ready");
  comBox.classList.add("ready");
  endGameMessage.classList.remove("show");
  enableButton();
});
// END OF BUTTON EVENT LISTENER

// FUNCTIONS
function placeComChoice() {
  comBox.classList.remove("ready");
  let randomNumber = Math.floor(Math.random() * 3);
  if (randomNumber === 0) {
    comBox.classList.add(ROCK_CLASS);
  } else if (randomNumber === 1) {
    comBox.classList.add(PAPER_CLASS);
  } else {
    comBox.classList.add(SCRISSOR_CLASS);
  }
}

function checkWin() {
  const playerBoxClass = playerBox.className;
  const comBoxClass = comBox.className;
  if (playerBoxClass.includes("rock")) {
    if (comBoxClass.includes("paper")) {
      win = false;
    } else if (comBoxClass.includes("scrissor")) {
      win = true;
    } else {
      draw = true;
    }
  }

  if (playerBoxClass.includes("paper")) {
    if (comBoxClass.includes("rock")) {
      win = true;
    } else if (comBoxClass.includes("scrissor")) {
      win = false;
    } else {
      draw = true;
    }
  }

  if (playerBoxClass.includes("scrissor")) {
    if (comBoxClass.includes("rock")) {
      win = false;
    } else if (comBoxClass.includes("paper")) {
      win = true;
    } else {
      draw = true;
    }
  }

  if (win) {
    playerScoreCount += 1;
    playerScore.innerText = playerScoreCount;
  } else if (!win && !draw) {
    comScoreCount += 1;
    comScore.innerText = comScoreCount;
  }

  if (playerScoreCount === 5 || comScoreCount === 5) {
    if (playerScoreCount === 5) {
      endGameText.innerText = "You Win!";
    } else {
      endGameText.innerText = "COM Win!";
    }
    endGameMessage.classList.add("show");
  }

  win = false;
  draw = false;
}

function disableButton() {
  rockButton.disabled = true;
  paperButton.disabled = true;
  scrissorButton.disabled = true;
}

function enableButton() {
  rockButton.disabled = false;
  paperButton.disabled = false;
  scrissorButton.disabled = false;
}
