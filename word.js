//!Contains a constructor, Word that depends on the Letter constructor
//!word.js should only require letter.js
//!Module-exports and require letter.js to word.js

const Letter = require ('./letter.js');

function Word(answer) {     //Create a Word constructor 
    this.objArray = [];     //objectArray

    for(var i = 0; i < answer.length; i++){     //Create a forloop that will create a letter variable from our Letter constructor and push the variable to our object array
        let letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

    this.log = function() {            //log function will display the data in the terminal
        var answerLog = " ";
        for(var i = 0; i <this.objArray.length; i++ ){      //loop through the object array length. 
            answerLog += this.objArray[i] + " " ;
        }
        console.log(answerLog + '\n==================================\n'); 
    }

    this.userGuess = function(input){       
        for(var i = 0; i < this.objArray.length; i++ ){
            this.objArray[i].guess(input);
        }
    };
}


module.exports = Word;

