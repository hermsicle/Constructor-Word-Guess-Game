//!Contains a constructor, Word that depends on the Letter constructor
//!word.js should only require letter.js
//!Module-exports and require letter.js to word.js

const Letter = require ('./letter.js');

function Word(answer) {
    this.objArray = [];

    for(var i = 0; i < answer.length; i++){
        let letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

    this.log = function() {
        var answerLog = " ";
        for(var i = 0; i <this.objArray.length; i++ ){
            answerLog += this.objArray[i] + " " ;
        }
    }

    this.userGuess = function(input){
        for(var i = 0; i < this.objArray.length; i++ ){
            this.objArray[i].guess(input);
        }
    };
}

module.exports = Word;
