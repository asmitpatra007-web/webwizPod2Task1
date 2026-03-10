let userScore = 0;
let compScore = 0;
let comp_choice='';

const choices = document.querySelectorAll(".choice");
const result = document.querySelector("#result");

const userScorePara = document.querySelector("#your_score");
const compScorePara = document.querySelector("#comp_score");

const genCompChoice = () => {
      let c = Math.random();
      if (c >= 0 && c < 1 / 3) {
          comp_choice = 'rock';
      } else if (c >= 1 / 3 && c < 2 / 3) {
          comp_choice = 'paper';
      } else if (c >= 2 / 3 && c < 1) {
          comp_choice = 'scissor';
      }
      return comp_choice;
};

const drawGame = () => {
  result.innerText = "Draw. Play again.";
  result.style.backgroundColor = "#1a77e1";
};

const declareWinner = (winner) => {
  result.innerText = `${winner} won the game!`;
  result.style.backgroundColor = "purple";


  choices.forEach((choice) => {
    choice.style.pointerEvents = "none";
  });
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    result.innerText = `Your point! Your ${userChoice} beats ${compChoice}`;
    result.style.backgroundColor = "green";
    if (userScore === 5) {
      declareWinner("You");
    }

  } else {
    compScore++;
    compScorePara.innerText = compScore;
    result.innerText = `Computers point. ${compChoice} beats your ${userChoice}`;
    result.style.backgroundColor = "red";
    if (compScore === 5) {
      declareWinner("Computer");
    }
  }
};

const playGame = (userChoice) => {
  const compChoice = genCompChoice();

  if (userChoice === compChoice) {
    //Draw Game
    drawGame();
  }else {
    let userWin = true;
    if(userChoice === "rock") {
      //scissors,paper
      //userWin = compChoice === "paper" ? false : true;
      if (compChoice==='paper'){
        userWin=false;
      }else if(compChoice==='scissor'){
        userWin=true;
      }
    }else if (userChoice === "paper") {
      //rock,scissors
      // userWin = compChoice === "scissors" ? false : true;
      if (compChoice==='scissor'){
        userWin=false;
      }else if(compChoice==='rock'){
        userWin=true;
      }
    }else {
      //rock,paper
      // userWin = compChoice === "rock" ? false : true;
      if (compChoice==='rock'){
        userWin=false;
      }else if(compChoice==='paper'){
        userWin=true;
      }
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});


