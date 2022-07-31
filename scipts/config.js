//For opening edit player name overlay
function openPlayerConfig(event) {
    editedPlayer = +event.target.dataset.playerid;         //+"1" = 1
    playerConfigOverlayElement.style.display = "block";
    backdropElement.style.display = "block";
}

//For closing edit player name overlay
function closePlayerConfig() {
    playerConfigOverlayElement.style.display = "none";
    backdropElement.style.display = "none";
    formElement.firstElementChild.classList.remove("error");
    errorConfigElement.textContent = "";
    document.getElementById("playername").value = "";
}
    
//For editing player name in overlay
function savePlayerConfig(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get("playername").trim();
    
    if(!enteredPlayerName){           //enteredPlayerName === ""
        event.target.firstElementChild.classList.add("error");   
        errorConfigElement.textContent = "Please enter a valid name!";
        return;
    }

    const updatedPlayerDataElement = document.getElementById("player-" + editedPlayer + "-data")
    updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

    players[editedPlayer - 1].name = enteredPlayerName;
    enteredPlayerName.textContent = "";
    closePlayerConfig();
}
    