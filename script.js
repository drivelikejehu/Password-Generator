const randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  character: randomChar,
};

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  //prompt user for password length
  var charInput = parseInt(
    prompt(
      "How many characters in the password? Choose a number between 8 and 128."
    )
  );

  //conditions if user enters wrong inputs
  if (isNaN(charInput)) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  } else if (charInput < 8 || charInput > 128) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  } else {
    //checking on boolean of inputs
    var lowerInput = confirm("Lowercase letters Ok?");
    var upperInput = confirm("Uppercase letters Ok?");
    var numInput = confirm("Numbers Ok?");
    var specInput = confirm("Special characters Ok?");
  }
  //condition if user chooses 'cancel' on all confirms'
  if (!lowerInput && !upperInput && !numInput && !specInput) {
    alert("Please enter more criteria.");
    generatePassword();
  }
}

// Generator functions

function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function randomNum() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function randomChar() {
  const symbols = "!@#$%^&*(){}|[];:<>?/";
  return symbols[Math.floor(Math.random() * symbols.length)];
}
