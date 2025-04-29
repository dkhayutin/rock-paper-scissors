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

