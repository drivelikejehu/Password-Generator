// Assignment Code
var customArr = [];
var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numArr = ["1","2","3","4","5","6","7","8","9","0"];
var specArr = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

var userPass;

function passGen() {

var charInput = parseInt(prompt("How many characters in the password? Choose a number between 8 and 128."));


    if (isNaN(charInput)) {
        alert("Please enter a number between 8 and 128.");
        passGen();
    } else if (charInput < 8 || charInput > 128) {
        alert("Please enter a number between 8 and 128.");
        passGen();
    } else {
      var lowerInput = confirm("Lowercase letters Ok?");
      var upperInput = confirm("Uppercase letters Ok?");
      var numInput = confirm("Numbers Ok?");
      var specInput = confirm("Special characters Ok?");  
    }
  
    if (!lowerInput && !upperInput && !numInput && !specInput) {
      alert("Please enter more criteria.");
      passGen();
    }
    
    if (lowerInput == true){
    customArr.push(lowerArr);
    }
    if (upperInput == true){
    customArr.push(upperArr);
    }
    if (numInput == true){
    customArr.push(numArr);
    }
    if (specInput == true){
    customArr.push(specArr);
    }
}

for (var i = 0; i < charLength; i++){


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
