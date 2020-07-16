const gameStatus = document.querySelector(".game-status");
// declare a variable to get current user
let currentPlayer = "X";

let gameActive = true;

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

function handlePlayerChange(){
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    gameStatus.innerHTML = currentPlayerTurn();

}

function handleResult(){
    let roundWin = false;

    for(var i=0;i<=7;i++){
        const winCondition = winConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];

        if(a === '' || b === '' || c === ''){
            continue;
        }

        if(a === b && b === c){
            roundWin = true;
            gameActive = false;
            break;
        }
    }

    if(roundWin){
        gameStatus.innerHTML = winMessage();
        return;
    }

    let roundDraw = !gameState.includes("");

    if(roundDraw){
        gameStatus.innerHTML=drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange()



}


function handleItemClick(clickedItemEvent){
    const clickedItem = clickedItemEvent.target;
    const clickedItemIndex = parseInt(clickedItem.getAttribute("data-id"));

    if(gameState[clickedItemIndex]!=="" || !gameActive){
        return;
    }

    handleItemPlayed(clickedItem,clickedItemIndex);

    handleResult()

}

function handelRestartGame(){
    gameActive = true;
    currentPlayer = "X";
    gameState = ["","","","","","","","",""];
    gameStatus.innerHTML = currentPlayerTurn();
    document.querySelectorAll(".item").forEach(item => item.innerHTML='');
}

document.querySelectorAll(".item").forEach(item => item.addEventListener("click",handleItemClick));

document.querySelector("#restart").addEventListener('click',handelRestartGame);