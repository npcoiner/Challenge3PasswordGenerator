// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add function for asking user for specific password requriements such as:
function questionUserRequirements{
// Length between 8 and 128 characters
// The choice of including lowercase, uppercase, numeric, and/or special characters
// At least one character type should be selected
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
