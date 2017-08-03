var possibleWords = ["matrix","integral","subtract","factor","analysis","modulus","topology","chord","secant","tangent","circle","quadrilateral","polyhedron","octogon","asymptote","limit","derivative","construction","theorem","conjecture","injective","surjective","geometry","algebra","variable","convergent","divergent"];

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
		underScore.setAttribute("id",i);
		unknownWord.appendChild(underScore);
		attempts = wordNow.length + 4;
		var left = document.getElementById('remaining');
		left.innerHTML = attempts;
	}
}



document.onkeyup = function (event) {
	var letter = event.key;
	var gotOne = false;
	attempts = attempts - 1;
	var left = document.getElementById('remaining');
	left.innerHTML = attempts;
	
	for (i = 0; i < wordNow.length; i++) {
		if (letter === wordNow.charAt(i)) {
			var ith = document.getElementById(i);
			ith.innerHTML = wordNow.charAt(i);
			gotOne = true;
			console.log(gotOne);
		}
	}
	if (gotOne === false) {
		var letterAttempt = document.getElementById('letters')
		var newLetter = document.createElement('div');
		newLetter.innerHTML = letter;
		newLetter.setAttribute("class", "usedLetters");
		letterAttempt.appendChild(newLetter);
	}
	if (attempts === 0) {
		losses++;
		placeWord();
	}

}