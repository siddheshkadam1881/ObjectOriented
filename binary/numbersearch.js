function binaryFun()
{
  var decimalNum = parseInt(document.getElementById("dnumber").value); //value as number
  if(decimalNum > 255)
  {
	   alert("invalid input.. input should be less than 256");
     location.reload();
  }
  else
    decimalToBinaryConvert(parseInt(decimalNum));
}

// Decimal to binary conversion
function decimalToBinaryConvert(decimalNum)
{
  var remainderArr = [];
  var reverseRemainderArr = [];
  var i = 0;
  var count = 0;
  var length = 8;
  while(decimalNum > 0)
  {
    var remainder = decimalNum % 2;
    remainderArr[i] = remainder;
    decimalNum = parseInt(decimalNum / 2);
    i++;
    count++;
  }
  while(count < length)  // if there are any indexes are left in array
  {
    count++;
    remainderArr[count-1] = 0;
  }
   i = 0, j = 0;
  document.write("in binary form=> ");
   for(i=length-1; i>=0; i--)
   {
     document.write(remainderArr[i]);
     reverseRemainderArr[j] = remainderArr[i]; // store the binary into another array
     j++;
   }
   document.write("<br>");
   swapBinaryDigits(reverseRemainderArr,length);
}

// swapping binary digits in array
function swapBinaryDigits(arr, length)
{
  var tempArr = [];
  for(var i=0; i<(length/2); i++) // copying original array's first four elements into temporary array
    tempArr[i] = arr[i];
  i = 0;
  for(i=(length/2),j=0; i<length; i++,j++) // copying original array's last four elements into original array's first four indexes
    arr[j] = arr[i];
  for(i=0,j=(length/2); j<length; j++,i++) // copying temporary array's elements into original array's last four indexes
    arr[j] = tempArr[i];
  document.write("after swapping the binary digits=> ");
  for(i=0; i<length; i++) // print swapped bnary digits
    document.write(arr[i]);
  document.write("<br>");
  binaryToDecimalConvert(arr); // binary to decimal convertion of newly created binary digit array
}

// Binary to decimal conversion
function binaryToDecimalConvert(arr)
{
  var i = 0;
  var length = 8;
  var j = length-1;
  var decimal = 0;
  for(i=0,j=(length-1); i<length; i++,j--)
  decimal = decimal + (arr[i] * Math.pow(2,j));
  document.write("decimal form of newly created binary digits=> ")
  document.write(decimal);
}

