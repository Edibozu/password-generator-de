// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// All Your Code Goes Here
function generatePassword(){
  //TODO: GENERATE A REAL PASSWORD AND REPLACE RETURN STRING WITH A REAL PASSWORD STRING.
  return "THIS IS NOT MY FINAL PASSWORD!"
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
