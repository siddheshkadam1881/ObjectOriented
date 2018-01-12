/*******************************************************************************
  Description: store inventory Details for Rice, Pulses and Wheats with
               properties name, weight, price per kg in storage. and then
               show inventory details.
  @author      siddheshwar kadam
  @date        09.01.2017
*******************************************************************************/


function inventoryDataManagementOfFoods() {

  var key = -1;
  var riceInfoEndIndex = 0;
  var pulseInfoEndIndex = 0;
  var wheatInfoEndIndex = 0;

  // store rice inventory
  var noOfTypeOfRice = prompt("enter how many types of rice details you want \
                               to store","");
  for(var i=0; i<noOfTypeOfRice; i++) {
    var riceObjectArr = {};
    var riceName = prompt("enter rice name","");
    var riceWeight = prompt("enter rice weight in kg.","");
    var ricePrice = prompt("enter rice price per kg","");
    riceObjectArr["riceName"] = riceName;
    riceObjectArr["riceWeight"] = riceWeight;
    riceObjectArr["ricePrice"] = ricePrice;
    ++key;
    localStorage.setItem(key, JSON.stringify(riceObjectArr));
    riceInfoEndIndex = key;
  }

  // store pulse inventory
  var noOfTypeOfPulses = prompt("enter how many types of pulse details you \
                               want to store","");
  for(var i=0; i<noOfTypeOfPulses; i++) {
    var pulseObjectArr = {};
    var pulseName = prompt("enter pulse name","");
    var pulseWeight = prompt("enter pulse weight in kg.","");
    var pulsePrice = prompt("enter pulse price per kg","");
    pulseObjectArr["pulseName"] = pulseName;
    pulseObjectArr["pulseWeight"] = pulseWeight;
    pulseObjectArr["pulsePrice"] = pulsePrice;
    ++key;
    localStorage.setItem(key, JSON.stringify(pulseObjectArr));
    pulseInfoEndIndex = key;
  }

  // store wheat inventory
  var noOfTypeOfWheats = prompt("enter how many types of wheat details you \
                                   want to store","");
  for(var i=0; i<noOfTypeOfWheats; i++) {
    var wheatObjectArr = {};
    var wheatName = prompt("enter wheat name","");
    var wheatWeight = prompt("enter wheat weight in kg.","");
    var wheatPrice = prompt("enter wheat price per kg","");
    wheatObjectArr["wheatName"] = wheatName;
    wheatObjectArr["wheatWeight"] = wheatWeight;
    wheatObjectArr["wheatPrice"] = wheatPrice;
    ++key;
    localStorage.setItem(key, JSON.stringify(wheatObjectArr));
    wheatInfoEndIndex = key;
  }

  while(1) {
    var choice = parseInt(prompt("press 1 to show rice inventory details || \
                         press 2 to show pulse inventory details || press \
                         3 to show wheat inventory details || \
                         press any other number to exit",""));
    switch(choice) {
      // show rice inventory details
      case 1:
       document.write("rice inventory details: ");
        for(var i=0; i<=riceInfoEndIndex; i++) {
          document.write(localStorage.getItem(i));
        }
        break;

        // show pulse inventory details
        case 2:
          document.write("pulse inventory details: ");
          for(var i=riceInfoEndIndex+1; i<=pulseInfoEndIndex; i++) {
            document.write(localStorage.getItem(i));
          }
          break;

          // show wheat inventory details
          case 3:
            document.write("wheat inventory details: ");
            for(var i=pulseInfoEndIndex+1; i<=wheatInfoEndIndex; i++) {
              document.write(localStorage.getItem(i));
            }
            break;

            default:
              return;
    }
  }


}
inventoryDataManagementOfFoods();
