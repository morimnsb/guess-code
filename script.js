// Variables
let TrueGuess = 0;
let cpuNumbers =[];
var visual_monitor_list = [];
let index_Monitor=0;
let index_visual_coin = 0;
let Coins = 6;

const monitor = document.getElementsByClassName("monitor");
let coin = document.getElementsByClassName("coin");
let Game_status = false;
let b_value;


makeCpuNumbers()
// This function makes a list of four random numbers
function makeCpuNumbers(){
    for (let i = 0; i < 4; i++) {
        let x = Math.floor((Math.random() * 10));
        x = parseInt(x)
        // to not make a duplicate number
        if (cpuNumbers.includes(x)){
          i-=1;
        }
        else
          cpuNumbers.push(x);
    }
}



  // this function actives the game
// active just by start or Coins buttons
function startGame(button){
    
    b_value = parseInt(button.id);
    if (b_value < 10 & Game_status) {
          // check if de desk ready is
        if (visual_monitor_list.length < 4){
            // push new input into list
            visual_monitor_list.push(b_value) ;
            //  print new input in screen
            monitor[index_Monitor].innerHTML = visual_monitor_list[visual_monitor_list.length - 1];
        
            // green statement
            if ( visual_monitor_list[index_Monitor] === cpuNumbers[index_Monitor]){
            monitor[index_Monitor].style.background = "green" ;
            TrueGuess++

                if (TrueGuess === 4){
                  setTimeout(() => {
                    alert("WE have a winner!");
                  }, 20);

                }
            }
            //  yellow statement
            else if (cpuNumbers.includes(visual_monitor_list[visual_monitor_list.length -1])){
              monitor[index_Monitor].style.background = "yellow" ;
          
            }

              // red statement
            else {
            monitor[index_Monitor].style.background = "red" ;
            }
          
            index_Monitor += 1 ; 
            if(index_Monitor ===4 & TrueGuess != 4){
                if (Coins > 0) {
                  setTimeout(() => {
                  alert("noch!!!!"),miniReset();
                }, 20);
                  
                } else {
                  setTimeout(() => {
                    alert("Game over pin-code changhed "),resetGame();
                  }, 20)
                  
                }
                
            }     
            else if(index_Monitor ===4 & TrueGuess === 4){ 
              resetGame(); 
            }
        }  
    }    
    else if (b_value < 10 & !Game_status) {
        alert("press start or coins");
    }
    
    if (b_value > 10 & !Game_status) {
      
          // ask coin!!!
        if (Coins > 0 ){
        // use a coin to active game_status
          Coins -= 1;
          coin[index_visual_coin].style.background = "blue" ;
          Game_status = true ;
        // active monitor 
          monitor[0].style.background = "white" ;
          monitor[1].style.background = "white" ;
          monitor[2].style.background = "white" ;
          monitor[3].style.background = "white" ;

        // ready for next round
        index_visual_coin +=1;
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
    else if(b_value > 10 & Game_status){
      alert("guess the pin");
    }   
}

//  this function resets the game completely
function resetGame() {

  coin[0].style.background = "red"
  coin[1].style.background = "red"
  coin[2].style.background = "red"
  coin[3].style.background = "red"
  coin[4].style.background = "red"
  coin[5].style.background = "red"

  monitor[0].style.background = "red" ;
  monitor[1].style.background = "red" ;
  monitor[2].style.background = "red" ;
  monitor[3].style.background = "red" ;

  monitor[0].innerHTML ="?"
  monitor[1].innerHTML ="?"
  monitor[2].innerHTML ="?"
  monitor[3].innerHTML ="?"

  Coins =6;
  Game_status = false;
  index_visual_coin = 0;
  TrueGuess=0;
  cpuNumbers=[];
  makeCpuNumbers();
  
  visual_monitor_list = [];
  index_Monitor = 0;
}

//  this function resets the round game
function miniReset(){
  monitor[0].style.background = "white" ;
  monitor[1].style.background = "white" ;
  monitor[2].style.background = "white" ;
  monitor[3].style.background = "white" ;
  TrueGuess=0;
  visual_monitor_list = [];
  index_Monitor = 0;
  Game_status = false;
}


