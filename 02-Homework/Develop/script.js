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
    var uppers = confirm("Would you like uppercase letters in your password?");
    var lowers = confirm("Would you like lower case numbers in your password?");
    var numbers = confirm("Would you like numbers in your password?");
    var special = confirm(
      "Would you like special characters in your password?"
    );
    var uChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lChar = "abcdefghijklmnopqrstuvwxyz";
    var int = "1, 2, 3, 4, 5, 6, 7, 8, 9, 0";
    var spe = ["!#$%^&*=+"];
    var userChoices = [];

  var password = writePassword();

  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
generateBtn.addEventListener("click", writePassword);
