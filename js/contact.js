const form = document.querySelector("#contact-form");
const fullName = document.querySelector("#name");
const nameError = document.querySelector("#error-name");

const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#error-subject");

const email = document.querySelector("#email");
const emailError = document.querySelector("#error-email");

const address = document.querySelector("#address");
const addressError = document.querySelector("#error-address");

function formValidator(event) {
  event.preventDefault();

  if (inputLength(fullName.value, 1)) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }

  if (inputLength(subject.value, 9)) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (emailValidator(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (inputLength(address.value, 24)) {
    addressError.style.display = "none";
  } else {
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
