/*******************************************************************************************************************************

 *  Purpose         :Reads in integers prints them in sorted order using selection Sort.
 *
 *
 *  @file           : sortingArray.js
 *  @overview       : Reads in integers prints them in sorted order using selection Sort.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/  
 var minIdx=0;
 var temp=0; 
 var lengtharray;
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
    document.write("sorted user array:"+selectionSort(items));
   }  
/*
   selection algorithm 
*/
 

function selectionSort(){
   minIdx, temp, 
      lengtharray = items.length;
  for(var i = 0; i < lengtharray; i++){
    minIdx = i;
    for(var  j = i+1; j<lengtharray; j++){
       if(items[j]<items[minIdx]){
          minIdx = j;
       }
    }
    temp = items[i];
    items[i] = items[minIdx];
    items[minIdx] = temp;
  }
  return items;
}
sortingArray();
