console.log("Up and running!");
var cards = ["Queen" , "Queen" , "King" , "King"] ;
var cardsInPlay = [] ;
var cardOne = cards[0];
var cardTwo = cards[2];

cardsInPlay.push(cardOne);

cardsInPlay.push(cardTwo);
console.log('User flipped ' + cardsInPlay);

if (cardsInPlay.length === 2) {
	if (cardsInPlay[0] == cardsInPlay[1]){
		alert('You found a match!');
	}
	else{
		alert('Sorry, try again.')
	}
}
