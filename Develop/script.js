// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays that the password generation grabs values from.
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericalValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialValues = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
//The below array is so that when the user chooses to have different types of characters in the password,
//those values in the other selected arrays will be added to this new custom array.
var customUserArray = [];

// The Function creates the password and returns it so that it can be used by the writePassword function
function generatePassword() {
  var length = prompt("How long do you want your password to be? (8 characters minimum and 120 maximum.")
  //For testing purposes, we are logging what the user writes.
  console.log("Selected Password Length:", length); 
  //We are checking to see if the input is a numerical value
  if (length.isInteger() === false) {
    alert("We can't choose a password length unless you only type in numbers! Please Try again.")
    return
  }
  //We are checking to see if the numerical inmput meets the requirements.
    else if (length<8 || length>120) {
    alert ("Your password must be between 8 and 120 characters. Please try again.")
    return
  }
  //If everything is fine, then tell the user their selection and move on!
  else {
    alert ("Your chosen length is " + length, " characters long!")
  };

  //Creating variables based on what values the user wants in the password generation.
  const lowerConfirm = window.confirm ("Do you want lower case characters in your password?");
  const upperConfirm = window.confirm ("Do you want upper case characters?");
  const numberConfirm = window.confirm ("Do you want numbers in your password?");
  const specialConfirm = window.confirm ("Do you want special characters?");

  //What if the user presses no to everything?
  //This is the validation considering that situation
  if (lowerConfirm === false && upperConfirm === false && numberConfirm === false && specialConfirm === false) {
    alert ("You need to have at least one selection, otherwise we can't generate a password with no characters! Please Try again.")
  }

//Adding the selected arrays into the custom array
  if (lowerConfirm) {
    customUserArray.push(alphabetLower);
  }
  if (upperConfirm) {
    customUserArray.push(alphabetUpper);
  }
  if (numberConfirm) {
    customUserArray.push(numericalValues);
  }
  if (specialConfirm) {
    customUserArray.push(specialValues);
  }

  //An empty password variable which will store the generated password from the generatePassword function
  var newPassword = ("")

  //Creating the password generation for loop
  // For loops which loops through an amount of times based on the selected length of the variable "length"
  //Lopps through the custom array to grab characters each time
  for (i=0; i<=length.length; i++) {
    newPassword += Math.floor(Math.random() * length.length)
  }
  
  //After the for loop ends, we return the adjusted variable as the value that the function generates.
  return newPassword
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
