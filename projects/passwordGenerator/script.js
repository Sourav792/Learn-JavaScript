const generateBtn = document.querySelector("#btn");
const password = document.querySelector("#password");
const copyPassword = document.querySelector("#copyPassword");
const compareBtn = document.querySelector("#compare-btn");

generateBtn.addEventListener("click", () => {
  let minValue = 100000;
  let maxValue = 999999;
  let randomPassword = Math.floor(Math.random() * ((maxValue - minValue) + 1) + minValue);
  password.innerText = randomPassword;
});

compareBtn.addEventListener('click', () => {
  let inputPassword = document.querySelector('#inputPassword');
  if (inputPassword.value == password.innerText) {
    alert('password is matched. welcome you')
}  else {
  alert('passowrd incrupted. try again')
}

})


