  function dataProcessing()
 {
     console.clear();
     var addressBookObjectArr = {};
     var key = -1;
     var stockSymbol=prompt("enter stock symbol","");
     var numShare=prompt("enter numShare","");
     var dateTime=prompt("enter date of transaction"," ");
     addressBookObjectArr["stockSymbol"]= stockSymbol;
     addressBookObjectArr["numShare"]= numShare;
     addressBookObjectArr["dateTime"]= dateTime;
     ++key;
     localStorage.setItem(key,JSON.stringify(addressBookObjectArr));
     if(numShare>0)
     {
       var userInput=prompt("what u want:(if u want to buy share enter 1 or sell enter 0)","");
        if(userInput==0)
         {
           numShare--;
           addressBookObjectArr["numShare"]= numShare;
           ++key;
           localStorage.setItem(key, JSON.stringify(addressBookObjectArr));
          }
          else
         { 
          numShare++;
          addressBookObjectArr["numShare"]= numShare; 
          ++key;
           localStorage.setItem(key, JSON.stringify(addressBookObjectArr));
          }
        for(var i=0; i<=key; i++) 
          {
            if(localStorage.getItem(i) == null) continue;
            document.write(localStorage.getItem(i));
          }
     }
   }

dataProcessing()

  

  
