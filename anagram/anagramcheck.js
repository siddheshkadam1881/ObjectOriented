
/******************************************************************************

 *
 *  Purpose         : Determines whether a number input string is anagram or not.
 *
 *  @description
 *
 *  @file           : anagramcheck.js
 *  @overview       : Determines whether a number input string is anagram or not.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 ******************************************************************************/


/*
here we are accepting string from user and check it is anagram or not.
*/
function anagramcheck() {
  var lengths = 0;
  var flag = 0;
  var stringfirst = document.getElementById("text1").value;
  var stringsecond = document.getElementById("text2").value;
  var registerfirst = stringfirst.toLowerCase().split("");
  var registersecond = stringsecond.toLowerCase().split("");
  var stringarrayfirst = registerfirst.sort();
  var stringarraysecond = registersecond.sort();
  if (stringarrayfirst.length != stringarraysecond.length) {
    document.write("string is not anagram");
  } else {
    for (var i = 0, lengths = stringarrayfirst.length; i < lengths; i++) {
      if (stringarrayfirst[i] != stringarraysecond[i]) {
        flag = 1;
      } else {
        flag = 0;
      }
    }
  }
  if (flag == 1) {
    document.write("string is not anagram");
  } else {
    document.write("string is anagram");
  }
}
