const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const checkbox = document.getElementById("checkbox");
const existingBtn = document.getElementById("existing");

// Show existing user button if credentials exist
if (localStorage.getItem("username") && localStorage.getItem("password")) {
    existingBtn.style.display = "block";
}

// Login as existing user
existingBtn.addEventListener("click", () => {
    const savedUser = localStorage.getItem("username");
    alert("Logged in as " + savedUser);
});

// Handle form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    alert("Logged in as " + username);

    if (checkbox.checked) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", password);
    } else {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
    }

    if (localStorage.getItem("username")) {
        existingBtn.style.display = "block";
    } else {
        existingBtn.style.display = "none";
    }
});

