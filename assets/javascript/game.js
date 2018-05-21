var targetLetter = "";//empty string
var wins = 0;
var losses = 0;
var remainingGuesses = 9;//loading page with max. number before before fully loading
var guessedSoFar = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


$(document).ready(function () { //document loads before entire page
    pickTargetLetter();

    $(document).keypress(function (event) {//keypress evokes checkGuess function with value "guess"
        //alert(event.key);
        var guess = event.key;//variable = value
        checkGuess(guess);
    });
});

function checkGuess(aGuess) {
    if (aGuess === targetLetter) { // you win
        wins += 1
        remainingGuesses = 9;
        pickTargetLetter();
        guessedSoFar = [];
    } else {
        remainingGuesses -= 1;
        if (remainingGuesses === 0) { // you lost
            losses += 1;
            remainingGuesses = 9;
            pickTargetLetter();
            guessedSoFar = [];
        } else {
            guessedSoFar.push(aGuess);
        }
    }
    updateScreen();
}

function pickTargetLetter() {//converting my numbers to letters
    var whichNumber = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
    targetLetter = letters[whichNumber];
}

function updateScreen() {//updating screen after each win or loss
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#remaining").text("Guesses Left: " + remainingGuesses);
    $("#guessed").text("Your Guesses So Far: " + guessedSoFar);
}