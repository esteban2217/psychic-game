
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;

var losses = 0;

var guessesLeft = 9;

var guessesSoFar = [];

document.querySelector('#losses').innerText=losses;
document.querySelector('#wins').innerText=wins;
document.querySelector('#gl').innerText=guessesLeft;
document.querySelector('#gsf').innerText=guessesSoFar;

var letterToBeGuessed = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log('letterToBeGuessed ' + letterToBeGuessed)
	function resetGame() {
		guessesLeft=9;
		guessesSoFar=[];
		letterToBeGuessed = alphabet[Math.floor(Math.random()*alphabet.length)];
		console.log('letterToBeGuessed ' + letterToBeGuessed)
	}

function key(ev) {
	var userKeyPressed=ev.key;
		
	
	if(userKeyPressed==letterToBeGuessed){
		wins++;
		document.querySelector('#wins').innerText=wins;
		resetGame()
	} else {
		guessesSoFar.push(userKeyPressed);
		document.querySelector('#gsf').innerText=guessesSoFar;
		guessesLeft--;
		if (guessesLeft==0){
			// debugger;
			losses++;
			resetGame()
			document.querySelector('#losses').innerText=losses;
		}
		document.querySelector('#gl').innerText=guessesLeft;
	}

}
document.onkeyup=key;