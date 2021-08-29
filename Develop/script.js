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

//This is the code that will run when the user clicks on the Generate Password button.
function generatePassword() {
  newPassword = '';
  digits = window.prompt("Please enter the number of digits you would like your new password to be. Must be between 8 to 128.");
  //If the user provides an invalid entry then an alert will display and they will need to click on the Generate Password button again.
  if (isNaN(digits) || digits < 8 || digits > 128) {
    alert("You did not provide a number between 8 and 128. Click Generate Password to try again.");
  }
  else {
    isLowerCase = confirm("Will password have lowercase letters?");
    isUpperCase = confirm("Will password have uppercase letters?");
    isNumber = confirm("Will password have numbers?");
    isSpecialCharacter = confirm("Will password have special characters?");
  }

  //Run in for loop for the length of the password.
  for (i = 0; i < digits; i++) {
    //When breaking down all the potential scenarios between the four options there are 16 choices.
    //A function within the if-else blocks will run based off the user input.
    if (isLowerCase && isUpperCase &&  isNumber && isSpecialCharacter) {
      var case1 = [getLowerCase(), getUpperCase(), getNumber(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 4);
      passwordChar = case1[selectRandom];
    }
    else if (isLowerCase && isUpperCase &&  isNumber && !isSpecialCharacter) {
      var case2 = [getLowerCase(), getUpperCase(), getNumber()];
      var selectRandom = Math.floor(Math.random() * 3);
      passwordChar = case2[selectRandom];
    }
    else if (isLowerCase && isUpperCase &&  !isNumber && isSpecialCharacter) {
      var case3 = [getLowerCase(), getUpperCase(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 3);
      passwordChar = case3[selectRandom];
    }
    else if (isLowerCase && isUpperCase &&  !isNumber && !isSpecialCharacter) {
      var case4 = [getLowerCase(), getUpperCase()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case4[selectRandom];
    }
    else if (isLowerCase && !isUpperCase &&  isNumber && isSpecialCharacter) {
      var case5 = [getLowerCase(), getNumber(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 3);
      passwordChar = case5[selectRandom];
    }
    else if (isLowerCase && !isUpperCase &&  isNumber && !isSpecialCharacter) {
      var case6 = [getLowerCase(), getNumber()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case6[selectRandom];
    }
    else if (isLowerCase && !isUpperCase &&  !isNumber && isSpecialCharacter) {
      var case7 = [getLowerCase(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case7[selectRandom];
    }
    else if (isLowerCase && !isUpperCase &&  !isNumber && !isSpecialCharacter) {
      passwordChar = getLowerCase();
    }
    else if (!isLowerCase && isUpperCase &&  isNumber && isSpecialCharacter) {
      var case9 = [getUpperCase(), getNumber(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 3);
      passwordChar = case9[selectRandom];
    }
    else if (!isLowerCase && isUpperCase &&  isNumber && !isSpecialCharacter) {
      var case10 = [getUpperCase(), getNumber()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case10[selectRandom];
    }
    else if (!isLowerCase && isUpperCase &&  !isNumber && isSpecialCharacter) {
      var case11 = [getUpperCase(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case11[selectRandom];
    }
    else if (!isLowerCase && isUpperCase &&  !isNumber && !isSpecialCharacter) {
      passwordChar = getUpperCase();
    }
    else if (!isLowerCase && !isUpperCase &&  isNumber && isSpecialCharacter) {
      var case13 = [getNumber(), getSpecialCharacter()];
      var selectRandom = Math.floor(Math.random() * 2);
      passwordChar = case13[selectRandom];
    }
    else if (!isLowerCase && !isUpperCase &&  isNumber && !isSpecialCharacter) {
      passwordChar = getNumber();
    }
    else if (!isLowerCase && !isUpperCase &&  !isNumber && isSpecialCharacter) {
      passwordChar = getSpecialCharacter();
    }
    //This is the scenario where the user decides to select no for everything. 
    //I would just default it to a bunch of Stars.
    else {
      passwordChar = '*';
    }
    newPassword = newPassword + passwordChar;
  }
  return newPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
