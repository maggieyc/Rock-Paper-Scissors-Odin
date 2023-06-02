let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
const btns = document.querySelectorAll('button.choice');
const score1 = document.querySelector('.player1-score');
const score2 = document.querySelector('.player2-score');

function getComputerChoice(){
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random()*3)];
}


function playRound(){

  if (playerScore === 5){
    alert("Player Won!");
    return;
  }
  
  if (computerScore ===5){
    alert("Computer Won!");
    return;
  }
  
  playerSelection = this.id;
  computerSelection = getComputerChoice();

  let result;

  if (playerSelection === computerSelection){
    result = "Tie!"
  } else if (playerSelection === "rock"){
    if (computerSelection === "paper"){
      result =  "You Lose! Paper beats Rock";
      computerScore++;
    } else {
      result =  "You Win! Rock beats Scissors";
      playerScore++;
    }
  } else if (playerSelection === "paper"){
    if (computerSelection === "scissors"){
      result =  "You Lose! Scissors beats Paper";
      computerScore++;
    } else {
      result = "You Win! Paper beats Rock";
      playerScore++;
    }
  } else {
    // playerSelection === "scissors" is true
    if (computerSelection === "rock"){
      result = "You Lose! Rock beats Scissors";
      computerScore++;
    } else {
      result = "You Win! Scissors beats Paper";
      playerScore++;
    }
  }

  score1.innerHTML = playerScore;
  score2.innerHTML = computerScore;
  results.innerHTML = `${result}`
  
}

btns.forEach(btn => btn.addEventListener('click', playRound));

