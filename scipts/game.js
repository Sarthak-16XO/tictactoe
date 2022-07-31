// Function used for restarting the game
function restartGame(){
    activePlayer = 0;
    currentRound = 1;
    gameIsOver = false;
    gameOverElement.firstElementChild.innerHTML = 
    "You won, <span>Player Name</span>!";
    gameOverElement.style.display = "none";
    
    var gameBoardIndex = 0;
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
            gameData[i][j] = 0;
            const gameBoardItemElement = gameBoardElement.children[gameBoardIndex];
            gameBoardItemElement.textContent = "";
            gameBoardItemElement.classList.remove("disabled");
            gameBoardIndex++;
        }
    }
    
}

// Function used for starting the game
function startNewGame() {
    if (players[0].name === "" || players[1].name === "") {
        gameStartErrorElement.textContent = "Please enter the custom player names for starting the Game!";
        return;
    }
    else{
        gameStartErrorElement.textContent = "";
    }
    
    activePlayerNameElement.textContent = players[activePlayer].name;
    gameBoardElement.style.display = "block";
    
}

// Function used for switching between two players
function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activePlayerNameElement.textContent = players[activePlayer].name;
}

// Function used for displaying the selected game field
function selectGameField(event) {
    
    if(gameIsOver === true){
        return;
    }
    
    const selectField = event.target;
    const selectColumn = selectField.dataset.col - 1;
    const selectRow = selectField.dataset.row - 1;

    if (gameData[selectRow][selectColumn] > 0) {
        alert("Please select an empty field!!");
        return;
    }
    selectField.textContent = players[activePlayer].symbol;
    selectField.classList.add("disabled");

    gameData[selectRow][selectColumn] = activePlayer + 1;

    const winnerId = checkForGameOver();
    // console.log(winnerId)
    if(winnerId !== 0) {
        endGame(winnerId);
    }

    currentRound++;
    switchPlayer();
}

// Function used for checking the result of the game
function checkForGameOver() {
    //Checking the rows for equality
    for(var i =0; i<3 ; i++){
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] &&
            gameData[i][1] === gameData[i][2]
        ) {
            return gameData[i][0];
        }
    }
    //Checking the columns for equality
    for(var i =0; i<3 ; i++){
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[0][i] === gameData[2][i]
        ) {
            return gameData[0][i];
        }
    }

    // Diagonal: Top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0];
    }

    // Diagonal: Bottom left to top right
    if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0];
    }

    if(currentRound === 9) {
        return -1;
    }

    return 0;
}

// Function for ending the game and displaying the winner name
function endGame(winnerId) {
    gameIsOver = true;
    gameOverElement.style.display = "block";
    if(winnerId > 0){
        gameOverElement.firstElementChild.firstElementChild.textContent = players[winnerId - 1].name;    
    }
    else{
        gameOverElement.firstElementChild.textContent = "It\'s a draw!";
    }
}