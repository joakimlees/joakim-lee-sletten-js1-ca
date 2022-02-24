const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#error-name");
const nameSuccess = document.querySelector("#success-name");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#error-subject");
const subjectSuccess = document.querySelector("#success-subject");

const email = document.querySelector("#email");
const emailError = document.querySelector("#error-email");
const emailSuccess = document.querySelector("#success-email");

const address = document.querySelector("#address");
const addressError = document.querySelector("#error-address");
const addressSuccess = document.querySelector("#success-address");

function formValidator(event) {
  event.preventDefault();

  if (inputLength(fullName.value, 1)) {
    nameError.style.display = "none";
    nameSuccess.style.display = "block";
  } else {
    nameError.style.display = "block";
    nameSuccess.style.display = "none";
  }

  if (inputLength(subject.value, 9)) {
    subjectError.style.display = "none";
    subjectSuccess.style.display = "block";
  } else {
    subjectSuccess.style.display = "none";
    subjectError.style.display = "block";
  }

  if (emailValidator(email.value)) {
    emailSuccess.style.display = "block";
    emailError.style.display = "none";
  } else {
    emailSuccess.style.display = "none";
    emailError.style.display = "block";
  }

  if (inputLength(address.value, 24)) {
    addressSuccess.style.display = "block";
    addressError.style.display = "none";
  } else {
    addressSuccess.style.display = "none";
    addressError.style.display = "block";
  }
}

form.addEventListener("submit", formValidator);

function inputLength(value, minLength) {
  if (value.trim().length > minLength) {
    return true;
  }
  return false;
}

function emailValidator(email) {
  const pattern = /\S+@\S+\.\S+/;
  const patternMatches = pattern.test(email);
  return patternMatches;
}
