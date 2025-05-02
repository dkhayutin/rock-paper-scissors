let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
if (humanChoice === 'rock'  &&  computerChoice === 'paper'){
  return console.log('You lose! Paper beats rock')
} else if (humanChoice === 'paper' &&  computerChoice === 'scissors') {
  return console.log('You lose! Scissors, beats paper') 
   } else if (humanChoice === 'scissors' && computerChoice   ==='rock') {
      return console.log('You lose! Rock beats scissors')
    } else {
       return console.log('It looks a tie!')
    
  }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

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

console.log(getComputerChoice(3))

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


//getHumanChoice()
