function getComputerChoice(){
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random()*3)];
}

function playRound(playerSelection, computerSelection){
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  if (playerSelection === computerSelection){
    return "Tie!"
  } else if (playerSelection === "rock"){
    if (computerSelection === "paper"){
      return "You Lose! Paper beats Rock";
    } else {
      return "You Win! Rock beats Scissors"
    }
  } else if (playerSelection === "paper"){
    if (computerSelection === "scissors"){
      return "You Lose! Scissors beats Paper";
    } else {
      return "You Win! Paper beats Rock"
    }
  } else {
    // playerSelection === "scissors" is true
    if (computerSelection === "rock"){
      return "You Lose! Rock beats Scissors";
    } else {
      return "You Win! Scissors beats Paper"
    }
  }
}

function game(){
  for (let i = 0; i < 5; i++){
    let playerSelection = prompt("Rock, Paper, Scissors, SHOOT! Pick one:");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}
