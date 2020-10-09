console.log('it works!')
const Gameboxdiv=document.querySelectorAll(".game-box");//allButtons
    console.log(Gameboxdiv);
const GameContainerdiv=document.querySelector(".game-container");//buttonContainer
const Nextdiv=document.querySelector('.next-turn');
const gameStartdiv=document.querySelector('.game-status');
const Resetdiv=document.querySelector('.reset');
let Activegame = true;
let startPlayer = "X";
const PlayerTurn= function(){
   
    return `Player ${startPlayer} turn`;
}
const winMsg= function(){
    return `Player ${startPlayer} wins!`;
}
let gameStart = ["", "", "", "", "", "", "", "", ""];
//gameStartdiv.innerHTML = PlayerTurn();

//***********Click box  *******************/
GameContainerdiv.addEventListener('click',(event)=>{
    //console.log('game container: clicked');
    //console.log(event);//mouse click event works also show target.classList
    //event.target.innerText=startPlayer//'HELLO' replace with startPlayer
    
    let boxClick=event.target.classList[2];
    let boxLocation=event.target.classList[1];
    //console.log(`box ${boxLocation} click`);
    if(boxClick==="X"|| boxClick==="O"){
        return;//No click twice
    }
    if(event.target.innerText==='')
        event.target.innerText=startPlayer;
        event.target.classList.add(startPlayer)
       
        if(startPlayer==="X"){
            startPlayer="O"; //change Player
            //console.log("first")
            console.log(event.target.classList);//show mouse click on a specific box
            gameStartdiv.innerHTML = PlayerTurn();
        }
        else{
            startPlayer="X"
            startPlayer!=startPlayer
            //console.log("next")
            console.log(event.target.classList);
            event.target.classList.add(startPlayer)
            gameStartdiv.innerHTML = PlayerTurn();
        }    
        //console.log(event)//mouse click event
        //console.log(event.target.classList);//show mouse click on a specific box
        
})  
//*********************RESET GAME *******************/
Resetdiv.addEventListener('click',(event)=>{
     event.preventDefault();
    Activegame = true;
    startPlayer="X";
    gameStart = ["", "", "", "", "", "", "", "", ""];
    
    document.querySelectorAll(".game-box").forEach((element)=>{
        element.innerHTML = ""
    });
   
 })
  


//***************show which box is click */
    //  if(event.target.classList.contains('game-box')){
        
    //     Gameboxdiv.forEach((elm,index)=>{
    //         if(elm===event.target){
    //             console.log(`${index + 1} clicked`);
    //         }
    //         else{

    //         }
    //     })
    //  }




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