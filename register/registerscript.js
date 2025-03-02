document.addEventListener("DOMContentLoaded", function () {
    // Registration Form Handler
    document.getElementById("registrationForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        let userId = document.getElementById("userId").value;
        let password = document.getElementById("password").value;
        let confirmPassword = document.getElementById("confirmPassword").value;
        let email = document.getElementById("email").value;
        let mobile = document.getElementById("mobile").value;
        let errorMessage = document.getElementById("error-message");

        // Email validation
        let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailPattern)) {
            errorMessage.textContent = "Invalid email format!";
            return;
        }

        // Mobile number validation (Only numbers, 10 digits)
        if (!/^\d{10}$/.test(mobile)) {
            errorMessage.textContent = "Invalid mobile number!";
            return;
        }

        // Password match check
        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
            return;
        }

        // Store user session (Simulating registration success)
        alert("Registration successful! Use testuser / Password@123 to login.");
        window.location.href = "../user/loginindex.html";
    });

    // Login Form Handler
    document.getElementById("loginForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        // Get input values
        const userId = document.getElementById("userId").value;
        const password = document.getElementById("password").value;

        // Hardcoded credentials
        const validUser = "testuser";
        const validPassword = "Password@123";

        if (userId === validUser && password === validPassword) {
            localStorage.setItem("currentUser", userId);
            alert("Login successful!");
            window.location.href = "../home/homeindex.html";
        } else {
            document.getElementById('userIdError').textContent = "Invalid Username or Password";
            document.getElementById('passwordError').textContent = "Please try again";
        }
    });

    // Toggle Password Visibility
    document.querySelectorAll(".toggle-password").forEach(icon => {
        icon.addEventListener("click", function () {
            let input = document.getElementById(this.dataset.target);
            if (input.type === "password") {
                input.type = "text";
                this.textContent = "👁️"; // Eye icon when visible
            } else {
                input.type = "password";
                this.textContent = "🔒"; // Lock icon when hidden
            }
        });
    });
});
