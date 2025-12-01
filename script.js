// your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// -------- Check saved credentials on load --------
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
}

// -------- Existing user login --------
existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username"); // read fresh value
    alert("Logged in as " + savedUser);
});

// -------- Form submission --------
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    // Alert login
    alert("Logged in as " + username);

    // Save or remove credentials
    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    // Update button visibility
    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});

