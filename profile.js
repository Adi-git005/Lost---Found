document.addEventListener("DOMContentLoaded", function() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      document.getElementById("username").textContent = user.name;
      document.getElementById("email").textContent = "Email: " + user.email;
    } else {
      document.getElementById("username").textContent = "Guest User";
      document.getElementById("email").textContent = "Please sign up to view profile.";
    }
  });

function editProfile() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      let newName = prompt("Enter new name:", user.name);
      let newEmail = prompt("Enter new email:", user.email);

      user.name = newName || user.name;
      user.email = newEmail || user.email;

      localStorage.setItem("user", JSON.stringify(user));
      alert("Profile updated!");
      location.reload(); // refresh to show changes
    }
  }