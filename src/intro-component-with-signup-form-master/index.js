const firstName = document.getElementById("firstname"),
  lastName = document.getElementById("lastname"),
  email = document.getElementById("email"),
  password = document.getElementById("password");

const form = document.getElementById("form");

const formControl = document.querySelectorAll(".form-control");
const errMessage = document.querySelectorAll(".err-message");

const inputArray = [firstName, lastName, email, password];

function checkRequired(inputArray) {
  inputArray.forEach((input, index) => {
    if (input.value === "") {
      showError(input, index, `${input.placeholder} cannot be empty`);
    } else if (!formControl[index].classList.contains("mb")) {
      updateUI(input, index);
      showSuccess(input, index);
    } else {
      showSuccess(input, index);
      setTimeout(() => {
        input.value = "";
        input.classList.remove("success");
      }, 3000);
    }
  });
}

function showError(input, index, message) {
  input.nextElementSibling.classList.remove("hidden");
  input.classList.add("error");
  errMessage[index].classList.remove("hidden");
  errMessage[index].innerHTML = message;
  formControl[index].classList.remove("mb");
}

function showSuccess(input) {
  input.classList.add("success");
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkRequired(inputArray);
});
