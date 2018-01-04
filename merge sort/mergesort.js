/*******************************************************************************************************************************

 *  Purpose         :Reads in integers prints them in sorted order using merge Sort.

 *  @file           : sortingArray.js
 *  @overview       : Reads in integers prints them in sorted order using merge Sort.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/
function mergeSort(testArr) {
   //find length,left,right value here..
  let length = testArr.length,
    middle = Math.floor(length / 2),
    left = testArr.slice(0, middle),
    right = testArr.slice(middle, length);

  if (length === 1) {
    return testArr;
  }
  return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {

  let sorted = [],
    i = 0,
    j = 0;

  while (i < left.length || j < right.length) {
    if (i < left.length && j < right.length) {
      if (left[i] < right[j]) {
        sorted.push(left[i]);
        i++;
      } else {
        sorted.push(right[j]);
        j++
      }
    } else if (i < left.length) {
      sorted.push(left[i]);
      i++;
    } else {
      sorted.push(right[j]);
      j++;
    }
  }
  return sorted;
}
var testArr = [];
/*
accept the input from user...
*/
for (var i = 0; i < 10; i++) {

  testArr[i] = prompt("enter the string no:" + (i + 1));
}
/*
calling mergesort function
*/
mergeSort(testArr);
document.write(mergeSort(testArr));
