//new build

//buttons
//dealButton hitButton stayButton
$(() =>{

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
//functions & game logic

//if (player > 21) return player win = false;
//if (dealer > 21) reutnr player win = true;
//if dealer == 21 return text "Blackjack"
(function (){
  var cardDeck = new Deck();
  var win =
  var lose =
})

var winnerLoser = function (playersHand, dealerHand){
    var result = '',
        dealerScore = dealerHand.score(),
        playerScore = playersHand.score();
//if loops
    if playerScore  > 21 || dealerScore === 21){
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
  var
}

var playerHand = fucntion (){

}



//card build

var card = function (suits, cardNumber){
  this.cardNum = function (){
    return cardNumber;
  };

  this.cardSuit = function (){
    var suitType = '';
    switch (suits){
      case 1:
          suitType = "Hearts";
          break;
      case 2:
          suitType = "Clubs";
          break;
      case 3:
          suitType = "Spades";
          break;
      case 4:
          suitType = "Diamonds";
          break;
    }
    return suitType;
  };

  this.cardDesign = function (){
    var suiteType = '';
    switch (suit){
      case 1:
          suiteType = "&hearts;";
          break;
      case 2:
          suiteType = "&clubs;";
          break;
      case 3:
          suiteType = "&spades;";
          break;
      case 4:
          suiteType = "&diams;";
          break;
    }
    return suitType;
  };

  this.getValue = function (){}
      var value = cardNumber;
      if (cardNumber >= 10){
      value = 10;
      }
      if(cardNumber === 1) {
      value = 11;
      }
      return value;
    };
//players build




















};
