function regularExpression() {
  var firstName = document.getElementById("firstName").value;
  var fullName = document.getElementById("fullName").value;
  var mobile = document.getElementById("mobile").value;
  var date = document.getElementById("date").value;

  var message = "Hello 'name', We have your full name as 'full name' in our system. your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.";

  var nameModifiedMessage = message.replace("'name'", firstName);
  var fullNameModifiedMessage = nameModifiedMessage.replace("'full name'", fullName);
  var mobileModifiedMessage = fullNameModifiedMessage.replace("91-xxxxxxxxxx", mobile);
  var dateModifiedMessage = mobileModifiedMessage.replace("01/01/2016", date);

  document.getElementById("demo").innerHTML = dateModifiedMessage;
}
