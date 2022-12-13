
// Var Arrays for Character selection
var upperCase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowerCase = ["abcdefghijklmnopqrstuvwxyz"];
var number = ["1234567890"];
var specialCharacters = ["!@#$%^&*?=+"];
var fullArray = []

// First prompt selects length and alerts if invalid
function generatePassword(){
  var validInput = true
  var psw =  prompt("Enter number of characters needed. Choose a length of 8-128: ")
  if (psw < 8 || psw > 128){
    alert("Your character length of: " + psw + " is invalid. Please select a character length of 8-128" )
    return;
  }
}







// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}


