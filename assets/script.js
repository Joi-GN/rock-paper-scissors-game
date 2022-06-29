const game = document.getElementById('game');
const computerChoiceDisplay = document.getElementById('com-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const result = document.getElementById('result');

let userChoice, computerChoice;
const choices = ["rock", "paper","scissors"];

const options = document.querySelectorAll('.user__options__item');

options.forEach(option => {
    option.addEventListener('click', setUserChoice)
});

function setUserChoice(){
    userChoice = this.id;
    userChoiceDisplay.textContent = this.textContent;
    game.classList.add('end-game');

    options.forEach(option => {
        option.removeEventListener('click', setUserChoice)
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
    game.classList.add('end-game');
    
    if (computerChoice === 'rock'){
        computerChoiceDisplay.textContent = '✊';
    } else if (computerChoice === 'paper'){
        computerChoiceDisplay.textContent = '🖐';
    } else if (computerChoice === 'scissors'){
        computerChoiceDisplay.textContent = '✌️';
    }
}

function setGameResults(){
    if (userChoice === computerChoice){
        result.textContent = "😥Empate!"
        
    } else if ((userChoice === "rock" && computerChoice === "paper") || (userChoice === "paper" && computerChoice === "scissors") || (userChoice === "scissors" && computerChoice === "rock")){
        result.textContent = "Computador venceu!🏆"
        
    } else if ((userChoice === "rock" && computerChoice === "scissors") || (userChoice === "paper" && computerChoice === "rock") || (userChoice === "scissors" && computerChoice === "paper")){
        result.textContent = "Você venceu!🏆"
    }
}

const playAgainButton = document.getElementById('play-again-btn');
playAgainButton.addEventListener('click', playAgain);

function playAgain(){    
    [userChoice, computerChoice] = [null, null];
    userChoiceDisplay.textContent = '';
    game.classList.remove('end-game');
    result.textContent = '';

    options.forEach(option => {
        option.addEventListener('click', setUserChoice)
    });
}