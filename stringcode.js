// Function to validate form inputs
function validateForm() {

    // Get values from inputs
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let zipCode = document.getElementById("zipCode").value;

    // Combine names
    let fullName = firstName + " " + lastName;

    // Get output area
    let output = document.getElementById("output");

    // Clear previous messages
    output.innerHTML = "";

    // ---- NAME VALIDATION ----
    if (fullName.length > 20) {
        output.innerHTML = "❌ Name must be 20 characters or less.";
        return false; // stops form submission
    }

    // ---- ZIP VALIDATION ----
    let zipPattern = /^\d{5}$/;

    if (!zipPattern.test(zipCode)) {
        output.innerHTML = "❌ Zip code must be exactly 5 digits.";
        return false;
    }

    // ---- SUCCESS ----
    output.innerHTML =  " Welcome " + fullName + "! Secret Message: Access Granted! You are Amazing!";

    return false; // prevents page refresh so message stays
}