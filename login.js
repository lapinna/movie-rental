const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
const loginPassword = document.getElementById("password");

function validateLogin() {
  if (loginEmail.value === "" || loginPassword.value === "") {
    if (loginEmail.value === "") {
      alert("Email field must be filled");
    } else {
      alert("Password field must be filled");
    }
  } else {
    window.location.href = "home.html";
  }
}

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  validateLogin();
  loginForm.reset();
});

const registerForm = document.getElementById("register-form");
// const registerBtn = document.getElementById("register-btn");

// registerBtn.addEventListener("click", () => {
//   if(registerForm.style.display === "none") {
//     registerForm.style.display = "block";
//   } else {
//     registerForm.style.display = "none";
//   }
// })

const restrictionsByElement = new Map();
restrictionsByElement.set("name", { length: 2, content: "empty" });
restrictionsByElement.set("surname", { length: 2, content: "empty" });
restrictionsByElement.set("email1", { content: "empty" });
restrictionsByElement.set("email2", { equality: "email1", content: "empty" });
restrictionsByElement.set("password1", { length: 8, content: "empty" });
restrictionsByElement.set("password2", { equality: "password1", content: "empty" });

function capitalizeFirst(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function populateClasses(elem, cName, error, eName, content) {
  elem.className = cName;
  error.textContent = content;
  error.className = eName;
}

function restrictionCheck(elem, error, elementName, restriction) {
  let passed;
    if (restriction.content === "empty") {
      let isValidContent = passed = validateContent(elem, error, elementName);
      if (isValidContent && restriction.length) {
        passed = validateLength(elem, restriction.length, error, elementName);
      } else if (isValidContent && restriction.equality) {
        passed = validateEqual(elem, restriction.equality, error, elementName);
      }
    }
    return passed;
}

function validateLength(elem, restrictionValue, error, elementName) {
  if (elem.value.length < restrictionValue) {
    let textContent = `${capitalizeFirst(elementName)} field should contain ${restrictionValue} or more letters`;
    populateClasses(elem, "invalid", error, "error active", textContent);
    return false;
  }
  populateClasses(elem, "valid", error, "error", "");
  return true;
}

function validateEqual(elem, restrictionValue, error, elementName) {
  const pairElement = document.getElementById(restrictionValue).value;
  if (elem.value !== pairElement) {
    let textContent = `${capitalizeFirst(elementName)} field does not match`;
    populateClasses(elem, "invalid", error, "error active", textContent);
    return false;
  }
  populateClasses(elem, "valid", error, "error", "");
  return true;
}

function validateContent(elem, error, elementName) {
  if (elem.value === "") {
    let textContent = `${capitalizeFirst(elementName)} field must be filled`;
    populateClasses(elem, "invalid", error, "error active", textContent);
    return false;
  }
  populateClasses(elem, "valid", error, "error", "");
  return true;
}

function validateField(elementName, restriction) {
  const error = document.querySelector(`#${elementName} + span.error`);
  const elem = document.getElementById(elementName);
  if (Object.keys(restriction).length !== 0) {
    return restrictionCheck(elem, error, elementName, restriction);
  } 
}

function validateRegister() {
  const validationResults = [];
  for (const [element, restriction] of restrictionsByElement) {
    const result = validateField(element, restriction);
    validationResults.push(result);
  }
  const validate = validationResults.filter((result) => result === false).length === 0;
  return validate;
}

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  if (validateRegister()) {
    window.location.href = "home.html";
    registerForm.reset();
  }
});