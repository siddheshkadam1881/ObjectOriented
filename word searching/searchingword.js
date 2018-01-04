

/*******************************************************************************************************************************

 *
 *  Purpose         :Read in a list of words from File.Then prompt the user to enter a word to
                     search the list. program reports if the search word is found in the list.
 *
 *
 *
 *  @file           : searchingword.js
 *  @overview       : a program reports if the search word is found in the list.
 *  @author         : siddheshwar kadam
 *  @version        : 1.0
 *  @since          : 06-08-2017
 *
 **********************************************************************************************************************************/
var contentsarray = [];  // where I will store the contents
var usertext="";
var flag=0;

/* read file and stored the data into contentarray */
function readMultipleFiles(evt) {
    //Retrieve all the files from the FileList object
    var files = evt.target.files;
    window.array = []
    if (files) {
        for (var i = 0, f; f = files[i]; i++) {
            var readfile = new FileReader();
            readfile.onload = (function (f) {
                return function (e) {
                    var contents = e.target.result;
                     contentsarray = contents.split(" ");
                    //put all string into contest1
                    searching();
                };
            })(f);
            readfile.readAsText(f);
        }
        console.log(contentsarray);
    } else {
        alert("Failed to load files");
    }
}
console.log(document.getElementById('file'));
document.getElementById('file').addEventListener('change', readMultipleFiles, false);

function searching()
{
/* prompt option provide to user for searching purpose */
 usertext=prompt("Please enter your word:", "ex.hello");
 for(var i=0;i<contentsarray.length;i++)
{
  if(contentsarray[i]==usertext)
   {
    flag=1;
    break;
   }
   else
   {
   flag=0;
   }
}
  if(flag==1)
  {
  document.write(usertext+ " is present in file");
  }
  else
  {
  document.write(usertext+ " is not present in file");
  }
}
