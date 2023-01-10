// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // Ensuring the password is always between 10 and 64 characters.
  var passwordLength;
  do {
    passwordLength = parseInt(prompt("How many characters would you like in your password (between 10 and 64)?"));
  } while (passwordLength < 10 || passwordLength > 64);

  // All the prompts for the type of password options that the user would like.
  var lowercase = confirm("Would you like lowercase characters in your password?");
  var uppercase = confirm("Would you like uppercase characters in your password?");
  var special = confirm("Would you like special characters in your password?");
  var numbers = confirm("Would you like numbers in your password?");

  // User input stored in array for use later
  var userPasswordOpts = [passwordLength, lowercase, uppercase, special, numbers];

  return userPasswordOpts;
}

// Function for getting a random element from an array
function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// Function to generate password with user input
function generatePassword() {
  var userPasswordChoice = getPasswordOptions();
  var passwordArr = [];
  var finalPassword = [];

  /* This for loop checks for boolean values and adds any user requested options
     to an array.
   */
  for (var i = 0; i < userPasswordChoice[0]; i++) {
    if (userPasswordChoice[1]) {
      passwordArr.push(getRandom(lowerCasedCharacters));
    }
    if (userPasswordChoice[2]) {
      passwordArr.push(getRandom(upperCasedCharacters));
    }
    if (userPasswordChoice[3]) {
      passwordArr.push(getRandom(specialCharacters));
    }
    if (userPasswordChoice[4]) {
      passwordArr.push(getRandom(numericCharacters));
    }
    /* This final execution returns the requested length of the password
       as an array.
    */
    finalPassword.push(getRandom(passwordArr));
  }
  return finalPassword.join('');
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
