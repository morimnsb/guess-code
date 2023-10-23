// Variables
let trueGuess = 0;
let cpuNumbers = [];
let visualMonitorList = [];
let indexMonitor = 0;
let indexVisualCoin = 0;
let Coins = 6;

const MONITOR = document.getElementsByClassName("monitor");
const COIN = document.getElementsByClassName("coin");
let gameStatus = false;
let btnValue;


makeCpuNumbers()
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
            trueGuess++

                if (trueGuess === 4){
                  setTimeout(() => {
                    alert("WE have a winner!");
                  }, 20);

                }
            }
            //  yellow statement
            else if (cpuNumbers.includes(visualMonitorList[visualMonitorList.length -1])){
              MONITOR[indexMonitor].style.background = "yellow";
          
            }

              // red statement
            else {
              MONITOR[indexMonitor].style.background = "red";
            }
          
            indexMonitor ++; 
            if(indexMonitor ===4 & trueGuess != 4){
                if (Coins > 0) {
                  setTimeout(() => {
                  alert("noch!!!!"),prepareDesk();
                }, 20);
                  
                } else {
                  setTimeout(() => {
                    alert("Game over pin-code changhed "),resetGame();
                  }, 20)
                  
                }
                
            }     
            else if(indexMonitor === 4 & trueGuess === 4){ 
              resetGame(); 
            }
        }  
    }    
    else if (btnValue < 10 & !gameStatus) {
        alert("press start or coins");
    }
    
    if (btnValue > 10 & !gameStatus) {
      
          // ask coin!!!
        if (Coins > 0 ){
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
        }
            //  check is have coin to continue
        else {
            if (Coins > 0) {
              alert("Please guess the pin")
            }
            else{
              alert("No more Coin, reset the game");
            
            }   
        }
    } 
    // do not spend extra coin
    else if(btnValue > 10 & gameStatus){
      alert("guess the pin");
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
}


