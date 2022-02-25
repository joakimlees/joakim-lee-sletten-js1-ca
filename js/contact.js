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

const successMessage = document.querySelector("#success-message");

function formValidator(event) {
  if (inputLength(fullName.value, 1)) {
    nameError.style.display = "none";
    nameSuccess.style.display = "block";
    fullName.classList.remove("error-class");
    fullName.classList.add("success-class");
  } else {
    event.preventDefault();
    nameError.style.display = "block";
    nameSuccess.style.display = "none";
    fullName.classList.add("error-class");
  }

  if (inputLength(subject.value, 9)) {
    subjectError.style.display = "none";
    subjectSuccess.style.display = "block";
    subject.classList.remove("error-class");
    subject.classList.add("success-class");
  } else {
    event.preventDefault();
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
    event.preventDefault();
    emailSuccess.style.display = "none";
    emailError.style.display = "block";
    email.classList.add("error-class");
  }

  if (inputLength(address.value, 24)) {
    addressSuccess.style.display = "block";
    addressError.style.display = "none";
    address.classList.remove("error-class");
    address.classList.add("success-class");
  } else {
    event.preventDefault();
    addressSuccess.style.display = "none";
    addressError.style.display = "block";
    address.classList.add("error-class");
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
