



// Program starts from here
function deckOfCards() {
  var suit = ["club","diamond","heart","spade"];
  var rank = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
  var deck = [];
  var x = 0;

  // Fill deck with all cards
  for(var i=0; i<suit.length; i++) {
    for(var j=0; j<rank.length; j++) {
      deck[x++] = suit[i]+" of "+rank[j];
    }
  }
  var deckLength = suit.length * rank.length;

  // Shuffle all deck cards
  for(var i=0; i<deckLength; i++) {
    var rand = Math.floor((Math.random() * 51) + 0);
    var temp = deck[i];
    deck[i] = deck[rand];
    deck[rand] = temp;
  }

  var noOfPlayers = prompt("Enter number of players","");
  var noOfCards = prompt("Enter number of cards","");
  var playerCards = [];

  x=0;
  for(var i=0; i<noOfPlayers; i++) {
     playerCards[i] = [];
     document.write("<br>");
     document.write(i+1+" player cards");
     document.write("<br>");
    for(var j=0; j<noOfCards; j++) {
      playerCards[i][j] = deck[x++];
      document.write(playerCards[i][j]);
      document.write("<br>");
    }
  }

}


deckOfCards();
