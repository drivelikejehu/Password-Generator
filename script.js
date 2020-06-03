function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

console.log(randomLower());

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

console.log(randomUpper());

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

console.log(randomNumber());

function randomChar() {
  const symbols = '!@#$%^&*(){}|[];:<>?/';
  // for (i = 0; i < symbols.length; i++) {}
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(randomChar());
