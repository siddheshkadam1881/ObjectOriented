function cliniqueManagement() {
  var doctorObject = {};
  var patientObject = {};
  var key = -1;
  var doctorIndexEnd = 0;
  var patientIndexEnd = 0;
  var appointmentDoctorArr = [];
  var appointmentPatientArr = [];
  var appointmentDoctorIndex = -1;
  var appointmentPatientIndex = -1;

  // Store doctors info
  var NoOfDoctorsToStoreInfo = parseInt(prompt("enter no of doctors to store \
                                                their information", ""));
  for (var i = 0; i < NoOfDoctorsToStoreInfo; i++) {
    var doctorName = prompt("doctor name", "");
    var doctorId = parseInt(prompt("doctor id", ""));
    var doctorSpecialization = prompt("doctor specialization", "");
    var doctorTiming = prompt("doctor timing (eg: 10-14)", "");
    doctorObject["name"] = doctorName;
    doctorObject["id"] = doctorId;
    doctorObject["specialization"] = doctorSpecialization;
    doctorObject["timing"] = doctorTiming;
    ++key;
    localStorage.setItem(key, JSON.stringify(doctorObject));
    doctorIndexEnd = key;
  }

  // Store patients info
  var NoOfPatientsToStoreInfo = parseInt(prompt("enter no of patients to store \
                                                 their information", ""));
  for (var i = 0; i < NoOfPatientsToStoreInfo; i++) {
    var patientName = prompt("patient name", "");
    var patientId = parseInt(prompt("patient id", ""));
    var patientMobile = parseInt(prompt("patient mobile", ""));
    var patientAge = parseInt(prompt("patient age", ""));
    patientObject["name"] = patientName;
    patientObject["id"] = patientId;
    patientObject["mobile"] = patientMobile;
    patientObject["age"] = patientAge;
    ++key;
    localStorage.setItem(key, JSON.stringify(patientObject));
    patientIndexEnd = key;
  }

  // search info
  while (1) {
    var choice = parseInt(prompt("press 1 to search doctor information ||   \
                                  press 2 to search patient information ||  \
                                  press 3 to take appointment || press 4 to \
                                  see appointment info", ""));
    switch (choice) {

      // Search a doctor
      case 1:
        var choose = prompt("press 1 to search by name || press 2 to search   \
                             by id || press 3 to search by specialization ||  \
                             press 4 to search by availability", "");
        if (choose == 1) {
          var doctorNameToSearch = prompt("enter doctor name", "");
          for (var j = 0; j <= doctorIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].name == doctorNameToSearch) {
               console.log(JSON.stringify(array[0]));
            }
          }
        } else if (choose == 2) {
          var doctorIdToSearch = parseInt(prompt("enter doctor id", ""));
          for (var j = 0; j <= doctorIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].id == doctorIdToSearch) {
               console.log(JSON.stringify(array[0]));
            }
          }
        } else if (choose == 3) {
          var doctorSpecializationToSearch = prompt("enter doctor       \
                                                     specialization", "");
          for (var j = 0; j <= doctorIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].specialization == doctorSpecializationToSearch) {
               console.log(JSON.stringify(array[0]));
            }
          }
        } else if (choose == 4) {
          var doctorTimingToSearch = parseInt(prompt("enter doctor timing \
                                                      (eg: 10 or 15)", ""));
          for (var j = 0; j <= doctorIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            var tempDoctorTimingArray = array[0].timing.split("-").map(Number);
            if (tempDoctorTimingArray[0] <= doctorTimingToSearch &&
                tempDoctorTimingArray[1] >= doctorTimingToSearch)
               console.log(JSON.stringify(array[0]));
          }
        }
        break;

      // Search a patient
      case 2:
        var choose = prompt("press 1 to search by name || press 2 to search \
                             by id || press 3 to search by mobile");
        if (choose == 1) {
          var patientNameToSearch = prompt("enter patient name", "");;
          for (var j = doctorIndexEnd + 1; j <= patientIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].name == patientNameToSearch)
              console.log(JSON.stringify(array[0]));
          }
        } else if (choose == 2) {
          var patientIdToSearch = parseInt(prompt("enter patient id", ""));
          for (var j = doctorIndexEnd + 1; j <= patientIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].id == patientIdToSearch)
              console.log(JSON.stringify(array[0]));
          }
        } else if (choose == 3) {
          var patientMobileToSearch = parseInt(prompt("enter patient  \
                                                       mobile", ""));
          for (var j = doctorIndexEnd + 1; j <= patientIndexEnd; j++) {
            var array = [];
            array[0] = JSON.parse(localStorage.getItem(j));
            if (array[0].mobile == patientMobileToSearch)
              console.log(JSON.stringify(array[0]));
          }
        }
        break;

      // Appointment
      case 3:
        var doctorName = prompt("enter doctor name", "");
        var temp = true;

        for (var j = 0; j <= doctorIndexEnd; j++) //check valid doctor
        {
          var count = 0;
          var array = [];
          array[0] = JSON.parse(localStorage.getItem(j));
          if (array[0].name == doctorName) {

            // check appoinments of a doctor exceed 5 or not
            for (var x = 0; x < appointmentDoctorArr.length; x++)
            {
              if (appointmentDoctorArr[x] == j)
                count++;
            }
            if (count > 5) {
              temp = false;
              break;
            }
            ++appointmentDoctorIndex;
            appointmentDoctorArr[appointmentDoctorIndex] = j;
          }
        }
        if (temp == false) {
          alert("doctor appointment full, not available");
          break;
        }

        var patientName = prompt("enter patient name", "");

        //check valid patient
        for (var j = doctorIndexEnd + 1; j <= patientIndexEnd; j++)
        {
          var array = [];
          array[0] = JSON.parse(localStorage.getItem(j));
          if (array[0].name == patientName) {
            ++appointmentPatientIndex;
            appointmentPatientArr[appointmentPatientIndex] = j;
          }
        }
        break;

      // Appointment info
      case 4:
        for (var i = 0; i < appointmentDoctorArr.length; i++) {
          var appointmentDoctorObjectArr = [];
          var appointmentPatientObjectArr = [];
          appointmentDoctorObjectArr[0] = JSON.parse(localStorage.getItem(
                                                     appointmentDoctorArr[i]));
          appointmentPatientObjectArr[0] = JSON.parse(localStorage.getItem(
                                                    appointmentPatientArr[i]));
          console.log("doctor name: " + appointmentDoctorObjectArr[0].name);
          console.log("patient name: " + appointmentPatientObjectArr[0].name);
        }
        break;

      default:
        return;
    }
  }
}
cliniqueManagement();
