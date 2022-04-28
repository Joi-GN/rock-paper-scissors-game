const computerDisplay = document.getElementById('computer');
const computerChoiceDisplay = document.getElementById('com-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const choicesButtons = document.querySelector('.choices');
const result = document.getElementById('result');

let userChoice, computerChoice;
const choices = ["rock", "paper","scissors"];

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.addEventListener('click', setUserChoice)
});

function setUserChoice(){
    userChoice = this.id;
    userChoiceDisplay.textContent = this.textContent;
    choicesButtons.style.display = 'none';

    buttons.forEach(button => {
        button.removeEventListener('click', setUserChoice)
    })

    generateComputerChoice();
}

function generateComputerChoice(){
    let randomChoice = Math.floor(Math.random()*3);
    computerChoice = choices[randomChoice];
    displayComputerChoice();
    setGameResults();
}

function displayComputerChoice(){
    computerDisplay.style.display = 'flex';
    
    if (computerChoice === 'rock'){
        computerChoiceDisplay.textContent = '✊';
    } else if (computerChoice === 'paper'){
        computerChoiceDisplay.textContent = '✋';
    } else if (computerChoice === 'scissors'){
        computerChoiceDisplay.textContent = '✌️';
    }
}

function setGameResults(){
    if (userChoice === computerChoice){
        result.textContent = "😥Empate!"
        
    } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")){
        result.textContent = "💻Computador venceu!🏆"
        
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result.textContent = "🥳Você venceu!🏆"
    }

    createPlayAgainButton();
}

function createPlayAgainButton(){
    const playAgainButton = document.createElement('button');
    playAgainButton.textContent = 'Jogar novamente';
    document.querySelector('.game-result').appendChild(playAgainButton);
    playAgainButton.addEventListener('click', playAgain);
}

function playAgain(){    
    [userChoice, computerChoice] = [null, null];
    userChoiceDisplay.textContent = '';
    computerDisplay.style.display = 'none';
    choicesButtons.style.display = 'flex';
    result.textContent = '';

    buttons.forEach(button => {
        button.addEventListener('click', setUserChoice)
    });

    this.remove();
}