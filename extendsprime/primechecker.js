/******************************************************************************
 *
 *  Purpose         : Determines whether a number `input number` is prime or not.
 *
 *  @description
 *
 *  @file           : primechecker.js
 *  @overview       : the   above   program   to   find   the   prime  numbers.

 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/
/* primenumber checking till limit here limit option will declare by programmer.. */


  function printPrime()
{
  var i = 0;
  var j = 0;

  limit = document.getElementById('limit').value;

  for (i = 1; i <= limit; i++)
 {
     c = 0;
    for (j = 1; j <= i; j++)
     {
     // % modules will give the reminder value, so if the reminder is 0 then it is divisible
       if (i % j == 0)
          {
            //increment the value of c
            c++;
            }
       }
   //if the value of c is 2 then it is a prime number
  //because a prime number should be exactly divisible by 2 times only (itself and 1)

       if (c == 2)
        {
          document.getElementById("result").insertAdjacentHTML('beforeend', i + '<br>');
        }
   }
 }
