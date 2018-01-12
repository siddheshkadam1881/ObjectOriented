function addStock()
{
  this.stock = {};
  var noOfStock = prompt("enter no of stock","");

  for(var i=0; i<noOfStock; i++)
  {
     var stockName = prompt("enter stock name","");
     var noOfshare = parseInt(prompt("enter stock number of share",""));
     var sharePrice = parseInt(prompt("enter stock share price",""));
     var totalStockPriceReturn = stockReport(stockName, noOfshare, sharePrice);
  }
  document.write("<br>");
  document.write("<b>total stock value: </b>");
  document.write(totalStockPriceReturn);
}

var totalStockPrice = 0;

// Display stock report
function stockReport(stockName, noOfshare, sharePrice)
{
   var stockPrice = noOfshare * sharePrice;
   totalStockPrice = totalStockPrice + stockPrice;
   document.write("<b>stock name: </b>");
   document.write(stockName);
   document.write("&nbsp;&nbsp;");
   document.write("<b>stock value: </b>");
   document.write(stockPrice);
   document.write("&nbsp;");
   document.write("<br>");
   return totalStockPrice;
}
