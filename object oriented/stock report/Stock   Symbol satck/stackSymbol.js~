function stackSymbol()

{
var Stack = function(){
  this.top = null;
  this.size = 0;
};

var Node = function(data){
  this.data = data;
  this.previous = null;
};

Stack.prototype.push = function(data) {
  var node = new Node(data);

  node.previous = this.top;
  this.top = node;
  this.size += 1;
  return this.top;
};

Stack.prototype.pop = function() {
  temp = this.top;
  this.top = this.top.previous;
  this.size -= 1;
  return temp;
};
var stack = new Stack();
var j=0;
var stackSymbolArr =[];
for(var i=0;i<4;i++)
{
   stackSymbolArr=prompt("we need to Purchased some stack symbol,so plz enter some symbol"," ");
   stack.push(stackSymbolArr);
} 
 document.write(JSON.stringify(stack));
/* its user for sell */
  var userInput=parseInt(prompt("number of symbol to sell "," ")); 
  for(var i=0;i<userInput;i++)
{
   stack.pop(stackSymbolArr);
} 
 document.write(JSON.stringify(stack));
}
stackSymbol()
/*   
{
 //remove value from top of stack
 var value = stack.pop();
 document.write(JSON.stringify(stack));
}
}*/
