let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");

function HandleInputs() {

    if (!nameInput.value) {
        nameInput.style.border = "red 2px solid";
    } else {
        nameInput.style.border = "1px solid rgb(204, 204, 204)";
    }
    if (!emailInput.value) {
        emailInput.style.border = "red 2px solid";
    } else {
        emailInput.style.border = "1px solid rgb(204, 204, 204)";
    }
    if (!subjectInput.value) {
        subjectInput.style.border = "red 2px solid";
    } else {
        subjectInput.style.border = "1px solid rgb(204, 204, 204)";
    } return false
};

// banner visibility
function myFunction() {
    document.getElementById("banner").style.visibility = "visible";
  };

// x button
function closeBanner() {
    document.getElementById("banner").style.visibility = "hidden";
};