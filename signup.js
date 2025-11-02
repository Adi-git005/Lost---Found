document.getElementById("signupform").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("user", JSON.stringify({
        name: name,
        email: email,
        password: password
    }));


    alert("User registered successfully!");
    window.location.href = "profile.html";

});