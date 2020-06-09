// Assignment Code

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordLength = prompt(
    "Please enter desired password length between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password between 8 and 128 characters");
    writePassword();
  }
  function writePassword() {
    var up = confirm("Would you like uppercase letters in your password?");
    var low = confirm("Would you like lower case numbers in your password?");
    var num = confirm("Would you like numbers in your password?");
    var special = confirm(
      "Would you like special characters in your password?"
    );
    var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lChar = "abcdefghijklmnopqrstuvwxyz";
    var int = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";
    var spe = "!#$%^&*=+"
    var userChoices = '';
    if (up) {
      userChoice = userChoices.push(uChar);
    }
    if (low) {
      userChoice = userChoices.push(lChar);
    }
    if (num) {
      userChoice = userChoices.push(int);
    }
    if (special) {
      userChoice = userChoices.push(spe);
    } else {
      alert("Enter valid requirements for password.");
      writePassword();
    }
    console.log(userChoices);
    var password = "";
    for (var i = 0; i < passwordLength; i++) {
      var randomPasswordNum = Math.floor(Math.random() * userChoices.length);
      console.log(randomPasswordNum);
      password += userChoices[randomPasswordNum];
    }
  }

  var password = writePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
