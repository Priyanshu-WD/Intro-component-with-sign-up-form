const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const firstName = fname.value.trim();
  const lastName = lname.value.trim();
  const emailValue = email.value.trim().toLowerCase();
  const passwordValue = password.value.trim();
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (firstName === "") {
    errorFunc(fname, "First Name cannot be empty", "fname-error");
  } else {
    successFunc(fname, "fname-error");
  }

  if (lastName === "") {
    errorFunc(lname, "Last Name cannot be empty", "lname-error");
  } else {
    successFunc(lname, "lname-error");
  }

  if (emailValue === "") {
    errorFunc(email, "Email cannot be empty", "email-error");
  } else if (!emailValue.match(emailPattern)) {
    errorFunc(email, "Looks like this is not a valid email", "email-error");
  } else {
    successFunc(email, "email-error");
  }

  if (passwordValue === "") {
    errorFunc(password, "Password cannot be empty", "password-error");
  } else {
    successFunc(password, "password-error");
  }
});

function errorFunc(req, message, errorId) {
  const errorDiv = document.getElementById(errorId);
  errorDiv.innerText = message;
  req.classList.add("error");
  if (req !== email) {
    req.value = "";
  } else {
    req.style.color = "hsl(0, 100%, 74%)";
  }
}

function successFunc(req, errorId) {
  const errorDiv = document.getElementById(errorId);
  errorDiv.innerText = "";
  req.classList.remove("error");
}
