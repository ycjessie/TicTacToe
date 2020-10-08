console.log('it works!')
const Gameboxdiv=document.querySelectorAll(".game-box");
    //console.log(Gameboxdiv);
const Nextdiv=document.querySelector('.next-turn');
const Resetdiv=document.querySelector('.reset');
 
Resetdiv.addEventListener('click',(event)=>{
    event.preventDefault();
    console.log('Reset...');
   
 })


//=================================
 //Default X to start: querySelector
 //clickable game-box: querySelectorAll;(done)
 //click to reset; querySelector (done)
 //=================================

 //Active game //click a box start
 

 //click  for choose O or X
 //if one pick o then the other X
 
 //message after each turn
 //can't click on box twice
 //stop the game when one win/lose/tie
 //automatically start a new game