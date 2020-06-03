function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randomChar() {
  const symbols = '!@#$%^&*(){}|[];:<>?/';
    return symbols[Math.floor(Math.random() * symbols.length)];
}

