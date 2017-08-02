var possibleWords = ["matrix","integral","subtract","factor","analysis","modulus","topology","chord","secant","tangent","circle","quadrilateral","polyhedron","octogon","asymptote","limit","derivative"];

function placeWord() {
	var wordNow = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	for (i = 0; i < wordNow.length; i++) {
		var underScore = document.createElement('div');
		var unknownWord = document.getElementById('wordSpace');
		underScore.setAttribute("class","underScore");
		unknownWord.appendChild(underScore);
	}
}

document.onkeyup = function (event) {
	var letter = event.key;
	var letterAttempt = document.getElementById('letters')
	var newLetter = document.createElement('div');
	newLetter.innerHTML = letter;
	newLetter.setAttribute("class", "usedLetters");
	letterAttempt.appendChild(newLetter);
}