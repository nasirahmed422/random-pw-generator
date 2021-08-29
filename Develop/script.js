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

//These will help store the password in our main generatePassword function. 
var passwordChar = '';
var newPassword;

//This is the function to return a random lowercase letter.
function getLowerCase() {
  var selectRandom = Math.floor(Math.random() * 26);
  return alpha[selectRandom];
}
//This is the function to return a random uppercase letter.
function getUpperCase() {
  var selectRandom = Math.floor(Math.random() * 26);
  //This is the same as getLowerCase, but with the toUpperCase() added.
  return alpha[selectRandom].toUpperCase();
}
//This is the function to return a random number.
function getNumber() {
  var selectRandom = Math.floor(Math.random() * 10);
  return number[selectRandom];
}
//This is the function to return a random special character.
function getSpecialCharacter() {
  var selectRandom = Math.floor(Math.random() * 26);
  return character[selectRandom];
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
