console.log("it works!");
const Gameboxdiv = document.querySelectorAll(".game-box"); //allButtons
//console.log(Gameboxdiv);
const GameContainerdiv = document.querySelector(".game-container"); //buttonContainer
const Nextdiv = document.querySelector(".next-turn");
const gameStartdiv = document.querySelector(".game-status");

// const player1div = document.querySelector(".player > #player1");
// //console.log(player1div.innerText);
// const player2div = document.querySelector("#player2");
const Resetdiv = document.querySelector(".reset");

//game variables
let Activegame = true;
let startPlayer = "X";
let gameWinner = null;
gameStartdiv.innerHTML = "Let's Play";
//Potential Extra variables
let currentPlayer = 0;
let points1 = 0;
let points2 = 0;

const PlayerTurn = function () {
  return `Player ${startPlayer} turn`; //UserStories: Show turns
};
const winMsg = function (element) {
  Activegame = false;
  //console.log(element)
  gameWinner = element;
  gameStartdiv.innerHTML = `${gameWinner} wins`; //UserStories: Show winner
  //return `Player ${startPlayer} wins!`;
};
const checkWinner = function (element) {//Potential Extra: count winner
  Activegame = false;
  console.log( `${gameWinner}`)
  if (currentPlayer == 0 && gameWinner==="X") {
    points1++;
    document.getElementById("player1").innerHTML = points1;
  } else {
    points2++;
    document.getElementById("player2").innerHTML = points2;
  }
  
};

//***********UserStories:  check game status*******************/
const Gamestatus = function () {
  const gamebox1 = Gameboxdiv[0].classList[2];
  const gamebox2 = Gameboxdiv[1].classList[2];
  const gamebox3 = Gameboxdiv[2].classList[2];
  const gamebox4 = Gameboxdiv[3].classList[2];
  const gamebox5 = Gameboxdiv[4].classList[2];
  const gamebox6 = Gameboxdiv[5].classList[2];
  const gamebox7 = Gameboxdiv[6].classList[2];
  const gamebox8 = Gameboxdiv[7].classList[2];
  const gamebox9 = Gameboxdiv[8].classList[2];
  // console.log(gamebox1,gamebox2,gamebox3,gamebox4,gamebox5,gamebox6,gamebox7,gamebox8,gamebox9)

  //*************UserStories:check winner ***************/

  if (gamebox1 && gamebox1 === gamebox2 && gamebox2 === gamebox3) {
    // console.log(gamebox1);
    // Activegame=false;
    // gameWinner=gamebox1;
    // gameStartdiv.innerHTML = `${gameWinner} wins`;
    winMsg(gamebox1);
    checkWinner(gamebox1);//*************Potential Extra***************/
  } else if (gamebox1 && gamebox1 === gamebox4 && gamebox4 === gamebox7) {
    winMsg(gamebox1);
    checkWinner(gamebox1);
  } else if (gamebox4 && gamebox4 === gamebox5 && gamebox5 === gamebox6) {
    winMsg(gamebox4);
    checkWinner(gamebox4);
  } else if (gamebox7 && gamebox7 === gamebox8 && gamebox8 === gamebox9) {
    winMsg(gamebox7);
    checkWinner(gamebox7);
  } else if (gamebox1 && gamebox1 === gamebox4 && gamebox4 === gamebox7) {
    winMsg(gamebox7);
    checkWinner(gamebox7);
  } else if (gamebox2 && gamebox2 === gamebox5 && gamebox5 === gamebox8) {
    winMsg(gamebox2);
    checkWinner(gamebox2);
  } else if (gamebox3 && gamebox3 === gamebox6 && gamebox6 === gamebox9) {
    winMsg(gamebox3);
    checkWinner(gamebox3);
  } else if (gamebox1 && gamebox1 === gamebox5 && gamebox5 === gamebox9) {
    winMsg(gamebox1);
    checkWinner(gamebox1);
  } else if (gamebox3 && gamebox3 === gamebox5 && gamebox5 === gamebox7) {
    winMsg(gamebox3);
    checkWinner(gamebox3);
  } else if (
    gamebox1 &&
    gamebox2 &&
    gamebox3 &&
    gamebox4 &&
    gamebox5 &&
    gamebox6 &&
    gamebox7 &&
    gamebox8 &&
    gamebox9
  ) {
    Activegame = false;
    gameStartdiv.innerHTML = "TIE. No Winner!!";
  }
};

//***********UserStories: Click box  *******************/
GameContainerdiv.addEventListener("click", (event) => {
  //console.log('game container: clicked');
  //console.log(event);//mouse click event works also show target.classList
  //event.target.innerText=startPlayer//'HELLO' replace with startPlayer
  if (Activegame === true) {
    //UserStories: stop the game when there is a win

    let boxClick = event.target.classList[2];
    let boxLocation = event.target.classList[1];
    //console.log(`box ${boxLocation} click`);
    if (boxClick === "X" || boxClick === "O") {
      return; //UserStories: No click same boxtwice
    }
    if (event.target.innerText === "") {
      event.target.innerText = startPlayer; //UserStories: Assign X the 1startPlayer
      event.target.classList.add(startPlayer);
    }
    //console.log(event.target.classList);
  
    if (startPlayer === "X") {
      startPlayer = "O"; //change Player
      gameStartdiv.innerHTML = PlayerTurn();
      
      Gamestatus();

      //console.log("first")
      // console.log(event.target);
      //console.log(event.target.classList); //show mouse click on a specific box
    } else {
      startPlayer = "X";
      //player1div.innerText=startPlayer;
      //console.log("next")
      //console.log(event.target.classList)
      event.target.classList.add(startPlayer);
      gameStartdiv.innerHTML = PlayerTurn();
      Gamestatus();
    }
    //console.log(event)//mouse click event
    //console.log(event.target.classList);//show mouse click on a specific box
  }
});

//*********************RESET GAME *******************/
Resetdiv.addEventListener("click", (event) => {
  event.preventDefault();

  //console.log(event)
  //console.log(event.target.classList[0]);
  startPlayer = "X";
  Activegame = true;
  gameStartdiv.innerHTML = `Let's Play! ${startPlayer} is next`;
  document.querySelectorAll(".game-box").forEach((element) => {
    element.innerHTML = "";
    element.classList.remove("X");
    element.classList.remove("O");

    //console.log(element.classList[2])
  });
});

//=================================
// next-turn: querySelector
//game-status:querySelector
//clickable game-box: querySelectorAll;(done)
//click to reset; querySelector (done)
//=================================

//Start game status
//Active game //
//Default player O:

//set
//************************//
//reset game
//************************//

//gameStartdiv (#game-status)
//display message with player O starting
//reset all game-box to blank

//click  for choose O or X
//if one pick o then the other X

//message after each turn
//win msg
//gameStartdiv.innerHTML = winMsg();
//can't click on box twice
//stop the game when one win/lose/tie
//automatically start a new game
