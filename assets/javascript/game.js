var Fletter = "";
var wins = 0;
var losses = 0;
var Guessesremaining = 9;
var guessedSoFar = [];
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


$(document).ready(function () { 
    pickTargetLetter();

    $(document).keypress(function (event) {
        
        var guess = event.key;
        checkGuess(guess);
    });
});

function checkGuess(G) {
    if (G === Fletter) { 
        wins += 1
        Guessesremaining = 9;
        pickTargetLetter();
        guessedSoFar = [];
    } else {
        Guessesremaining -= 1;
        if (Guessesremaining === 0) { 
            losses += 1;
            Guessesremaining = 9;
            pickTargetLetter();
            guessedSoFar = [];
        } else {
            guessedSoFar.push(G);
        }
    }
    updateScreen();
}

function pickTargetLetter() {
    var whichNumber = Math.floor(Math.random() * (25 - 0 + 1)) + 0;
    Fletter = letters[whichNumber];
}

function updateScreen() {
    $("#wins").text("Wins: " + wins);
    $("#losses").text("Losses: " + losses);
    $("#remaining").text("Guesses Left: " + Guessesremaining);
    $("#guessed").text("Your Guesses So Far: " + guessedSoFar);
}