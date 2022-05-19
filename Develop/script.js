// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz"
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
  var finalpwd=""

  var size = prompt("Please enter 8 to 128 characters")
  console.log(size)
  // then do validation
  if (size >= 8 && size <= 128) {
    var isLowerCase = confirm("include lowercase?");
    console.log(isLowerCase);

    var isUpperCase = confirm("include uppercase?");
    console.log(isUpperCase);

    var isNumber = confirm("include number?");
    console.log(isNumber);

    var isSpecial = confirm("include special?");
    console.log(isSpecial);

    for (var i = 0; i <= size; i++) {
      if (isLowerCase===true && isUpperCase!==true && isNumber!==true && isSpecial!==true) {
        var positionString = Math.floor(Math.random()*26);
        console.log(positionString);
        finalpwd = finalpwd + lowercase[positionString];

      } else if (isLowerCase!==true && isUpperCase===true && isNumber!==true &&isSpecial!==true) {
        var positionString = Math.floor(Math.random()*26);
        console.log(positionString);
        finalpwd = finalpwd + uppercase[positionString];

      } else if (isLowerCase!==true && isUpperCase!==true && isNumber===true &&isSpecial!==true) {
        var positionString = Math.floor(Math.random()*10);
        console.log(positionString);
        finalpwd = finalpwd + number[positionString];

      } else if (isLowerCase!==true && isUpperCase!==true && isNumber!==true &&isSpecial===true) {
        var positionString = Math.floor(Math.random()*10);
        console.log(positionString);
        finalpwd = finalpwd + special[positionString];

      } else if (isLowerCase===true && isUpperCase===true && isNumber!==true &&isSpecial===true) {
        var positionString = Math.floor(Math.random()*10);
        console.log(positionString);
        finalpwd = finalpwd + lowercase[positionString] + uppercase[positionString];

      }
    }
    return finalpwd;
    

  } else {
    alert("invalid entry");
  }

 



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
