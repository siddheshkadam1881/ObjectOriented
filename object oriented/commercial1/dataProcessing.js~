 function dataProcessing()
 {
     var stockSymbol=[];
     var addressBookObjectArr = {};
     var key = -1;
     var stockSymbol=prompt("enter stock symbol","");
     var numShare=prompt("enter numShare to be add","");
     var dateTime=prompt("enter date of transaction"," ");
     addressBookObjectArr["stockSymbol"]= stockSymbol;
     addressBookObjectArr["numShare"]= numShare;
     addressBookObjectArr["dateTime"]= dateTime;
     ++key;
     localStorage.setItem(key,JSON.stringify(addressBookObjectArr));
     var linkedlist = new Linkedlist();
     for (var i = 0; i < numShare; i++) 
      {
        linkedlist.insertRear(i);
       
      }
     document.write(linkedlist);

      // Create linked list
      function Linkedlist() 
    {
      this.head = null;
      this.length = 0;
    }

    // Create node
    function Node(data) 
    {
     this.data = data;
     this.next = null;
    }

// Add data into linked list
   Linkedlist.prototype.insertRear = function(data) {
   var newNode = new Node(data);
   if (this.head == null)
    this.head = newNode;
  else {
    var currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
  }
 }

// Search word in linked list
Linkedlist.prototype.searchWord = function(word) {
  if (this.head == null)
    return -1;
  else {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.data == word)
        return 1;
      else
        currentNode = currentNode.next;
    }
    return 0;
  }
};

// Remove element from linked list
Linkedlist.prototype.remove = function(word) 
 {
  var currentNode = this.head;
  var previousNode = null;
  if (currentNode.data == word) 
   {
    this.head = currentNode.next;
   } 
   else 
  {
    while (currentNode)
    {
      if (currentNode.data == word)
      {
        previousNode.next = currentNode.next;
        currentNode = previousNode.next;
       } else 
       {
        previousNode = currentNode;
        currentNode = currentNode.next;
       }
    }
  }
};

// Display linked list
Linkedlist.prototype.print = function() {
  var currentNode = this.head;
  while (currentNode) {
    document.write(currentNode.data);
    document.write("&nbsp;");
    currentNode = currentNode.next;
  }
}
};
dataProcessing();
