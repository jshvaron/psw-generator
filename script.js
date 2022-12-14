
// Var Arrays for Character selection
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", "<", "=", ">", "?", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var completeArray = []

// First prompt selects length and alerts if invalid
function generatePassword(){
  var validInput = true
  var charLength =  prompt("Enter number of characters needed. Choose a length of 8-128: ")
  if (charLength < 8 || charLength > 128){
    alert("Your character length of: " + charLength + " is invalid. Please select a character length of 8-128" )
    return;
  }
  
     // This if statement is for the upperrcase confirmation prompt and adds uppercase characters
  if ( confirm('Will you need uppercase characters?')){
    completeArray = completeArray.concat(upperCase);
  }

   // This if statement is for the lowercase confirmation prompt and adds lowercase characters
  if(confirm('Will you need lowercase characters?')){
    completeArray = completeArray.concat(lowerCase);
  }
  // This if statement is for the numerics confirmation prompt and adds numeric characters
  if(confirm('Will you need numerical characters?')){
    completeArray = completeArray.concat(number);
  }
  // This if statement is for the special characters confirmation prompt and adds special characters
  if(confirm('Will you need special characters?')){
    completeArray = completeArray.concat(specialCharacters);
  }
  // 
  var password = "";
   for( var i = 0; i < charLength ; i++){
    var genPsw = Math.floor(Math.random()* completeArray.length);
    password = password + completeArray[genPsw]
   }
   if(validInput){
    return password;
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


