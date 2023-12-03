// game.js
function getComputerChoice() {
    const choices = ['Piedra', 'Papel', 'Tijeras'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    const playerChoice = playerSelection.toLowerCase();

    if (playerChoice === computerSelection.toLowerCase()) {
        return '¡Es un empate! Vuelve a jugar la ronda.';
    } else if (
        (playerChoice === 'Piedra' && computerSelection === 'Tijeras') ||
        (playerChoice === 'papel' && computerSelection === 'Piedra') ||
        (playerChoice === 'Tijeras' && computerSelection === 'Papel')
    ) {
        return `¡Ganaste! ${playerChoice} vence a ${computerSelection}.`;
    } else {
        return `¡Perdiste! ${computerSelection} vence a ${playerChoice}.`;
    }
}

function playGame(playerSelection) {
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').innerText = result;
}


