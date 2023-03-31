const userName = document.getElementById("profile-name");
const userSurname = document.getElementById("profile-surname");
const userEmail = document.getElementById("profile-email");

userName.innerHTML = "John";
userSurname.innerHTML = "Newman";
userEmail.innerHTML = "john.newman@gmail.com";

let resetEmail = document.getElementById("reset-email");
resetEmail.addEventListener("click", () => {
  let newUserEmail = prompt("Your new email:");
  validateEmail(newUserEmail)
})

function validateEmail(input) {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const valid = input.match(validRegex);
  
  if (valid) {
    alert("Email address changed");
    userEmail.innerHTML = input;
  } else {
    alert("Email not valid!");
  }
}