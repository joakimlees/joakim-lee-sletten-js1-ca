const form = document.querySelector("#contact-form");
const name = document.querySelector("#name");
const nameError = document.querySelector("#error-name");

function formValidator() {
  event.preventDefault();

  console.log("rick and joakim");
}

form.addEventListener("submit", formValidator);
