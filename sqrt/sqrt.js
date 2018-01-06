
/*******************************************************************************************************************************

 *
 *  Purpose         :Write a static function sqrt to compute the square root of a nonnegative number c
                    given in the input using Newton 's   method:
 *  @file           : sqrt.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/
   function sqrtCalculate() {
    var nonnegative = parseFloat(document.getElementById('c').value);
    var epsilon = 1e-15;
    var t = nonnegative;
    while (Math.abs(t - nonnegative / t) > epsilon * t) {
      t = (nonnegative / t + t) / 2.0;
    }
    document.write(t);
  }
