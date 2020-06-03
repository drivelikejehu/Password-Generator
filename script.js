const randomFunctions = {
  lowerInput: randomLower,
  upperInput: randomUpper,
  numInput: randomNum,
  specInput: randomChar,
};

const generateBtn = document.getElementById("generate");
const passwordEl = document.getElementById("password");

generateBtn.addEventListener("click", generatePassword);

function generatePassword() {
  //prompt user for password length
  var passwordLength = parseInt(
    prompt(
      "How many characters in the password? Choose a number between 8 and 128."
    )
  );

  //conditions if user enters wrong inputs
  if (isNaN(passwordLength)) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  } else if (passwordLength < 8 || passwordLength > 128) {
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
  let passwordToReturn = "";
  //determine how many parameters the user wants
  const typesCount = lowerInput + upperInput + numInput + specInput;
  console.log("typesCount: ", typesCount);

  const typesArr = [
    { lowerInput },
    { upperInput },
    { numInput },
    { specInput },
  ].filter(
    //checks each item in the array for 'true' boolean values
    (item) => Object.values(item)[0]
  );

  //iterates over the new array and returns the function
  for(let i = 0; i < passwordLength; i += typesCount) {
    typesArr.forEach(type => {
      const functionName = Object.keys(type)[0];
      passwordToReturn += randomFunctions[functionName]();
      //send password to the password textarea
      passwordEl.innerHTML = passwordToReturn;
    })
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
