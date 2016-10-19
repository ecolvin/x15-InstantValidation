var userEntered = "";
var passEntered = "";

function login()
{
  window.alert("Username: " + userEntered + "\n" + "Password: " + passEntered);
}

function validateUsername()
{
  userEntered = document.getElementById("user").value;
  if(userEntered.length < 6)
  {
    document.getElementById("usernameError").innerHTML="Username must be atleast 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("submitButton").disabled = true;
  }
  else if(userEntered.search(" ") != -1)
  {
    document.getElementById("usernameError").innerHTML="Username may not contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("submitButton").disabled = true;
  }
  else
  {
    document.getElementById("usernameError").innerHTML="";
    document.getElementById("usernameError").classList.add("hidden-message");
    document.getElementById("usernameError").classList.remove("shown-message");
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
    document.getElementById("submitButton").disabled = false;
  }
}

function validatePassword()
{
  userEntered = document.getElementById("user").value;
  passEntered = document.getElementById("pass").value;
  if(passEntered.toLowerCase() == "password")
  {
    document.getElementById("passwordError").innerHTML="Password cannot be 'password'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("submitButton").disabled = true;
  }
  else if(passEntered.toLowerCase() == userEntered.toLowerCase())
  {
    document.getElementById("passwordError").innerHTML="Password cannot be the same as your username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("submitButton").disabled = true;
  }
  else if(passEntered.length < 6 || passEntered.length > 20)
  {
    document.getElementById("passwordError").innerHTML="Password must be between 6-20 characters.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("submitButton").disabled = true;
  }
  else
  {
    document.getElementById("passwordError").innerHTML="";
    document.getElementById("passwordError").classList.add("hidden-message");
    document.getElementById("passwordError").classList.remove("shown-message");
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
    document.getElementById("submitButton").disabled = false;
  }
}
