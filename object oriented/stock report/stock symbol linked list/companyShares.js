function companyShare()
{
function Node(data) {
  this.data = data;
  this.next = null;
}

function SinglyLinkedList() {
  this.head = null;
  this.tail = null;
  this.numberOfValues = 0;
}

SinglyLinkedList.prototype.add = function(data) {
  var node = new Node(data);
  if(!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
  this.numberOfValues++;
};
SinglyLinkedList.prototype.remove = function(data) {
  var previous = this.head;
  var current = this.head;
  while(current) {
    if(current.data === data) {
      if(current === this.head) {
        this.head = this.head.next;
      }
      if(current === this.tail) {
        this.tail = previous;
      }
      previous.next = current.next;
      this.numberOfValues--;
    } else {
      previous = current;
    }
    current = current.next;
  }
};

SinglyLinkedList.prototype.length = function() {
  return this.numberOfValues;
};
 //assuming company shares here...
  var sharesArr=[];
  var companyShares =0; 
 //share linklist created
  var shares=new SinglyLinkedList();
  var userInput=prompt("enter the value of share to be add "," ");
  for(var i=0;i<userInput;i++)
  {
   shares.add(i+1);
   companyShares++;
  }
   document.write(JSON.stringify(shares));
   var userInput=parseInt(prompt("enter the value of share to be remove "," "));
   shares.remove(userInput);
   document.write(JSON.stringify(shares));
}
companyShare()
