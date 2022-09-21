const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
//Select all buttons to use in this document
const possibleChoices = document.querySelectorAll('button')
//to access userChoice wherever we want and save it in here, save it global
let userChoice
let computerChoice
let result

//all buttons are quipped with a event listener, which locks for possible user actions. In this case a click on one of the Buttons.

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=> {
    //The specific Button choice will be saved in userChoice
    userChoice = e.target.id;
    //gives the HTML code-block the button-choice of the user, to display it in html code
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}));

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * possibleChoices.length) + 1  //in this case its 3 , Math.floor is used to round the number to an integer
    console.log(randomNumber)

    if (randomNumber === 1){
        computerChoice = 'rock'
    }
    if (randomNumber === 2){
        computerChoice = 'scissors'
    }
    if (randomNumber === 3){
        computerChoice = 'paper'
    }
    computerChoiceDisplay.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        result = 'its a draw ...'
    }
    else if ( (computerChoice === 'rock' && userChoice === 'scissors')
        || (computerChoice === 'paper' && userChoice === 'rock')
        || (computerChoice === 'scissors' && userChoice === 'paper')){
        result = 'you lost!'
    }
    else {
        result = 'you won!'
    }
    resultDisplay.innerHTML = result
}