
//The Alphabet....
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesleft = 9;
var guesses = [];

// Determines Computer letter.
var computerGuess  = letters[Math.floor(Math.random()*letters.length)];
console.log("Computer Guess " + computerGuess);

// Start of app
document.onkeyup = function(event) {

    // Stores guess for user
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("User Guess: " + userGuess);



    // Losing condition
    if ((userGuess !== computerGuess) && (guessesleft === 0)){
      losses++;
      alert("Sneaky sneaky! You're no Psychic!");
      guessesleft = 9;
      guesses = [];
      letters[Math.floor(Math.random()*letters.length)];
      console.log("Computer Guess " + computerGuess);
    }

    // Guessing condition
    else if ((userGuess !== computerGuess) && (guessesleft >= 1)) {
      guessesleft--;
      guesses.push(userGuess);
      console.log("user is guessing: " + userGuess);

    }

    // Winning condition
    else {
      wins++;
      alert("You're a psychic! But I have a feeling you already knew that.")
      guessesleft = 9;
      guesses = [];
      computerGuess  = letters[Math.floor(Math.random()*letters.length)];
      console.log("Computer Guess " + computerGuess);

    };

    //
    var html =
    "<p> Guess what letter I'm thinking of..." + "</p>" +
    "<p> Wins: " + wins + "</p>" +
    "<p> Losses: " + losses + "</p>" +
    "<p> Guesses Left: " + guessesleft + "</p>" +
    "<p> Your Guesses so far: " + guesses + " " + "</p>";

    document.querySelector("#game").innerHTML = html;

};
