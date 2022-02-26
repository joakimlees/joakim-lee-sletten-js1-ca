const form = document.querySelector("#contact-form");

const fullName = document.querySelector("#name-fieldInput");
const nameMessage = document.querySelector("#name-message-id");

const subject = document.querySelector("#subject-fieldInput");
const subjectMessage = document.querySelector("#subject-message-id");

const email = document.querySelector("#email-fieldInput");
const emailMessage = document.querySelector("#email-message-id");

const address = document.querySelector("#address-fieldInput");
const addressMessage = document.querySelector("#address-message-id");

const successMessage = document.querySelector("#success-id");

function createError(messageBox, inputField, messageText) {
  messageBox.innerHTML = messageText;
  messageBox.className = "error-message";
  inputField.className = "error-class";
}

function clearErrorMessage() {
  successMessage.innerHTML = "";

  document.querySelectorAll("*").forEach((htmlElement) => {
    if (htmlElement.id.includes("message-id") || htmlElement.id.includes("fieldInput")) {
      htmlElement.className = "";
      htmlElement.innerHTML = "";
    }
  });
}

function validateInput(event) {
  event.preventDefault();
  clearErrorMessage();

  let nameCheck = true;
  let subjectCheck = true;
  let emailCheck = true;
  let addressCheck = true;

  if (!inputLength(fullName.value, 2)) {
    nameCheck = false;
    createError(nameMessage, fullName, "must contain atleast 2 characters");
  }
  if (!inputLength(subject.value, 10)) {
    subjectCheck = false;
    createError(subjectMessage, subject, "must contain atleast 10 characters");
  }
  if (!emailValidator(email.value)) {
    emailCheck = false;
    createError(emailMessage, email, "must be email");
  }
  if (!inputLength(address.value, 25)) {
    addressCheck = false;
    createError(addressMessage, address, "must contain atleast 25 characters");
  }
  if (nameCheck && subjectCheck && emailCheck && addressCheck) {
    successMessage.innerHTML = "Success!";
    form.reset();
  }
}

function inputLength(value, minLength) {
  return value.trim().length >= minLength;
}

function emailValidator(email) {
  const pattern = /\S+@\S+\.\S+/;
  const patternMatches = pattern.test(email);
  return patternMatches;
}

form.addEventListener("submit", validateInput);
