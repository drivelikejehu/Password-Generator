// Assignment Code

//empty array based on user choices
var customArr = [];
//prompt and confirm arrays
var lowerArr = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperArr = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","W","X","Y","Z"];
var numArr = ["1","2","3","4","5","6","7","8","9","0"];
var specArr = ["!","@","#","$","%","^","&","*","(",")","{","}","|","[","]",";","'",":","<",">","?","/"];

//main function
function passGen() {
//initial prompt
var charInput = parseInt(prompt("How many characters in the password? Choose a number between 8 and 128."));

//conditions if user enters wrong inputs
    if (isNaN(charInput)) {
        alert("Please enter a number between 8 and 128.");
        passGen();
    } else if (charInput < 8 || charInput > 128) {
        alert("Please enter a number between 8 and 128.");
        passGen();
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
      passGen();
    }
//pushes all 'ok' responses to a master array
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
//running a loop based on number of characters
for (var i = 0; i < charInput; i++){
}

