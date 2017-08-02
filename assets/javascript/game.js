var possibleWords = ["matrix","integral","subtract","factor","analysis","modulus","topology","chord","secant","tangent","circle","quadrilateral","polyhedron","octogon","asymptote","limit","derivative"];

var wins = 0;
var losses = 0;
var attempts;
var wordNow = possibleWords[Math.floor(Math.random() * possibleWords.length)];

function placeWord() {
	for (i = 0; i < wordNow.length; i++) {
		var unknownWord = document.getElementById('wordSpace');
		var underScore = document.createElement('div');
		underScore.innerHTML = ' _ ';
		underScore.setAttribute("class","uScore");
		unknownWord.appendChild(underScore);
		attempts = wordNow.length + 4;
		var left = document.getElementById('left');
		left.innerHTML = attempts;
	}
}



document.onkeyup = function (event) {
	var letter = event.key;
	var letterAttempt = document.getElementById('letters')
	var newLetter = document.createElement('div');
	newLetter.innerHTML = letter;
	newLetter.setAttribute("class", "usedLetters");
	letterAttempt.appendChild(newLetter);

	for (i = 0; i < wordNow.length; i++) {
		if (letter === wordNow.charAt(i)) {
			
		}
	}
}