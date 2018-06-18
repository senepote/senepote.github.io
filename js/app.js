console.log('js is linked yo');


//deck, cards, player, gameBoard
var deck = new Array ();
var cardNumbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cardSuits = ["Spades", "Hearts", "Diamonds", "Clubs"];

// cards

$(()=> {
  const createDeck()
  {
      deck = new Array();
      for (var i = 0 ; i < cardNumbers.length; i++)
      {
          for(var x = 0; x < suits.length; x++)
          {
              var weight = parseInt(cardNumbers[i]);
              if (cardNumbers[i] == "J" || cardNumbers[i] == "Q" || cardNumbers[i] == "K")
                  weight = 10;
              if (cardNumbers[i] == "A")
                  weight = 11;
              var card = { Value: cardNumbers[i],Suit: cardSuits[x], Weight: weight };
              deck.push(card);
          }
      }
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
