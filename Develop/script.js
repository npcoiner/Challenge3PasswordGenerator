// Assignment Code
var generateBtn = document.querySelector("#generate");


// Lowercase, uppercase, numeric, and/or special characters.

var lowercase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var uppercase = [A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z]
var numeric = [1,2,3,4,5,6,7,8,9,0]
var special = ['!','@','#','$','%','^','&','*','(',')','-','_','=','+','~','|',':',';','>','<','.','/','?'] 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add function for asking user for specific password requriements such as:
function questionUserRequirements (){
// Length between 8 and 128 characters
// The choice of including lowercase, uppercase, numeric, and/or special characters
// At least one character type should be selected
isValid = false; 
// ensure data is valid
  while(!isValid){
    var requiredlength = prompt("Choose a length for the password (8-128 characters)");
    if (requiredlength > 7 && requiredlength < 129){
      isValid = true;
    }
  }
  isValid = false;
  while(!isValid){
    var requiresLowercase = confirm("Lowercase?")
    var requiresUppercase = confirm("Uppercase?")
    var requiresNumeric = confirm("Numeric?")
    var requiresSpecial= confirm("Special?")
    if (requiresSpecial && requiresNumeric && requiresUppercase&& requiresLowercase){
      isValid = true;
    }
  }
  
  
  
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
