// Usable inputs
const UPPER_CASE_CHARS = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const LOWER_CASE_CHARS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const NUMERIC_CHARS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const SPECIAL_CHARS = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '='];

// Keep track of user preferences
let characterLength = 0;
let includeLowercase = false;
let includeUppercase = false;
let includeNumeric = false;
let includeSpecial = false;

// Prompts user for password length
function getPasswordLength() {
  let length = 0;
  while (true) {
    length = parseInt(prompt("How many characters would you like your password to have? (Must be between 8-128 characters)"));
    if (!isNaN(length) && length >= 8 && length <= 128) {
      return length;
    }
    alert("Please enter a valid number between 8 and 128.");
  }
}

// Prompt user for character inclusion
function confirmCharacterSet(message) {
  let response = "";
  while (true) {
    response = prompt(message);
    if (response === null || response === "") {
      alert("Please provide a valid response.");
    } else if (response.toLowerCase() === "yes" || response.toLowerCase() === "y") {
      return true;
    } else if (response.toLowerCase() === "no" || response.toLowerCase() === "n") {
      return false;
    } else {
      alert("Please answer Yes or No.");
    }
  }
}

// Generate password
function generatePassword() {
  characterLength = getPasswordLength();
  includeLowercase = confirmCharacterSet("Would you like lowercase characters in your password?");
  includeUppercase = confirmCharacterSet("Would you like uppercase characters in your password?");
  includeNumeric = confirmCharacterSet("Would you like numeric characters in your password?");
  includeSpecial = confirmCharacterSet("Would you like special characters in your password?");

// Combine characters
  let allChars = [];
  if (includeLowercase) allChars = allChars.concat(LOWER_CASE_CHARS);
  if (includeUppercase) allChars = allChars.concat(UPPER_CASE_CHARS);
  if (includeNumeric) allChars = allChars.concat(NUMERIC_CHARS);
  if (includeSpecial) allChars = allChars.concat(SPECIAL_CHARS);

  let password = "";
  for (let i = 0; i < characterLength; i++) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  return password;
}

// Writes the password to the input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generates the button
const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", writePassword);
