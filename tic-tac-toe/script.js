const gameStatus = document.querySelector(".game-status");
// declare a variable to get current user
let currentPlayer = "X";

// declare an array to mange game state
let gameState = ["","","","","","","","",""];

const winMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game Draw`;
const currentPlayerTurn = () => `It's ${currentPlayer} turn`;

gameStatus.innerHTML = currentPlayerTurn();

const winConditions = [  
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]   
]; 

function handleItemPlayed(clickedItem,clickedItemIndex){
    gameState[clickedItemIndex] = currentPlayer;
    clickedItem.innerHTML=currentPlayer;
}

function handleResult(){
    let roundWin = false;

    for(var i=0;i<=7;i++){
        const winCondition = winConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
    }

}


function handleItemClick(clickedItemEvent){
    const clickedItem = clickedItemEvent.target;
    const clickedItemIndex = parseInt(clickedItem.getAttribute("data-id"));

    if(gameState[clickedItemIndex]!==""){
        return;
    }

    handleItemPlayed(clickedItem,clickedItemIndex);
}


document.querySelectorAll(".item").forEach(item => item.addEventListener("click",handleItemClick));