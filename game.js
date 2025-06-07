let computerScore = 1;
let humanScore = 1 ;

const button1 = document.querySelector("#rock")
button1.addEventListener("click", () => {
  playRound(button1, getComputerChoice(3))
  getWinner()
 })

 const button2 = document.querySelector("#paper")
 button2.addEventListener("click", () => {
  playRound(button2, getComputerChoice(3))
  getWinner()
 })
 
 const button3 = document.querySelector("#scissors")
 button3.addEventListener("click", () => {
  playRound(button3, getComputerChoice(3))
  getWinner()
 })
 

 const humanSelection = getHumanChoice();
 const computerSelection = getComputerChoice(3);

function playRound(humanChoice, computerChoice){
 console.log(computerChoice)


const humanResult = document.querySelector("#results")
const myRound = document.createElement('p')
myRound.textContent = "You have won and your score = " + humanScore


 const opponentResults = document.querySelector("#results")
 const opponentScore = document.createElement("p")
 opponentScore.textContent = 'Computer has won and computer score is = ' + computerScore 

 const noWinner = document.querySelector("#results")
 const tiedGame = document.createElement("p")
 tiedGame.textContent = 'Tied Game'

  
    if (humanChoice === button1  &&  computerChoice === 'paper'){
    return opponentResults.appendChild(opponentScore)  + computerScore++
  } else if (humanChoice === button2 &&  computerChoice === 'scissors') {
    return opponentResults.appendChild(opponentScore) + computerScore++
     } else if (humanChoice === button3 && computerChoice   ==='rock') {
        return opponentResults.appendChild (opponentScore) + computerScore++
      } else if (humanChoice === button2  &&  computerChoice === 'rock'){
         return humanResult.appendChild(myRound) + humanScore++
    }   else if (humanChoice === button3 && computerChoice === 'paper') {
         return humanResult.appendChild(myRound) + humanScore++
    }   else if (humanChoice === button1 && computerChoice  ==='scissors') {
      return humanResult.appendChild(myRound) + humanScore++
  }  else 
      return noWinner.appendChild(tiedGame)
 
}

function getWinner(){
  if(computerScore === 6) {
  alert('Computer has Won')
} else if (humanScore === 6) {
 alert('You have won!')
} 

}

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