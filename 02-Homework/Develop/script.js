// Assignment Code

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var passwordLength = prompt(
    "Please enter desired password length between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("WRONG INPUT!!");
    writePassword();
  }
  function writePassword() {
    var up = confirm("Would you like uppercase letters in your password?");
    var low = confirm("Would you like lower case numbers in your password?");
    var num = confirm("Would you like numbers in your password?");
    var special = confirm(
      "Would you like special characters in your password?"
    );

    var uChar = [
      "A",
      "B",
      "C",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    var lChar = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];
    var int = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
    var spe = ["!", "@", "#", "$", "%", "^", "&", "*"];
    var userChoices = [];
    if (up) {
      userChoices.push.apply(userChoices, uChar);
    }
    if (low) {
      userChoices.push.apply(userChoices, lChar);
    }
    if (num) {
      userChoices.push.apply(userChoices, int);
    }
    if (special) {
      userChoices.push.apply(userChoices, spe);
    }
    if (userChoices === []) {
      alert("Not a valid input");
    }
    console.log(userChoices);
    /* pushes to random password */
    var password = [];
    for (var i = 0; i < passwordLength; i++) {
      var randomPasswordNum = Math.floor(Math.random() * userChoices.length);
      console.log(randomPasswordNum);
      password.push(userChoices[randomPasswordNum]);
    }
    password = password.join("");
    return password;
  }

  var password = writePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
