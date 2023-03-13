// Assignment Code
var generateBtn = document.querySelector("#generate");


function generatePassword (){
  var stringnames = "" ;
  var possiblepasswords = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&*()";
  Math.floor(Math.random() * 129) + 8;
  console.log (Math.floor (Math.random() * 129) + 8);
  var passwordlength = Math.floor(Math.random() * 129) + 8;
  for (var i = 0; i < passwordlength; i++){
    var passwordindex = Math.floor(Math.random() * 72)
    stringnames += possiblepasswords[passwordindex];
  }

  return stringnames;

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
