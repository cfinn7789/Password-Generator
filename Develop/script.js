// Assignment Code
var generateBtn = document.querySelector("#generate");

var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmnopqrstuvwxyz"
var numeric = "0123456789"
var special = "~!@#$%^&*()_+|\'}{“:?><[];,./-="
var lowercaseCheck = ""
var numericCheck = ""
var specialCheck = ""
var passCharacters = []

function passwordInput(){
  characterLength = window.prompt("How many characters would you like your password to have? (Must be between 8-128 characters.");


  if (characterLength<8) {
    window.alert("Password must be 8 characters or longer.")
    passwordInput();
  } else if (characterLength>128){
    window.alert ("Password must be 128 characters or shorter.")
    passwordInput();
  } else if (characterLength = null){
    window.alert ("Missing input. Please try again.")
    passwordInput();
  } else {
    alert("Continue to the next screen.")
    lowercaseConfirm();
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
    return lowercaseCheck;
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


  if (lowercase && uppercase && numeric && special){
    characterInput = lowercase + uppercase + numeric + special;
  } else if (lowercase && uppercase && numeric) {
    characterInput = lowercase + uppercase + numeric;
  } else if (lowercase && uppercase){
    characterInput = lowercase + uppercase;
  } else if (lowercase && numeric){
    characterInput = lowercase + numeric;
  } else if (lowercase && special){
    characterInput = lowercase + special;
  } else if (uppercase && numeric){
    characterInput = uppercase + numeric;
  } else if (special + numeric){
    characterInput = special + numeric;
  } else if (lowercase && uppercase && special){
    characterInput = lowercase + uppercase + special;
  } else if (uppercase && special && numeric){
    characterInput = uppercase + special + numeric;
  }

  var password = "";
  for(var i = 0; i < characterLength; i++){
    password += characterInput.charAt(Math.floor(Math.random() * characterInput.length));
  }
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
