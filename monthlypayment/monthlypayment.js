
/***************************************************************************************

Purpose: calculate monthlyPayment that reads in threecommand­ line arguments P, Y, and R
         and calculates the monthly payments you would have to make over Y years to pay
         off a P principal loan amount at R per cent interest compounded monthly.
 *

 *
 *  @file           : anagramcheck.js
 *  @overview       : Determines whether a number input string is anagram or not.
 *  @author         : siddheshwar kadam
 *
 ****************************************************************************************/


function paymentCalculate()
{

 var principal=parseFloat(document.getElementById("principal").value);
 var year    =parseFloat(document.getElementById("years").value);
 var rateinterest=parseFloat(document.getElementById("interest").value);
/*
according given formula
*/
 var n=12*year;
 var r=rateinterest/(12*100);
 var payment=(principal * r)/(1-(1+r)^(n));
 document.write(payment);
}
