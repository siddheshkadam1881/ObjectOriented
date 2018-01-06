
/*******************************************************************************************************

        @Purpose: To the Util Class add temperaturConversion static function, given the temperature
                  in fahrenheit as input outputs the temperature in Celsius or viceversa using the
                  formula

 *
 *  @file           : temperaturConversion.js
 *  @overview       :given the temperature   in fahrenheit as input outputs
                    the temperature in Celsius or viceversa using the formula
 *  @author         : siddheshwar kadam
 *
 ******************************************************************************************************/



function tempConversionFahrenheit()
{
/* take value from user and then convert it into Fahrenheit*/
var Celsius=parseFloat(document.getElementById("celsius").value);
var Fahrenheit=Celsius *(9/5)+32;
document.write("temparature in Fahrenheit "+Fahrenheit);

}

function tempConversionCelsius()
{
  /*  take value from user and then convert it into celsius */
var Fahrenheit=parseFloat(document.getElementById("Fahrenheit").value);
var Celsius= (Fahrenheit - 32)* 5/9;
document.write("temparature in Celsius "+Celsius);
}
