//!index.js should require from word.js

const inquirer = require ('inquirer');
const Word = require ('./word.js');

//Create string of characrters
let characters = 'abcdefghijklmnopqrstuvwxyz';

//Create an array of possilbe words 
let fastFoods = [
    'McDonalds',
    'Dominos',
    'Wendys',
    'Sonic',
    'KFC',
    'Subway',
    'Quiznos',
    'Chipotle',
    'Whataburger',
    'Arbys',
    'Popeyes',
    'Fatburger'
]

let randomIndex = Math.floor(Math.random()*fastFoods.length);
let ranFastFood = fastFoods[randomIndex]

console.log('Random Fast Food Joint: ' + ranFastFood)
