// Variables
let trueGuess = 0;
let cpuNumbers = [];
let visualMonitorList = [];
let indexMonitor = 0;
let indexVisualCoin = 0;
let Coins = 6;
let winner = false;
const GUIDE = document.querySelector(".guide");
const MONITOR = document.getElementsByClassName("monitor");
const COIN = document.getElementsByClassName("coin");
let gameStatus = false;
let btnValue;

showMessage(1)
makeCpuNumbers()
console.log(cpuNumbers);
// This function makes a list of four random numbers
function makeCpuNumbers(){
    for (let i = 0; i < 4; i++) {
        let x = Math.floor((Math.random() * 10));
        x = parseInt(x)
        // to not make a duplicate number
        if (cpuNumbers.includes(x)){
          i--;
        }
        else
          cpuNumbers.push(x);
    }
}
  // this function actives the game
// active just by start or Coins buttons
function startGame(button){
    btnValue = parseInt(button.id);
    if (btnValue < 10 & gameStatus) {
          // check if de desk ready is
        if (visualMonitorList.length < 4){
            // push new input into list
            visualMonitorList.push(btnValue) ;
            //  print new input in screen
            MONITOR[indexMonitor].innerHTML = visualMonitorList[visualMonitorList.length - 1];
        
            // green statement
            if ( visualMonitorList[indexMonitor] === cpuNumbers[indexMonitor]){
              MONITOR[indexMonitor].style.background = "green" ;
              showMessage(5)
              trueGuess++

                if (trueGuess === 4){
                  showMessage(6)
                  gameStatus=false;
                  winner = true;
                }
            }
            //  yellow statement
            else if (cpuNumbers.includes(visualMonitorList[visualMonitorList.length -1])){
                MONITOR[indexMonitor].style.background = "yellow";
                showMessage(3)
            }
              // red statement
            else {
                MONITOR[indexMonitor].style.background = "red";
                showMessage(4)
            }
            indexMonitor ++; 
            if(indexMonitor ===4 & trueGuess != 4){
                if (Coins > 0) {
                    setTimeout(() => {
                    prepareDesk();
                    }, 1000);
                    setTimeout(() => {
                      showMessage(8) ;
                      }, 500);
                     
                } else {
                  gameStatus=false;
                  showMessage(7)
                }
                
            }     
            else if(indexMonitor === 4 & trueGuess === 4){ 
              // resetGame(); 
            }
        }  
    }    
    else if (btnValue < 10 && !gameStatus) {
      if(Coins>0 && !winner ){
        showMessage(1)
      }else if(Coins>0 && winner){
        console.log(Coins,winner,"91");
        showMessage(9)
      }
      else{
        showMessage(7)
      }    
    }
    
    if (btnValue > 10 & !gameStatus) {
          // ask coin!!!
        if (Coins > 0 && !winner){
        // use a coin to active gameStatus
          Coins --;
          COIN[indexVisualCoin].style.background = "blue";
          gameStatus = true;
        // active MONITOR 
          MONITOR[0].style.background = "white";
          MONITOR[1].style.background = "white";
          MONITOR[2].style.background = "white";
          MONITOR[3].style.background = "white";

        // ready for next round
        indexVisualCoin ++;
        showMessage(2)
        }
            //  check if have coin to continue
            // if win ask to restart
        else {            
            if (Coins > 0 && winner) {
              showMessage(9)
            }
            else if(Coins <= 0 && winner){
              showMessage(9)             
            } 
        }
    } 
    // do not spend extra coin
    else if(btnValue > 10 & gameStatus){
      showMessage(2)
    }   
}

//  this function resets the game completely
function resetGame() {

  COIN[0].style.background = "red";
  COIN[1].style.background = "red";
  COIN[2].style.background = "red";
  COIN[3].style.background = "red";
  COIN[4].style.background = "red";
  COIN[5].style.background = "red";

  MONITOR[0].style.background = "red";
  MONITOR[1].style.background = "red";
  MONITOR[2].style.background = "red";
  MONITOR[3].style.background = "red";

  MONITOR[0].innerHTML ="?";
  MONITOR[1].innerHTML ="?";
  MONITOR[2].innerHTML ="?";
  MONITOR[3].innerHTML ="?";

  Coins = 6;
  gameStatus = false;
  indexVisualCoin = 0;
  trueGuess = 0;
  cpuNumbers= [];
  makeCpuNumbers();
  visualMonitorList = [];
  indexMonitor = 0;
  showMessage(1)
  winner = false;
}

//  this function prepare the round game
function prepareDesk(){
  MONITOR[0].style.background = "white";
  MONITOR[1].style.background = "white";
  MONITOR[2].style.background = "white";
  MONITOR[3].style.background = "white";
  trueGuess = 0;
  visualMonitorList = [];
  indexMonitor = 0;
  gameStatus = false;
  showMessage(1)
}
// this function guides the player 
function showMessage(message){
  if(message===1){
    GUIDE.lastElementChild.innerHTML="<h1>Press Start</h1>";
    GUIDE.style.background = "#f8f2f8a4";

  }

  if (message===2){
    GUIDE.lastElementChild.innerHTML="<h1>Enter your guess number</h1>";
    }
  if (message===3) {
    GUIDE.lastElementChild.innerHTML="<h1>Correct number BUT wrong place</h1>";
    GUIDE.style.background = "yellow";
    
  } 
  if(message===4){
    GUIDE.lastElementChild.innerHTML="<h1>Wrong number </h1>";
    GUIDE.style.background = "red";
  } 
  if(message===5){
    GUIDE.lastElementChild.innerHTML="<h1>Correct number AND Correct place</h1>";
    GUIDE.style.background = "green";
  } 
  
  if(message===6){
    GUIDE.lastElementChild.innerHTML="<h1>WE have a winner!</h1>";
    GUIDE.style.background = "gold";
  } 
  
  if(message===7){
    GUIDE.lastElementChild.innerHTML="<h1>Game over pin-code changed Please restart the game</h1>";
    GUIDE.style.background = "gold";
  } 
  if(message===8){
    GUIDE.lastElementChild.innerHTML="<h1>NO! Press START to Try again</h1>";
    GUIDE.style.background = "gold";
  } 
  if(message===9){
    GUIDE.lastElementChild.innerHTML="<h1>Press RESTART to play again</h1>";
    GUIDE.style.background = "gold";
  } 
}

 

