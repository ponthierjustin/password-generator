// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  var stringLen = 8;
  var random = '';
  for (var i=0; i<string_length; i++) {
    var rnum = Math.floor(Math.random() * chars.length);
    random += chars.substring(rnum,rnum+1);
  }
  
}
  var passwordText = document.querySelector("#password");{
  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



