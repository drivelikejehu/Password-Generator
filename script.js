const randomFunctions = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNum,
  character: randomChar,
};

const generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", randomLower);

// Generator functions

function randomLower() {
  // return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
  console.log('heya')
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