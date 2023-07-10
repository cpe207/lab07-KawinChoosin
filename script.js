//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const checksubmit = document.querySelector("#submit-btn");
const addemail = document.querySelector("#email-input");
const addepass = document.querySelector("#password-input");
const addFirstname = document.querySelector("#first-name-input");
const addLastname = document.querySelector("#last-name-input");
const submit = document.querySelector("#submit-btn");

addFirstname.onkeyup = () => {
  addFirstname.classList.remove("is-valid");
  addFirstname.classList.remove("is-invalid");
};

addLastname.onkeyup = () => {
  addLastname.classList.remove("is-valid");
  addLastname.classList.remove("is-invalid");
};

addemail.onkeyup = () => {
  addemail.classList.remove("is-valid");
  addemail.classList.remove("is-invalid");
};

addepass.onkeyup = () => {
  addepass.classList.remove("is-valid");
  addepass.classList.remove("is-invalid");
};

submit.onclick = () => {
  let isFirstnameok = false;
  let isLastnameok = false;
  let isemailok = false;
  let ispassok = false;
  if (addFirstname.value === "") {
    addFirstname.classList.add("is-invalid");
  } else {
    addFirstname.classList.add("is-valid");
    isFirstnameok = true;
  }
  if (addLastname.value === "") {
    addLastname.classList.add("is-invalid");
  } else {
    addLastname.classList.add("is-valid");
    isLastnameok = true;
  }
  if (validateEmail(addemail.value)) {
    addemail.classList.add("is-valid");
    isemailok = true;
  } else {
    addemail.classList.add("is-invalid");
    isemailok = false;
  }
  if (addepass.value.length >= 6) {
    addepass.classList.add("is-valid");
    ispassok = true;
  } else {
    addepass.classList.add("is-invalid");
  }
  if (isFirstnameok && isLastnameok && isemailok && ispassok && true) {
    alert("Registered successfully");
  }
};
