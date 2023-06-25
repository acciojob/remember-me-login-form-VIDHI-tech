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

document.addEventListener("DOMContentLoaded", function() {
      var savedUsername = localStorage.getItem("username");

      if (savedUsername) {
        var existingButton = document.getElementById("existing");
        existingButton.style.display = "inline-block";
      }
});