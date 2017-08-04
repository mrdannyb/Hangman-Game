var possibleWords = ["matrix","integral","subtract","factor","analysis","modulus","topology","chord","secant","tangent","circle","quadrilateral","polyhedron","octogon","asymptote","limit","derivative","construction","theorem","conjecture","injective","surjective","geometry","algebra","variable","convergent","divergent"];

var wins = 0;
var losses = 0;
var attempts;
var wordNow = possibleWords[Math.floor(Math.random() * possibleWords.length)];
var unknownWord;

function placeWord() {
	for (i = 0; i < wordNow.length; i++) {
		unknownWord = document.getElementById('wordSpace');
		var underScore = document.createElement('div');
		underScore.innerHTML = '_';
		underScore.setAttribute("class","uScore");
		underScore.setAttribute("id",i);
		unknownWord.appendChild(underScore);
		attempts = wordNow.length + 6;
		var left = document.getElementById('remaining');
		left.innerHTML = attempts;
	}
	var setWins = document.getElementById('saves');
	var setLosses = document.getElementById('roses');
	setWins.innerHTML = wins;
	setLosses.innerHTML = losses;
}



document.onkeyup = function (event) {
	var letter = event.key;
	var gotOne = false;
	attempts = attempts - 1;
	var left = document.getElementById('remaining');
	left.innerHTML = attempts;
	var wordDone = false;


	for (i = 0; i < wordNow.length; i++) {
		var ith = document.getElementById(i);
		if (letter === wordNow.charAt(i)) {			
			ith.innerHTML = wordNow.charAt(i);
			gotOne = true;
		}
	}

	if (gotOne) {
		console.log('got one')

		if (unknownWord.innerText.split('\n').join('').indexOf('_') < 0) {
			// win
			console.log('win');
			wins++;
			placeWord();
		}
		
	} else {
		var letterAttempt = document.getElementById('letters')
		var newLetter = document.createElement('div');
		newLetter.innerHTML = letter;
		newLetter.setAttribute("class", "usedLetters");
		letterAttempt.appendChild(newLetter);
	}

	if (attempts === -1) {
		losses++;
		letterAttempt.innerHTML = '';
		placeWord();
	}
}