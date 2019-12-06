//!index.js should require from word.js

const inquirer = require('inquirer');
const Word = require('./word.js');

//Create string of characrters
let characters = 'abcdefghijklmnopqrstuvwxyz';

//Create an array of possilbe words 
let fastFoods = [
    'mcDonalds',
    'dominos',
    'wendys',
    'sonic',
    'kfc',
    'subway',
    'quiznos',
    'chipotle',
    'whataburger',
    'arbys',
    'popeyes',
    'fatburger'
]

//Create a variable to hold the random string from the fastFood array
let randomIndex = Math.floor(Math.random() * fastFoods.length);
let ranFastFood = fastFoods[randomIndex];

//Pass the letter word to the Word constructor
let fastFood = new Word(ranFastFood);

let requireNewWord = false;

//Array for guessed correct and incorrect letters
let incorrectLetters = [];
let correctLetters = [];

//10 tries left
let guessesLeft = 10;

//Create the game logic:
function gameLogic() {
    //Generates new word for Word constructor if true
    if (requireNewWord) {
        //Selects from the ranFastFood
        let randomIndex = Math.floor(Math.random() * fastFoods.length);
        let ranFastFood = fastFoods[randomIndex];

        //Pass the letter word to the Word constructor
        fastFood = new Word(ranFastFood);

        requireNewWord = false;
    }

    //Test if a letter guessed is correct
    let wordComplete = [];
    fastFood.objArray.forEach(completeCheck);

    if (wordComplete.includes(false)) {
        inquirer.prompt([
            {
                type: 'input',
                message: 'Select a letter from A - Z',
                name: 'userInput'
            }
        ]).then(function (input) {
            if (
                !characters.includes(input.userInput) ||
                input.userInput.length > 1
            ) {
                console.log('\nPlease try Again!\n');
                gameLogic();
            } else {
                let wordCheckArray = [];

                fastFood.userGuess(input.userInput);

                fastFood.objArray.forEach(wordCheck)
                if (wordCheckArray.join("") === wordComplete.join("")) {
                    console.log('\nIncorrect\n');

                    incorrectLetters.push(input.userInput);
                    guessesLeft--;
                } else {
                    console.log('\nCorrect\n');

                    correctLetters.push(input.userInput);
                }
                fastFood.log();

                console.log('Guesses Left: ' + guessesLeft + '\n');

                console.log('letters guessed: ' + incorrectLetters.join(" ") + '\n');

                if (guessesLeft > 0) {
                    gameLogic();
                } else {
                    console.log('You Have Lost!\n');
                }
                function wordCheck(key) {
                    wordCheckArray.push(key.guessed);
                }
            }
        })
    } else {
        console.log('You Win')

        restartGame();
    }
    function completeCheck(key) {
        wordComplete.push(key.guessed)
    }
}




//Create an inquirer prompt message for the main menu
function restartGame() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like to do?',
        choices: ['Play Again', 'Quit'],
        name: 'restart'
    }).then(function (input) {
        if (input.restart === 'Play Again') {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft = 10;
            gameLogic();
        } else {
            return;
        }
    })
}
gameLogic();



