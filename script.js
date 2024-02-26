// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var numeric = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=']
var lowercaseCheck = ""
var uppercaseCheck = ""
var numericCheck = ""
var specialCheck = ""
var passwordContent = [passwordInput, lowercaseConfirm, uppercaseConfirm, numericConfirm, specialConfirm]


function passwordInput(){
  characterLength = window.prompt("How many characters would you like your password to have? (Must be between 8-128 characters.");


  if (characterLength<8) {
    window.alert("Password must be 8 characters or longer.")
    passwordInput();
  } else if (characterLength>128){
    window.alert ("Password must be 128 characters or shorter.")
    passwordInput();
  } else if (isNaN(characterLength)){
    window.alert ("Missing input. Please try again.")
    passwordInput();
  } else {
    alert("Continue to the next screen.")
  }
  return characterLength;
}

function lowercaseConfirm(){
  lowercaseCheck = window.prompt("Would you like lowercase characters in your password?");


  if (lowercaseCheck === null || lowercaseCheck === "") {
    window.alert("Click confirm if you would like lowercase characters in your password.")
    lowercaseConfirm();
  } else if (lowercaseCheck === "yes" || lowercaseCheck === "y"){
    lowercaseCheck = true;
    return lowercaseCheck;
  } else if (lowercaseCheck === "no" || lowercaseCheck === "n"){
    lowercaseCheck = false;
  } else {
    alert("Please answer Yes or No")
    lowercaseConfirm();
  }
  return lowercaseCheck;
}

function uppercaseConfirm(){
  uppercaseCheck = window.prompt("Would you like uppercase characters in your password?");


  if (uppercaseCheck === null || lowercaseCheck === ""){
    window.alert("Click confirm if you would like upperclase characters in your password.")
    uppercaseConfirm();
  } else if (uppercaseCheck === "yes" || uppercaseCheck === "y"){
    uppercaseCheck = true;
    return uppercaseCheck;
  } else if (uppercaseCheck === "no" || uppercaseCheck === "n"){
    uppercaseCheck = false;
  } else {
    alert("Please answer Yes or No")
    uppercaseConfirm();
  }
  return uppercaseCheck;
}

  function numericConfirm(){
  numericCheck = window.prompt("Would you like numeric characters in your password?");


  if (numericCheck === null || numericCheck === ""){
    window.alert("Click confirm if you would like uppercase characters in your password.")
    numericConfirm();
  } else if (numericCheck === "yes" || numericCheck === "y"){
    numericCheck = true;
    return numericCheck;
  } else if (numericCheck === "no" || numericCheck === "n"){
    numericCheck = false;
  } else {
    alert("Please answer Yes or No")
    numericConfirm();
  }
  return numericCheck;
}

function specialConfirm (){
  specialCheck = window.prompt("Would you like special characters in your password?");

  
  if (specialCheck === null || specialCheck === ""){
    window.alert("Click confirm if you would like special characters in your password.")
    specialConfirm();
  } else if (specialCheck === "yes" || specialCheck === "y"){
    specialCheck = true;
    return specialCheck;
  } else if (specialCheck === "no" || specialCheck === "n"){
    specialCheck = false;
  } else {
    alert("Please answer Yes or No")
    specialConfirm();
  }
  return specialCheck;
}

function generatePassword() {
  passwordInput();
  console.log(characterLength);
  lowercaseConfirm();
  console.log(lowercaseCheck);
  uppercaseConfirm();
  console.log(uppercaseCheck);
  numericConfirm();
  console.log(numericCheck);
  specialConfirm();
  console.log(specialCheck);
  var finalResult = "";
  var passCharacters = [];


  if (uppercaseCheck) {
    for (var i of uppercase)
      passCharacters.push(i);
  }
  if (lowercaseCheck){
    for (var i of lowercase)
      passCharacters.push(i);
  }
  if (numericCheck){
    for (var i of numeric)
      passCharacters.push(i);
  }
  if (specialCheck){
    for (var i of special)
      passCharacters.push(i);
  }
  console.log(passCharacters);


  for(var i = 0; i < characterLength; i++){
    finalResult += passCharacters[Math.floor(Math.random() * passCharacters.length)];
  }
  console.log (finalResult)
  return finalResult;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
