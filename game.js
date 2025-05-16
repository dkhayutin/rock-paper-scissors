const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice(3);

let humanScore = 0;
let computerScore = 0;

function playGame(){
   


function playRound(humanChoice, computerChoice){
  console.log(computerSelection)
    if (humanChoice === 'rock'  &&  computerChoice === 'paper'){
    return console.log('You lose! Paper beats rock') + computerScore++
  } else if (humanChoice === 'paper' &&  computerChoice === 'scissors') {
    return console.log('You lose! Scissors, beats paper') + computerScore++
     } else if (humanChoice === 'scissors' && computerChoice   ==='rock') {
        return console.log('You lose! Rock beats scissors') + computerScore++
      } else if (humanChoice === 'paper'  &&  computerChoice === 'rock'){
         return console.log('You win!') + humanScore++
    }   else if (humanChoice === 'scissors' && computerChoice   ==='paper') {
         return console.log('You win!') + humanScore++
    }   else if (humanChoice === 'rock' && computerChoice  ==='scissors') {
      return console.log('You win!') + humanScore++
  }  else return console.log('It is a tie!')
  }
  playRound(humanSelection, computerSelection)
   
}

playGame()


    

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
  let string = prompt('Choose your weapon')
   if(string.toLowerCase() === 'rock'){
   return 'rock'
   } else if (string.toLowerCase() ==='paper'){
    return 'paper'
   } else if (string.toLowerCase() ==='scissors'){
    return 'scissors'
   } else {
    return 'Invalid input'
   }
  }


//console.log(getHumanChoice())