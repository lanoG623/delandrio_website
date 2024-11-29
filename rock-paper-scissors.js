function playGame(playerChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  const result = getResult(playerChoice, computerChoice);

  displayResult(playerChoice, computerChoice, result);
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return 'It\'s a tie!';
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}

function displayResult(playerChoice, computerChoice, result) {
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = `
    You chose ${playerChoice}.<br>
    Computer chose ${computerChoice}.<br>
    ${result}
  `;
}
