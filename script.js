//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const submitBtn = document.getElementById("submit");
const existingBtn = document.getElementById("existing");

// ---------- Load saved credentials ----------
const savedUsername = localStorage.getItem("username");
const savedPassword = localStorage.getItem("password");

// If credentials exist → show "Login as existing user" button
if (savedUsername && savedPassword) {
    existingBtn.style.display = "block";
}

// ---------- Existing user login ----------
existingBtn.addEventListener("click", () => {
    alert("Logged in as " + savedUsername);
});

// ---------- Form submission ----------
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Alert login information
    alert("Logged in as " + username);

    // If "Remember Me" is checked → save credentials
    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        // Remove saved credentials if unchecked
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update visibility of existing user button
    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});
