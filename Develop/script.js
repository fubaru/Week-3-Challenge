// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassrod() {
  var size = prompt("Please enter 8 to 128 characters")

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
