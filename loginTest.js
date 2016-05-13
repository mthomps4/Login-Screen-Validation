//loginTest.js Hides and Shows Span tags at the appropriat times for the Username and Password Fields

var $password = $("#password");
var $confirmPassword = $("#confirm-password");
var $username = $("#username");
var $button =$("#submit");

//Hide span hints
$("form span").hide();

//Returns True if Username is longer than 0
function isUsernamePresent() {
  return $username.val().length > 0;
}
//Returns True if Password is more than 8
function isPasswordValid(){
  return $password.val().length > 8;
}
//Returns True if password and confirmPassword are ===
function arePasswordsMatching(){
  return $password.val()===$confirmPassword.val();
}

//Returns true to "enable" if all criteria met
function canSubmit(){
  return isPasswordValid() && arePasswordsMatching() && isUsernamePresent();
}

//Show or Hide Username Span tag depending on status
function usernameEvent() {
  if(isUsernamePresent()) {
    $username.next().hide();
  }
  else{
    $username.next().show();
  }
}

//Show or Hide Password Span tag depending on status
function passwordEvent(){
  //Find if password is valid
  if(isPasswordValid()) {
    //Hide Password Span tags (Span tag follows passwords in HTML)
    $password.next().hide();
  }
  else{
    $password.next().show();
  }
}

//Show or Hide Span tag depending on status
function confirmPasswordEvent() {
  //Find out if password matches confirmPassword
  if(arePasswordsMatching()) {
    //Hide hint if matching
    $confirmPassword.next().hide();
  }
  else{
    $confirmPassword.next().show();
  }
}

//Disable Submit until criteria met
function enableSubmitEvent(){
  $("#submit").prop("disabled", !canSubmit());
}

//Event check status on user input
$username.focus(usernameEvent).keyup(usernameEvent).keyup(enableSubmitEvent);

//Event check status on pasword input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);//Show or Hide Password Span tag depending on status

//Event check status on confirmation input
$confirmPassword.focus(confirmPasswordEvent).keyup(confirmPasswordEvent).keyup(enableSubmitEvent);

enableSubmitEvent();
