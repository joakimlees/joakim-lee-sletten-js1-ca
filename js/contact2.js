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

const successMessage = document.querySelector("#successes-confirmation");

function formValidator(event) {
  event.preventDefault();

  if (inputLength(fullName.value, 2)) {
    nameError.style.display = "none";
    nameSuccess.style.display = "block";
    fullName.classList.remove("error-class");
    fullName.classList.add("success-class");
  } else {
    nameError.style.display = "block";
    nameSuccess.style.display = "none";
    fullName.classList.add("error-class");
  }

  if (inputLength(subject.value, 10)) {
    subjectError.style.display = "none";
    subjectSuccess.style.display = "block";
    subject.classList.remove("error-class");
    subject.classList.add("success-class");
  } else {
    subjectSuccess.style.display = "none";
    subjectError.style.display = "block";
    subject.classList.add("error-class");
  }

  if (emailValidator(email.value)) {
    emailSuccess.style.display = "block";
    emailError.style.display = "none";
    email.classList.remove("error-class");
    email.classList.add("success-class");
  } else {
    emailSuccess.style.display = "none";
    emailError.style.display = "block";
    email.classList.add("error-class");
  }

  if (inputLength(address.value, 25)) {
    addressSuccess.style.display = "block";
    addressError.style.display = "none";
    address.classList.remove("error-class");
    address.classList.add("success-class");
  } else {
    addressSuccess.style.display = "none";
    addressError.style.display = "block";
    address.classList.add("error-class");
  }

  if (inputLength(fullName.value, 2) && inputLength(subject.value, 10) && emailValidator(email.value) && inputLength(address.value, 25)) {
    successMessage.style.display = "block";
  } else {
    successMessage.style.display = "none";
  }
}

form.addEventListener("submit", formValidator);

function inputLength(value, minLength) {
  if (value.trim().length >= minLength) {
    return true;
  }
  return false;
}

function emailValidator(email) {
  const pattern = /\S+@\S+\.\S+/;
  const patternMatches = pattern.test(email);
  return patternMatches;
}
