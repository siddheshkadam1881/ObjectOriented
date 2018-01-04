/******************************************************************************
 *  
 *  Purpose         : Determines whether a number `input number` is prime or not.
 *
 *  @description
 *
 *  @file           : PrimepalindromeChecker.js
 *  @overview       : Extend   the   above   program   to   find   the   prime  numbers that are   
                      Palindrome
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/


var arrayprime = []; //globally declare the array of array_prime

function printPrime() {
  /* in this function we find prime number and then its stored into array_prime array */
  var i = 0;
  var j = 0;
  /* take limit from user... */
  limit = document.getElementById('limit').value;

  for (i = 1; i <= limit; i++) {
    c = 0;
    for (j = 1; j <= i; j++) {
      // % modules will give the reminder value, so if the reminder is 0 then it is divisible
      if (i % j == 0) {
        //increment the value of c
        c++;
      }
    }
    /*if the value of c is 2 then it is a prime number
    because a prime number should be exactly divisible by 2 times only (itself and 1) */

    if (c == 2) {
      /* stored prime number into array_prime */
      document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
      arrayprime.push(i);

    }
  }
  palindrome();
}

function palindrome() {
  /* here we accept nymber from the array  and checking number 1 by one  */
  for (var i = 0; i < arrayprime.length; i++) {
    var numarray = arrayprime[i];
    var remainder = 0;
    var palnumber = 0;
    //numarray assign to var number here
    var number = numarray;
    //palindrome logic
    while (number != 0) {
      remainder = parseInt(number % 10);
      palnumber = parseInt(palnumber * 10 + remainder);
      number = parseInt(number / 10);
    }
    if (palnumber == numarray) {
      document.write("<br/>");
      document.write(numarray + " is a palidrome");
      palnumber = 0;
    } else {
      document.write("<br/>");
      document.write(numarray + " is not palidrome");
      palnumber = 0;
    }
  }
}
