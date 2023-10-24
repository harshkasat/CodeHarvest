let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}

setTimeout(() => {
	container.classList.add('sign-in')
}, 200)

// Get references to the dropdown, forms, and signup button
// Get references to the role dropdown, signup forms, and signup button
const roleDropdown = document.getElementById("role");
const doctorSignupForm = document.getElementById("doctorSignup");
const patientSignupForm = document.getElementById("patientSignup");
const sellerSignupForm = document.getElementById("sellerSignup");
const signupButton = document.getElementById("signupButton");

// Event listener for dropdown change
roleDropdown.addEventListener("change", function () {
    if (roleDropdown.value === "doctor") {
        doctorSignupForm.style.display = "block";
        patientSignupForm.style.display = "none";
        sellerSignupForm.style.display = "none";
    } else if (roleDropdown.value === "patient") {
        doctorSignupForm.style.display = "none";
        patientSignupForm.style.display = "block";
        sellerSignupForm.style.display = "none";
    } else if (roleDropdown.value === "seller") {
        doctorSignupForm.style.display = "none";
        patientSignupForm.style.display = "none";
        sellerSignupForm.style.display = "block";
    }
});

// Event listener for signup button
signupButton.addEventListener("click", function () {
    if (roleDropdown.value === "doctor") {
        // Handle doctor signup data from doctorForm
        const doctorName = document.getElementById("doctorName").value;
        const doctorEmail = document.getElementById("doctorEmail").value;
        const doctorPhone = document.getElementById("doctorPhone").value;
        const doctorPassword = document.getElementById("doctorPassword").value;
        const doctorDegree = document.getElementById("doctorDegree").value;
        const clinicName = document.getElementById("clinicName").value;
        // Process doctor signup data
    } else if (roleDropdown.value === "patient") {
        // Handle patient signup data from patientForm
        const patientName = document.getElementById("patientName").value;
        const patientEmail = document.getElementById("patientEmail").value;
        const patientPhone = document.getElementById("patientPhone").value;
        const patientPassword = document.getElementById("patientPassword").value;
        // Process patient signup data
    } else if (roleDropdown.value === "seller") {
        // Handle seller signup data from userForm
        const sellerName = document.getElementById("sellerName").value;
        const sellerEmail = document.getElementById("sellerEmail").value;
        const sellerPhone = document.getElementById("sellerPhone").value;
        const shopName = document.getElementById("shopName").value;
        const sellerPassword = document.getElementById("sellerPassword").value;
        // Process seller signup data
    }
});

// Initialize Google Sign-In
function initializeGoogleSignIn() {
    gapi.load('auth2', function () {
        gapi.auth2.init({
            client_id: 'YOUR_GOOGLE_CLIENT_ID', // Replace with your Google Client ID
        });
    });
}

window.addEventListener("load", function () {
    const selectedRole = roleDropdown.value;
    if (selectedRole !== "Select User") {
      signupButton.style.display = "block";
    }
});
