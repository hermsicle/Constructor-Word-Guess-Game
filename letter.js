//!Contains a constructor, Letter.
//!Constructor should define : a string value to store the underlying character of the character
//!A boolean value that stores whether that letter has been guessed yet.
//!A function that returns the underlying character if the letter has been guessed, or a placeholder such as an underscore
//!A function that takes a character as an argument and checks it against the underlying character.
//!letter.js should not require any other files. so we are using Module-exports in letter.js

function Letter (value) {
    this.letter = value;
    this.guessed = false;

    this.toString = function() {
        if(this.letter === " "){
            this.guessed = true;
            return " ";
        } else {
            if (this.guessed === false){
                return " " ;
            } else {
                return this.letter;
            }
        }
    }

    this.guess = function (guess) {
        if(guess === this.letter) {
            this.guessed = true;
        }
    }
}

module.exports = Letter;