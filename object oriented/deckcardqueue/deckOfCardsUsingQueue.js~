/*
   create a Player Object having Deck of Cards, and having ability
   to Sort by Rank and maintain the cards in a Queue implemented
   using Linked List. Do not use any Collection Library. Further
   the Player are also arranged in Queue. Finally Print the Player and the Cards received by each Player.
*/

// Program starts from this function
function deckOfCardsUsingQueue() {

  var noOfPlayer = parseInt(document.getElementById("noOfPlayer").value);
  var noOfCards = parseInt(document.getElementById("noOfCards").value);

  var suit = ["club","diamond","heart","spade"];
  var rank = ["2","3","4","5","6","7","8","9","10","jack","queen","king","ace"];
  var deck = [];
  var x = y = 0;

  // Storing all cards into deck
  for(var i=0; i<suit.length; i++) {
    for(var j=0; j<rank.length; j++) {
      deck[x++] = suit[i]+" of  "+rank[j];
    }
  }

  var deckLength = suit.length * rank.length;
  // suffle all cards in deck
  for(var k=0; k<deckLength; k++) {
    var rand = Math.floor((Math.random() * 51) + 0);
    var temp = deck[i];
    deck[i] = deck[rand];
    deck[rand] = temp;
  }

  // Storing cards in 2d array
  var playerCards = [];
  for(var i=0; i<noOfPlayer; i++) {
     playerCards[i] = [];
    for(var j=0; j<noOfCards; j++) {
      playerCards[i][j] = deck[y++];
    }
  }


  // Players in the queue
  var playerQueue = new Queue();
  for(var i=0; i<noOfPlayer; i++) {
    playerQueue.enqueue(i+1);
  }

  // Suffle cards sort and then in the queue
  var cardsQueue = new Queue();
  for(var i=0; i<noOfPlayer; i++) {
     //playerCards[i] = [];
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("2") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("3") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("4") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("5") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("6") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("7") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("8") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("9") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("10") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("jack") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("queen") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("king") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
    for(var j=0; j<noOfCards; j++) {
      if(playerCards[i][j].includes("ace") == true) {
        cardsQueue.enqueue(playerCards[i][j]);
      }
    }
  }


  // Display the cards of each player
  for(var i=0; i<noOfPlayer; i++) {
    document.write(playerQueue.dequeue()+" player cards=> <br>");
    //playerQueue.dequeue();
    for(var j=0; j<noOfCards; j++) {
      document.write(cardsQueue.dequeue()+"<br>");
    }
    document.write("<br>")
  }

}

// Creates queue using linkedlist
function Queue() {
  this.head = null;
  this.tail = null;
}

// Create new node
function Node(data) {
  this.data = data;
  this.next = null;
}

// Insert data in the queue
Queue.prototype.enqueue = function (data) {
  var newNode = new Node(data);
  if(this.head == null) {
    this.head = newNode;
    this.tail = newNode;
  }
  else {
    this.tail.next = newNode;
    this.tail = newNode;
  }
};

 // Retrieving elements from queue
 Queue.prototype.dequeue = function () {
   if(this.head.next == null)
     return this.head.data;
   else {
     var previousNode = null;
      var currentNode = this.head;
      while(currentNode.next) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      var deletedNode = currentNode.data;
      previousNode.next = null;
      return deletedNode;
   }

};
