/*******************************************************************************************************************************

 *  Purpose         :Reads in integers prints them in sorted order using Bubble Sort.
 *
 *
 *  @file           : sortingArray.js
 *  @overview       : Reads in integers prints them in sorted order using Bubble Sort.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/  


 var items=[];
 function sortingArray()
 {
  /*
    accept input from user and store into item array..
  */
      for (i = 0; i < 10; i++) 
       {
        items.push(Number(prompt("Enter your Number:" + (i + 1), "0-100")));
       }
    document.write("sorted user array:"+bubbleSort(items));
   }  
/*
    
*/
 
function bubbleSort(items){
   var len = items.length;
   for (var i = len-1; i>=0; i--){
     for(var j = 1; j<=i; j++){
       if(items[j-1]>items[j]){
           var temp = items[j-1];
           items[j-1] = items[j];
           items[j] = temp;
        }
     }
   }
   return items;
}
sortingArray();
