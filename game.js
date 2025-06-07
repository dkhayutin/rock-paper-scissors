let humanScore = 0;
let computerScore = 0;

const button1 = document.querySelector("#rock")
button1.addEventListener("click", () => {
  playRound(button1, getComputerChoice(3))
 })

 const button2 = document.querySelector("#paper")
 button2.addEventListener("click", () => {
  playRound(button2, getComputerChoice(3))
 })
 
 const button3 = document.querySelector("#scissors")
 button3.addEventListener("click", () => {
  playRound(button3, getComputerChoice(3))
 })
 

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice(3);
 
function playGame(){
 

}

function playRound(humanChoice, computerChoice){
 console.log(computerChoice)

  
    if (humanChoice === button1  &&  computerChoice === 'paper'){
    return console.log('You lose! Paper beats rock') + computerScore++
  } else if (humanChoice === button2 &&  computerChoice === 'scissors') {
    return console.log('You lose! Scissors, beats paper') + computerScore++
     } else if (humanChoice === button3 && computerChoice   ==='rock') {
        return console.log('You lose! Rock beats scissors') + computerScore++
      } else if (humanChoice === button2  &&  computerChoice === 'rock'){
         return console.log('You win!') + humanScore++
    }   else if (humanChoice === button3 && computerChoice   ==='paper') {
         return console.log('You win!') + humanScore++
    }   else if (humanChoice === button1 && computerChoice  ==='scissors') {
      return console.log('You win!') + humanScore++
  }  else return console.log('It is a tie!')
 
}


 // playRound(humanSelection,computerSelection)





//  playGame()
// playGame()
// playGame()
// playGame()
// playGame()


function getWinner(){
  if (humanScore > computerScore) {
    return console.log ('Congratulation, You are the winner')
  } else if (humanScore < computerScore ) {
    return console.log('Sorry, you have lost!')
  } else  {
    return console.log ('We have a tie game!')
  }
}

getWinner()



function getComputerChoice(num){
  let string = Math.floor(Math.random() * num)
   if(string == 0) {
    return 'rock'
   } else if (string == 1){
    return 'paper'
   } else {
    return 'scissors'
   }
  
}

//console.log(getComputerChoice(3))

function getHumanChoice(){
 

  // if(button1)
  //   return console.log('Rock')
  // if (button2) 
  //   return console.log ('Paper')
  // if(button3) 
  //   return console.log('Scissors')
}
//console.log(getHumanChoice())