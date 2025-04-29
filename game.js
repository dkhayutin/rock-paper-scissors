let humanScore = 0;
let computerScore = 0;

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
    console.log(string)
   } else if (string.toLowerCase() ==='paper'){
    console.log(string)
   } else if (string.toLowerCase() ==='scissors'){
    console.log(string)
   } else {
    console.log('Invalid input')
   }
  }


getHumanChoice()
