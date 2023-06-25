//your JS code here. If required.
function saveLoginDetails() {
      var username = document.getElementById("username").value;
      var password = document.getElementById("password").value;
      var rememberMe = document.getElementById("checkbox").checked;

      if (rememberMe) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
      } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      alert("Logged in as " + username);
}

function loginAsExistingUser() {
      var savedUsername = localStorage.getItem("username");
      alert("Logged in as " + savedUsername);
}