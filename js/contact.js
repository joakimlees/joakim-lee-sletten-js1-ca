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

/*
Function for creating error messages to the input fields.
The first parameter div element which display the message.
the second select the input field and adds the error-class to it.
the third is the message/text.
*/
function createError(messageBox, inputField, messageText) {
  messageBox.innerHTML = messageText;
  messageBox.className = "error-message";
  inputField.className = "error-class";
}

function clearErrorMessage() {
  /*
  When the function run, it start with setting successMessage innerHTML to a emty string.
   */
  successMessage.innerHTML = "";
  /*
selecting all html elements. looping through them. If any of the elements have an id which include "message-id" or "fieldInput". Remove their class name and innerHTML
*/
  document.querySelectorAll("*").forEach((htmlElement) => {
    if (htmlElement.id.includes("message-id") || htmlElement.id.includes("fieldInput")) {
      htmlElement.className = "";
      htmlElement.innerHTML = "";
    }
  });
}

/*
Checking the value's length as the first parameter, and if the value's length is greater or equal to the second parameter it returns true.
*/
function inputLength(value, minLength) {
  return value.trim().length >= minLength;
}

/*
Checking if the parameter(email) past in matches the pattern. If it do, it returns true.
*/
function emailValidator(email) {
  const pattern = /\S+@\S+\.\S+/;
  const patternMatches = pattern.test(email);
  return patternMatches;
}

/*
Validates the form/inputs. using the inputLength and emailValidator functions. 
calling on the createErrorMessage function if "they are not".
If all the inputs are "true"(using the "Check" variables). A Success Message is shown.
*/
function validateInput(event) {
  event.preventDefault();
  clearErrorMessage();

  let nameCheck = true;
  let subjectCheck = true;
  let emailCheck = true;
  let addressCheck = true;

  if (!inputLength(fullName.value, 2)) {
    nameCheck = false;
    createError(nameMessage, fullName, "Name must contain at least 2 characters");
  }
  if (!inputLength(subject.value, 10)) {
    subjectCheck = false;
    createError(subjectMessage, subject, "Subject must contain at least 10 characters");
  }
  if (!emailValidator(email.value)) {
    emailCheck = false;
    createError(emailMessage, email, "Please enter a valid email-address");
  }
  if (!inputLength(address.value, 25)) {
    addressCheck = false;
    createError(addressMessage, address, "Address must contain at least 25 characters");
  }
  if (nameCheck && subjectCheck && emailCheck && addressCheck) {
    successMessage.innerHTML = "Your form was submitted";
    form.reset();
  }
}

form.addEventListener("submit", validateInput);
