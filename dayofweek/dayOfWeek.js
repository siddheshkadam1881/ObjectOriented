/******************************************************************************
 
 *  @author  siddheshwar kadam
 *  @version 1.0
 *  @since   09-08-2017
 *
 *  Read in the month (m), day (d), and year (y) and print out what
 *  day of the week it falls on according to the Gregorian calendar.
 *  For M use 1 for January, 2 for February, and so forth. Outputs
 *  0 for Sunday, 1 for Monday, and so forth.
 *
 *        y0 = y - (14 - m) / 12
 *        x = y0 + y0/4 - y0/100 + y0/400
 *        m0 = m + 12 * ((14 - m) / 12) - 2
 *        d = (d + x + (31*m0)/12) mod 7
 *
 *
 *  % java DayOfWeek 8 2 1953      // August 2, 1953
 *  0                              // Sunday
 *
 *  % java DayOfWeek 1 1 2000      // January 1, 2000
 *  6                              // Saturday
 *
 ******************************************************************************/
     function gregoriancalendar()
       { 
        var m = parseInt(document.getElementById("month").value);
        var d = parseInt(document.getElementById("date").value);
        var y = parseInt(document.getElementById("year").value);
        var y0 =parseFloat(y - (14 - m) / 12);
        var x = parseFloat(y0 + y0/4 - y0/100 + y0/400);
        var m0 =parseFloat(m + 12 * ((14 - m) / 12) - 2);
        var d0 =parseFloat((d + x + (31*m0)/12) % 7);
        switch(d0)
        {
            case 0:
                document.write("Sunday");
                break;
            case 1:
                document.write("Monday");
                break;
            case 2:
                document.write("Tuesday");
                break;
            case 3:
                document.write("Wednesday");
                break;
            case 4:
                document.write("Thursday");
                break;
            case 5:
                document.write("Friday");
                break;
            default:
                document.write("Saturday");
                break;                
        }
    }

