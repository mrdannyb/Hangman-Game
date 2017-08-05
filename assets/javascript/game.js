var possibleWords = ["matrix","integral","subtract","factor","analysis","modulus","topology","chord","secant","tangent","circle","quadrilateral","polyhedron","octogon","asymptote","limit","derivative","construction","theorem","conjecture","injective","surjective","geometry","algebra","variable","convergent","divergent","vector","normal","homology","postulate","lemma","coralary","proof"];

var wins = 0;
var losses = 0;
var attempts;
var wordNow;
var unknownWord;
var letterAttempt;
var left;

function placeWord() {
	wordNow = possibleWords[Math.floor(Math.random() * possibleWords.length)];
	console.log(wordNow);
	attempts = 5;
	left = document.getElementById('remaining');
	left.innerHTML = attempts;
	var setWins = document.getElementById('saves');
	var setLosses = document.getElementById('roses');
	setWins.innerHTML = wins;
	setLosses.innerHTML = losses;

	for (i = 0; i < wordNow.length; i++) {
		unknownWord = document.getElementById('wordSpace');
		var underScore = document.createElement('div');
		underScore.innerHTML = '_';
		underScore.setAttribute("class","uScore");
		underScore.setAttribute("id",i);
		unknownWord.appendChild(underScore);		
	}
}



document.onkeyup = function (event) {
	var letter = event.key;
	var gotOne = false;	
	left = document.getElementById('remaining');
	left.innerHTML = attempts;

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
			letterAttempt.innerHTML = '';
			unknownWord.innerHTML = '';
			placeWord();
		}
		
	} 
	else {
		attempts--;
		letterAttempt = document.getElementById('letters')
		var newLetter = document.createElement('div');
		newLetter.innerHTML = letter;
		newLetter.setAttribute("class", "usedLetters");
		letterAttempt.appendChild(newLetter);
	}

	if (attempts === -1) {
		losses++;
		letterAttempt.innerHTML = '';
		unknownWord.innerHTML = '';
		placeWord();
	}
}

