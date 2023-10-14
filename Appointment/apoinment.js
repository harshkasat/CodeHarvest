const firebaseConfig = {
  apiKey: "AIzaSyADkQRzNW-dVyjixkClFc_VtXyCVCjRNTs",
  authDomain: "appoinment-seduling.firebaseapp.com",
  databaseURL: "https://appoinment-seduling-default-rtdb.firebaseio.com",
  projectId: "appoinment-seduling",
  storageBucket: "appoinment-seduling.appspot.com",
  messagingSenderId: "764525107288",
  appId: "1:764525107288:web:2f26f13ae565749093122d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Reference your database
var appointmentDB = firebase.database().ref("appointments");

document.getElementById("appointmentForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var firstName = getElementVal("firstName");
  var lastName = getElementVal("lastName");
  var emailId = getElementVal("emailId");
  var contactNumber = getElementVal("contactNumber");
  var appointmentDateTime = getElementVal("appointmentDateTime");

  saveAppointment(firstName, lastName, emailId, contactNumber, appointmentDateTime);

  // Enable alert
  document.querySelector(".alert").style.display = "block";

  // Remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Reset the form
  document.getElementById("appointmentForm").reset();
}

const saveAppointment = (firstName, lastName, emailId, contactNumber, appointmentDateTime) => {
  var newAppointment = appointmentDB.push();

  newAppointment.set({
    firstName: firstName,
    lastName: lastName,
    emailId: emailId,
    contactNumber: contactNumber,
    appointmentDateTime: appointmentDateTime
  });
};

const getElementVal = (id) => {
  return document.getElementById(id).value;
};
