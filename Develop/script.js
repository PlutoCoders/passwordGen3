// Assignment Code
var generateBtn = document.querySelector("#generate");

//Arrays that the password generation grabs values from.
const alphabetLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const alphabetUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const numericalValues = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const specialValues = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '=', '+'];
//The below array is so that when the user chooses to have different types of characters in the password,
//those values in the other selected arrays will be added to this new custom array.

// The Function creates the password and returns it so that it can be used by the writePassword function
function generatePassword() {
  var customUserArray = [];
  var length = prompt("How long do you want your password to be? (8 characters minimum and 120 maximum.");
  //For testing purposes, we are logging what the user writes.
  console.log("Selected Password Length:", length); 
  //We are checking to see if the input is a numerical value
  if (isNaN(length) === true) {
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
//Pushing entire tables into the custom table
  if (lowerConfirm) {
    customUserArray = customUserArray.concat(alphabetLower);
  }
  if (upperConfirm) {
    customUserArray = customUserArray.concat(alphabetUpper);
  }
  if (numberConfirm) {
    customUserArray = customUserArray.concat(numericalValues);
  }
  if (specialConfirm) {
    customUserArray = customUserArray.concat(specialValues);
  }

  //An empty password variable which will store the generated password from the generatePassword function
  var newPassword = ("")

  //Creating the password generation for loop
  // For loops which loops through an amount of times based on the selected length of the variable "length"
  //Lopps through the custom array to grab characters each time
  for (i=0; i<length; i++) {
    newPassword += customUserArray[Math.floor(Math.random() * customUserArray.length)]
  }
  console.log(customUserArray);
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














// My Questions for the tutor
// - I was getting errors on line 19; saying something about length.isInteger() not being a valid function

// script.js:19 Uncaught TypeError: length.isInteger is not a function
//at generatePassword (script.js:19:14)
//at HTMLButtonElement.writePassword (script.js:76:18)





// - Is there a way to force the user into only typing a number?
// - Is there a way to make the user get re-promopted from where they left off instead of restarting the entire process again?
// - An example of above: line 20, 25, 42
// - How do I alert the user after an action before they continue on with the process?
// - On line 85, in the addEventListener function, why does the writePassword function not have ().
// - Is it because functions inside of parameters can't have parameters themselves?
// - How do I add a video or gif that auto loops on a website?
// - How do I make the position of my navigation bar move when scrolling but then stick to the top of the screen? (Sticky?)
// - What would I do to customize the prompts/confirms - positioning, size, styling
// - Sometime when I create my git hub page for my repo, instead of the index.html, it displays the readme. Any ideas?
// - Something that seemed to work last time, was I added the index.html file back into the main repo folder, and/or re-added the readme aswell
// - I had trouble with displaying a background image in the hhtml document, and had to create it in the css file, how do I properly add it to the background?