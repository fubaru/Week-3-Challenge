// Assignment Code
var generateBtn = document.querySelector("#generate")
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var uppercase = lowercase.toUpperCase()
var number = "0123456789".split("")
var special = "!@#$%^&*()".split("")

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

    for (var i = 0; i < size; i++) {
      if (isLowerCase===true) {
        var positionString = Math.floor(Math.random()*lowercase.length);
        console.log(positionString);
        finalpwd = finalpwd + lowercase[positionString];

      } 
      
      if (isUpperCase===true ) {
        var positionString = Math.floor(Math.random()*uppercase.length);
        console.log(positionString);
        finalpwd = finalpwd + uppercase[positionString];

      } 
      if (isNumber===true ) {
        var positionString = Math.floor(Math.random()*number.length);
        console.log(positionString);
        finalpwd = finalpwd + number[positionString];

      } 
      if (isSpecial===true) {
        var positionString = Math.floor(Math.random()*special.length);
        console.log(positionString);
        finalpwd = finalpwd + special[positionString];
      } 
    }
    // worked with Marquis and Erin to come up with the password jumble
   finalpwd = finalpwd.split("").sort(function() {return 0.5 - Math.random()}).join("")
    // worked with Marquis and Erin to test out the slice function to trim down the length of the password to match prompt 
   if (finalpwd.length > size) {
     finalpwd = finalpwd.slice(0,size)
   }
    

  } else {
    alert("invalid entry");
  }

  return finalpwd;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
