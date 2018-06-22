//Blackjack
//card build
var deck = new Array();

var deck1 = new Array();

var cardNumber = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cardSuit = ['♠', '♥', '♦', '♣'];
var players = new Array({
 id: 'player1',
 name: "Morigan",
 hand: [],
 score: 0
}, {
 id: 'dealer',
 name: "Dealer",
 hand: [],
 score: 0
});

const createDeck =() => {
    for (var i = 0 ; i < cardNumber.length; i++)
    {
        for(var x = 0; x < cardSuit.length; x++)
        {
            var weight = parseInt(cardNumber[i]);
            if (cardNumber[i] == "J" || cardNumber[i] == "Q" || cardNumber[i] == "K")
                weight = 10;
            if (cardNumber[i] == "A")
                weight = 11;
            var cards = { Value: cardNumber[i],Suit: cardSuit[x], Weight: weight };
            deck.push(cards);
            deck1.push(cards);
        }
    }


    function shuffle(a) {
        var j, x, i;
        for (i = a.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = a[i];
            a[i] = a[j];
            a[j] = x;
        }
        return a;
    }

    deck = shuffle(deck)
    return deck;
}
// call the deck
deck = createDeck()

$(() => {
var $player1 = $("#player1")

var $dealer = $('#dealer')
var $card = $("<div>").addClass("card")

var cardData = deck.pop()
var $top = $('<h3>').text(cardData['Value'])
var $middle = $('<h3>').text(cardData['Suit'])
var $bottom = $('<h3>').text(cardData['Weight'])
//Deal Button
$('#dealPlayer1').on('click', function (e) {

console.log(deck);
  for(var i=0; i < 2; i++){
    for(var x=0; x < players.length; x++){

      var card = deck.pop();
      var player = players[x];
      var $card = $("<div>").addClass("card")

      var $top = $('<h3>').text(card['Value'])
      var $middle = $('<h3>').text(card['Suit'])
      var $bottom = $('<h3>').text(card['Weight'])
      $card.append($top,$middle)

      player.hand.push(card);
      $('#' + player.id).append($card);

    }
  }
	// give him another card
  $('#dealPlayer1').hide();
  console.log(checkWin);
});

$('#hitButton').on('click', function (e) {

  console.log(deck);
    for(var i=0; i < 1; i++){
      for(var x=0; x < players.length; x--){

        var card = deck.pop();
        var player = players[x];
        var $card = $("<div>").addClass("card")

        var $top = $('<h3>').text(card['Value'])
        var $middle = $('<h3>').text(card['Suit'])
        var $bottom = $('<h3>').text(card['Weight'])
        $card.append($top,$middle)

        player.hand.push(card);
        $('#player1').append($card);

      }
    }
});
$('#player1stand').on('click', function (e) {
	// player 1 stand do stuff
  // alert('')
});
//hit function here
$('#dealDealer').on('click', function (e) {
  // do stuff for dealer
  console.log(checkWin);
  // alert('do stuff for dealer')
});

//worked out diff way with Karolin
//added elements to the Array

var deal = function(){
    var card = Math.floor(Math.random() * deck.length);
    return deck.splice(card, 1)[0];
};

var Hand = function (deck){
  var cards = [];

  cards.push(deal(), deal());
  this.getHand = function (){
    return cards;
  };
  this.score = function (){
    var i,
      result = 0,
      cardValue = 0;
    for (i=0; i < cards.length; i++){
      cardValue = cards[i].getValue();

    }
    return result;

  }
}

var playerHand = new Hand();
var dealerHand = new Hand();

//functions & game logic
//deal 4 cards, 2 player 2 dealer

//if (player > 21) return player win = false;
//if (dealer > 21) reutnr player win = true;
//if dealer == 21 return text "Blackjack"
// (function (){
  // var cardDeck = new Deck();
  var win = 0;
  var lose = 0;
// })

var checkWin = function (playersHand, dealerHand){
    var result = '',
        dealerScore = dealerHand.score(),
        playerScore = playersHand.score();

var winCode = checkWin(playerScore, dealerScore);
//if loops
//win and lose

// check win for 21 or bust
// once stay - no more cards

    if (playerScore  > 21 || dealerScore === 21){
      result = "oh no! You've lost!!";
      //2;
      lose++;
    }
    else if (dealerScore > playerScore){
      result = "oh no! You've lost!!";
      lose++;
      //2;
    }
    else if (dealerScore > 21 || playerScore === 21 || playerScore > dealerHand.score()){
      result = "Woooooo!! You're a winner!!!";
      //remove
      win++
      //1;
    }
    else if (dealerScore === playerScore){
      result = "You tied!";
      //3;
    }

    return result;
}

var updateGame = function (){
  $playerHand.html(playerHand.toHTML());
  $theScore.find('.digits').html(playerHand.score());
  $('#lose').text(lose);
  $('#Win').text(win);
  // $('#Tied').text(tied);

};
const $deal = $('#dealPlayer1');
const $hit = $('#hitButton');
const $stay = $('#player1stand');

});
