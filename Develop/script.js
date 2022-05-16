// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcedefghijklmnopqrstuvxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789"
var special = "!@#$%^&*()"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var size = prompt("Please enter 8 to 128 characters")
  console.log(size)
  // then do validation
  if (size >= 8 && size <= 128) {
    var isLowerCase = confirm("include lowercase?")
    console.log(isLowerCase)

    var isUpperCase = confirm("include uppercase?")
    console.log(isUpperCase)

    var isNumber = confirm("include number?")
    console.log(isLowerCase)

    var isSpecial = confirm("include special?")
    console.log(isSpecial)

    if (isLowerCase===true) {
      var positionString = Math.floor(Math.random()*26)
      console.log()
    }
  } else {
    alert("invalid entry")
  }



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
