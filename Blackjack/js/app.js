//new build

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
    
  }




















};
