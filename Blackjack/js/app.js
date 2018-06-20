//new build

//buttons
//dealButton hitButton stayButton

//functions & game logic

//if (player > 21) return player win = false;
//if (dealer > 21) reutnr player win = true;
//if dealer == 21 return text "Blackjack"
(function (){
  var cardDeck = new Deck();
  var win = 0;
  var lose = 0;
})

var winnerLoser = function (playersHand, dealerHand){
    var result = '',
        dealerScore = dealerHand.score(),
        playerScore = playersHand.score();
//if loops
    if (playerScore  > 21 || dealerScore === 21){
      result = "oh no! You've lost!!";
      lose++;
    }
    else if (dealerScore > playerScore){
      result = "oh no! You've lost!!";
      lose++;
    }
    else if (dealerScore > 21 || playerScore === 21 || playerScore > dealerHand.score()){
      result = "Woooooo!! You're a winner!!!";
      win++
    }
    else if (dealerScore === playerScore){
      result = "You tied!";
    }

    return result+
var dealerHand = function (){
  var hand = new dealerHand(deck);

  while (hand.score() < 17){
    hand.hitButton();
  }
  return hand;
}



//card build
//testing js switch statement

//alt card building
var deck = new Array ();
var cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cardSuit = ['♠', '♥', '♦', '♣'];
var players = new Array();

function createDeck()
{
    deck = new Array();
    for (var i = 0 ; i < cardNumber.length; i++)
    {
        for(var x = 0; x < suits.length; x++)
        {
            var weight = parseInt(cardNumber[i]);
            if (cardNumber[i] == "J" || cardNumber[i] == "Q" || cardNumber[i] == "K")
                weight = 10;
            if (cardNumber[i] == "A")
                weight = 11;
            var cards = { Value: cardNumber[i],Suit: cardSuits[x], Weight: weight };
            deck.push(cards);
        }
    }
    return deck;
}
//the shuffle

// function shuffle(){
// 	for (var i = 0; i < 1000; i++)
// 	{
// 		var location1 = Math.floor((Math.random() * deck.length));
// 		var location2 = Math.floor((Math.random() * deck.length));
// 		var tmp = deck[location1];
//
// 		deck[location1] = deck[location2];
// 		deck[location2] = tmp;
// 	}
// }

//worked out diff way with Karolin

function createCardDesigns(card)
{
var cardElement = document.createElement('div');
var icon = '';
if (card.Suit == 'Hearts')
icon='♥';
else if (card.Suit == 'Spades')
icon = '♠';
else if (card.Suit == 'Diamonds')
icon = '♦';
else
icon = '♣';

cardElement.className = 'card2';
cardElement.innerHTML = card.Value + '' + icon;
return cardElement;
}

function renderDeck()
{
	for(var i = 0; i < deck.length; i++)
	{
		var card = document.createElement("div");
		var num = document.createElement("div");
		var suit = document.createElement("div");
		card.className = "card";
		num.className = "num";
		suit.className = "suit " + deck[i].Suit;

		num.innerHTML = deck[i].Value;
		card.appendChild(num);
		card.appendChild(suit);

		document.getElementById("deck").appendChild(cards);
	}
}

function load()
{
	deck = getDeck();
	shuffle();
	renderDeck();
}


var hand = function (deck){
  var cards = [];

  cards.push (deck.deal(), deck.deal());
  this.getHand = function (){
    return cards;
  };
  this.score = function (){
    var i,
      score = 0,
      cardValue = 0;
    for (i=0; i < cards.length; i++){
      cardValue = cards[i].getValue();


    }
    return score;

  }
}

//players build

var playerHand = function (){

}






$(() =>{

var playerHand;
var dealerHand;

var updateGame = function (){
  $playerHand.html(playerHand.toHTML());
  $theScore.find('.digits').html(playerHand.score());
  $('#lose').text(lose);
  $('#Win').text(win);
  // $('#Tied').text(tied);

};

$deal.on('click', function (){
//create new array
    playerHand = new Hand(deck);
    updateGame ();

});

$hit.on('click' , function (){
    playerHand.hitButton();
    //if loop
    if (playerHand.getHand().length >= 5 || playerHand.score() > 21){
      $stay.trigger('click');
    } else {
      updateGame();
    }
});

$stay.on('click', function (){
  $playerHand.html(declareWinner(playerHand, dealerHand()));
  showDeal();
});
  deck.shuffle();


});













};



// graveyard


// var deckOfCards = function (){
//     var cards = [];
//     /** Creates a new set of cards. */
//     var newCards = function (){
//         var i,
//             suit,
//             cardNumber;
//         for (i=0;i<52;i++){
//             suit = i%4+1;
//             cardNumber = i%13+1;
//             cards.push(new Card(suit,cardNumber));
//         }
//     };
//     this.shuffle = function (){
//         for(var i,j,x = cards.length; i; j = parseInt(Math.random() * i), x = cards[--i], cards[i] = cards[j], cards[j] = x);
//         return this.getCards();
//     };
//     this.getDeck = function (){
//         return cards;
//     };
//     this.deal = function (){
//         if (!cards.length){
//             console.log("No more cards! Starting a new deck.");
//             newCards();
//             this.shuffle();
//         }
//         return cards.pop();
//     };
// };
