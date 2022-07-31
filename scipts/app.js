const gameData = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

var editedPlayer = 0;
var activePlayer = 0;
var currentRound = 1;
var gameIsOver= false;

const players = [
    {
        name: "",
        symbol: "X"
    },
    {
        name: "",
        symbol: "O"
    },
];

const playerConfigOverlayElement = document.getElementById("config-overlay");
const backdropElement = document.getElementById("backdrop");
const errorConfigElement = document.getElementById("error-config");
const formElement = document.querySelector("form");
const gameBoardElement = document.getElementById("active-game");
const gameStartErrorElement = document.getElementById("game-start-error");
const activePlayerNameElement = document.getElementById("active-player-name");
const gameOverElement  = document.getElementById("game-over");


// All Button Elements
const editPlayer1Element = document.getElementById("edit-player-1");
const editPlayer2Element = document.getElementById("edit-player-2");
const cancelConfigButtonElement = document.getElementById("cancel-config");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");
const restartGameBtnElement = document.getElementById("restart-game-btn");


// Event Listners
editPlayer1Element.addEventListener("click", openPlayerConfig);
editPlayer2Element.addEventListener("click", openPlayerConfig);

backdropElement.addEventListener("click", closePlayerConfig);
cancelConfigButtonElement.addEventListener("click", closePlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

startNewGameBtnElement.addEventListener("click", startNewGame);


for (const gameFieldElement of gameFieldElements) {
    gameFieldElement.addEventListener("click", selectGameField);
}


restartGameBtnElement.addEventListener("click", restartGame);


