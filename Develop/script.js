// Assignment Code
var generateBtn = document.querySelector("#generate");


// Lowercase, uppercase, numeric, and/or special characters.

const lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
const uppercase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
const numeric = ['1','2','3','4','5','6','7','8','9','0']
const special = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','~','|',':',';','>','<','.','/','?'] 

// Write password to the #password input
function writePassword(validRequirements) {


  var password = createPassword(validRequirements);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add function for asking user for specific password requriements such as:
function questionUserRequirements(){
  // Length between 8 and 128 characters
  // The choice of including lowercase, uppercase, numeric, and/or special characters
  // At least one character type should be selected
  isValid = false; 
  // ensure data is valid
  do{
    var requiredlength = prompt("Choose a length for the password (8-128 characters)");
    if (requiredlength > 7 && requiredlength < 129){
      isValid = true;
    }
  }while(!isValid)
  
  isValid = false;

  do{
    var requiresLowercase = confirm("Lowercase?")
    var requiresUppercase = confirm("Uppercase?")
    var requiresNumeric = confirm("Numeric?")
    var requiresSpecial= confirm("Special?")
    if (requiresSpecial || requiresNumeric || requiresUppercase || requiresLowercase){
      isValid = true;
    }
  }while(!isValid)


  validRequirements = {
    requiredlength: requiredlength,
    requiresLowercase: requiresLowercase,
    requiresUppercase: requiresUppercase,
    requiresNumeric: requiresNumeric,
    requiresSpecial: requiresSpecial
  };
  writePassword(validRequirements);
}
// this function should only be called once questionUserRequriements has been validated correctly.
// It will create a password given the specific information provided by the user.

function createPassword(validRequirements){
  var requiredCharacters = [];
  generatedPassword = "";
  if (validRequirements.requiresLowercase){
    Array.prototype.push.apply(requiredCharacters, lowercase);
  }
  if (validRequirements.requiresUppercase){
    Array.prototype.push.apply(requiredCharacters, uppercase);
  }
  if (validRequirements.requiresNumeric){
    Array.prototype.push.apply(requiredCharacters, numeric);
    requiredCharacters.concat(numeric);
  }
  if (validRequirements.requiresSpecial){
    Array.prototype.push.apply(requiredCharacters, special);
  }
  console.log(requiredCharacters);
  console.log(validRequirements.requiredlength);

  for(var i = 0; i < validRequirements.requiredlength; i++){
    generatedPassword += requiredCharacters[Math.floor(Math.random() * (requiredCharacters.length-1))]
  }

  //generatedPassword = shuffle(requiredCharacters).slice(0, validRequirements.requiredlength).join('');
  console.log(generatedPassword)
  return generatedPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", questionUserRequirements);


// Fisher–Yates shuffle algorithm:
// This is a very well known unbiased shuffle algorithm
function shuffle(array) { 
  let currentIndex = array.length,  randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  console.log(array)
  return array;
}