var generateBtn = document.querySelector("#generate");
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'H', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '#', '$', '%', '&', '*', '+', '-', '(', ')'];


function promptsInputLength(){
  var goodformat = false;
  var length = 0;
  while ( !goodformat ) {length = prompt ("Choose a length of atleast 8 characters and no more than 128");

  // check for number
  if (length == null || length == "") {alert ("Please respond with a number"); continue;};

  //between 8-128
  if (isNaN(length)) {alert("Please respond with a number between 8-128"); continue;};
  if (length <8 || length >128) {alert ("Please respond with a number between 8-128"); continue;};
  goodformat = true;
  console.log(length);}
  return length;}

//Random Function
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

// Confirm Different Attributes and add them
function writePassword() {
  var passwordLength = promptsInputLength();
  var confirmLowerCase = confirm("do you want to include lowercase characters?");
  var confirmUpperCase = confirm("do you want to incluse uppercase character?");
  var confirmSpecial = confirm("do you want to include special characters?");
  var confirmNumbers= confirm("do you want to include numbers in your password?")
  var passwordCharacters= [];

  var password = "";

  if (confirmLowerCase == true) {passwordCharacters.push(...lowerCase); password=password.concat(lowerCase[Math.floor(getRandomArbitrary(0,lowerCase.length -1))])};
  if (confirmUpperCase == true) {passwordCharacters.push(...upperCase); password=password.concat(upperCase[Math.floor(getRandomArbitrary(0,upperCase.length -1))])};
  if (confirmSpecial == true) {passwordCharacters.push(...specialCharacters); password=password.concat(specialCharacters[Math.floor(getRandomArbitrary(0,specialCharacters.length -1))])};
  if (confirmNumbers == true) {passwordCharacters.push(...numbers); password=password.concat(numbers[Math.floor(getRandomArbitrary(0,numbers.length -1))])};
  console.log(passwordCharacters);



  for (var i =0; i<passwordLength; i++) {
    var randomNumber= Math.floor(getRandomArbitrary(0, passwordCharacters.length -1))
    console.log(randomNumber);
    var selectedCharacter= passwordCharacters[randomNumber]; Math.floor(getRandomArbitrary(0, passwordCharacters.length -1))
    console.log(selectedCharacter);

    password = password.concat(selectedCharacter);
    console.log(password);

  };

  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);