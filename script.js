// Assignment Code
var generateBtn = document.querySelector("#generate");
let passlength = 8;
let hasspecialchars = true;
let hasuppercase = true;
let hasloweracse = true;
let hasnumbers = true;
function randomCharacter(characterList) {
  let characterPosition = Math.floor(Math.random() * characterList.length)
  return characterList[characterPosition]
}

function generatePassword() {
  var stringnames = "";
  // var possiblepasswords = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789!@#$%^&()";
  var uppercaseCHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var lowercaseCHARS = "abcdefghijklmnopqrstuvwxyz"
  var specialCHARS = "!@#$%^&()"
  var numberCHARS = "1234567890"
  let charOption = [lowercaseCHARS];
  if (hasspecialchars) charOption.push(specialCHARS)
  if (hasuppercase) charOption.push(uppercaseCHARS);
  if (hasloweracse) charOption.push(lowercaseCHARS);
  if (hasnumbers) charOption.push(numberCHARS);

  for (let i = 0; i < passlength; i++) {
    let randomCharacterType = Math.floor(Math.random() * charOption.length);
    let character = randomCharacter(charOption[randomCharacterType]);
    stringnames += character;
  }

  // old code updating above^
  // Math.floor(Math.random() * 129) + 8;
  // console.log(Math.floor(Math.random() * 129) + 8);
  // var passwordlength = Math.floor(Math.random() * 129) + 8;
  // for (var i = 0; i < passwordlength; i++) {
  //   var passwordindex = Math.floor(Math.random() * 72)
  //   stringnames += possiblepasswords[passwordindex];
  // }

  return stringnames;

}



// Write password to the #password input
function writePassword() {
  passlength = prompt("PASS LENGTH ");
  hasspecialchars = confirm("CHARS?");
  hasuppercase = confirm("UPPERCASE");
  hasloweracse = confirm("LOWERCASE?");
  hasnumbers = confirm("NUMBERS")

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);