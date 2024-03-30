const generateBtn = document.querySelector("#btn");
const password = document.querySelector("#password");
const copyPassword = document.querySelector("#copyPassword");
const compareBtn = document.querySelector("#compare-btn");

let length = 8;

let uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowercase = 'abcdefghijklmnopqrstuvwxyz';
let number = '0123456789';

let allCharaters = uppercase + lowercase + number ;

generateBtn.addEventListener("click", () => {
  let randompassword = '';
  randompassword += uppercase[Math.floor(Math.random() * uppercase.length)]; 
  randompassword += lowercase[Math.floor(Math.random() * lowercase.length)];
  randompassword += number[Math.floor(Math.random() * number.length)]; 
  
  while (length > randompassword.length) {
    randompassword += allCharaters[Math.floor(Math.random() * allCharaters.length)]
  }
  password.value = randompassword;
});
// copy password
copyPassword.addEventListener("click", function () {
  password.select();
  document.execCommand('copy')
});

// compare password
compareBtn.addEventListener('click', function() {
  let inputPassword = document.querySelector('#inputPassword');
  // compare password
  if (inputPassword.value === password.value) {
    alert('password is matched.')
}  else {
  alert('passowrd incrupted. try again')
}
}) 


