// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//This will store the password length.
var digits;

//These are the bool values that will be stored to determine the criteria for the password.
var isLowerCase;
var isUpperCase;
var isNumber;
var isSpecialCharacter;

//These are the arrays where characters for the password will be randomly selected from.
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var character = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', ',', '.', '?', ';', ':', '{', '}', '[', ']', '|'];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
