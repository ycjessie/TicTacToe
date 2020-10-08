console.log('it works!')
const Gameboxdiv=document.querySelectorAll(".game-box");
    console.log(Gameboxdiv);
const Nextdiv=document.querySelector('.next-turn');
const gameStartdiv=document.querySelector('.game-status');
const Resetdiv=document.querySelector('.reset');
let Activegame = true;
let startPlayer = "O";
const PlayerTurn= function(){
    return `Player ${startPlayer} turn`;
}
let gameStart = ["", "", "", "", "", "", "", "", ""];
 
Resetdiv.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Reset...');
    Activegame = true;
    currentPlayer = "O";
    gameStart = ["", "", "", "", "", "", "", "", ""];
    // Nextdiv.innerHTML = currentPlayerTurn();
    gameStartdiv.innerHTML = PlayerTurn();
    document.querySelectorAll(".game-box").forEach((element)=>{
        element.innerHTML = ""
    });
   
 })


//=================================
 // next-turn: querySelector
 //game-status:querySelector
 //clickable game-box: querySelectorAll;(done)
 //click to reset; querySelector (done)
 //=================================

 //Start game status
 //Active game //
 //Default O start player:

 //set
 //************************//
 //reset game
  //************************//

 //gameStartdiv (#game-status)
 //display message with start player O
 //reset all game-box to blank
 


 

 //click  for choose O or X
 //if one pick o then the other X
 
 //message after each turn
 //can't click on box twice
 //stop the game when one win/lose/tie
 //automatically start a new game