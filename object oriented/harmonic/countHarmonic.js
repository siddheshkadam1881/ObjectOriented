
/**
 * @description -Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N.


 *
 *  @description
 *  @file           : countHarmonic.js
 *  @overview       : Prints the Nth harmonic number: 1/1 + 1/2 + ... + 1/N
 *  @author         : siddheshwar kadam
 *  @version        : 1.0   **/


function countHarmonic(userInput) {
  var answer=0;
  var Number=parseFloat(userInput);
   while(Number!=0)
  {
   answer=answer+(1/Number)
   Number--;
  }
  document.write("hormonic number "+answer);
}
