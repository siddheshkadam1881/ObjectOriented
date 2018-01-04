
/******************************************************************************

 *
 *  Purpose         : Determines whether a number input string is anagram or not.
 *
 *  @description
 *
 *  @file           : numberfinder.js
 *  @overview       : numberfinding here using binary search..
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/

/*
takes   a   command­line   argument   N,   asks   you   to   think   of   a   number
between   0   and   N­1,   where   N   =   2^n,   and   always   guesses   the   answer   with   n
questions.
*/
var lower = 0;
var higher = 0;
var middle = 0;
var secret = 0;

function numberfinder() {
  /*
    here we take input from user and calling binarysearch function...
  */
  var userinput = parseInt(document.getElementById("text1").value);
  var number = parseInt(Math.pow(2, userinput));
  var higher = parseInt(number);
  var secret = search(0, higher);
  document.write("Your number is ", secret);
}

function search(lower, higher) {
  if ((higher - lower) == 1) {
    return lower;
  }
  //find the value of middle
  var middle = parseInt((lower) + (higher - lower) / 2);
  // ask continuesly user to your guessing value..
  var answer = prompt("Is it less than : " + middle);
  if (answer == "yes" || answer == "YES") {
    return search(lower, middle);
  } else {
    return search(middle, higher);
  }
}
