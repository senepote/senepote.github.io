console.log('js is linked yo');


//deck, cards, player, gameBoard
var deck =
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cardSuits = ["Spades", "Hearts", "Diamonds", "Clubs"];

$(()=> {
  function cutDeck(){

    deck =
  }








});
















//FISHER GATES SHUFFLE//

function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

    // Pick a remaining element…
    i = Math.floor(Math.random() * array.length);

    // If not already shuffled, move it to the new array.
    if (i in array) {
      copy.push(array[i]);
      delete array[i];
      n--;
    }
  }

  return copy;
}
