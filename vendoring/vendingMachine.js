
/*******************************************************************************************************************************

 *
 *  Purpose         : There is 1, 2, 5, 10, 50, 100, 500 and 1000 Rs Notes which can be returned by Vending Machine.Write a
                     Program to calculate the minimum number of Notes as well as the Notes to be returned by the Vending
                     Machine as a Change.
 *  @file           : vendingMachine.js
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/

function vendingMachine() {
  var rs = parseInt(prompt("enter rupees", ""));
  if (rs <= 0) {
    document.getElementById("demo").innerHTML = "invalid input";
  } else {
    var moneyArr = [1, 2, 5, 10, 50, 100, 500, 1000]; // Moneys stored into array
    var moneyArrLen = moneyArr.length;
    var arrPos = [0, 0, 0, 0, 0, 0, 0, 0]; // Positions of money
    var i = moneyArrLen - 1;
    var j;
    while (i >= 0 && rs > 0) {
      if (moneyArr[i] <= rs) {
        rs = rs - moneyArr[i];
        arrPos[i]++;
      } else {
        --i; // Changing note
      }
    }
    for (j = 0; j < moneyArrLen; j++) {
      if (arrPos[j] > 0) {
        document.writeln(moneyArr[j] + " rs note * " + arrPos[j] + ", ");
      }
    }

  }
}
vendingMachine();
