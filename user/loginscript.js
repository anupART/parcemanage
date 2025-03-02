document.addEventListener('DOMContentLoaded', function() {
    // Get the login form element
    const loginForm = document.getElementById('loginForm');
    const roleButtons = document.querySelectorAll('.role-button');
    let selectedRole = null;
    
    // Role selection functionality
    roleButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            // Remove active class from all buttons
            roleButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Store selected role
            selectedRole = this.dataset.role;
            
            // Update the hidden input value
            document.getElementById('roleInput').value = selectedRole;
            
            // Clear previous error messages
            document.getElementById('userIdError').textContent = "";
            document.getElementById('error-message').textContent = "";
        });
    });
    
    // Handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Get input values
        const userId = document.getElementById('userId').value.trim();
        const password = document.getElementById('password').value;
        const userIdError = document.getElementById('userIdError');
        const passwordError = document.getElementById('passwordError');
        const errorMessage = document.getElementById('error-message');
        
        // Clear previous error messages
        userIdError.textContent = "";
        passwordError.textContent = "";
        errorMessage.textContent = "";
        
        // Validate role selection
        if (!selectedRole) {
            errorMessage.textContent = "Please select a role (Customer or Officer).";
            return;
        }
        
        // Validate User ID format based on role
        if (selectedRole === "customer" && !userId.startsWith("CU")) {
            userIdError.textContent = "Customer User ID must start with 'CU'.";
            return;
        }
        
        if (selectedRole === "officer" && !userId.startsWith("OF")) {
            userIdError.textContent = "Officer User ID must start with 'OF'.";
            return;
        }
        
        // Password validation
        if (password.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters.";
            return;
        }
        
        // In a real application, you would make an API call here
        // For demo purposes, we'll simulate a successful login
        // This simulates what would normally be handled by your backend
        
        // Store user information in localStorage
        localStorage.setItem("currentUser", userId);
        localStorage.setItem("userRole", selectedRole);
        
        // Alert user and redirect to appropriate page
        alert("Login successful!");
        
        // Redirect based on role
        if (selectedRole === "customer") {
            window.location.href = "../customer/customerindex.html";
        } else {
            window.location.href = "../officer/officerindeex.html";
        }
    });
    
    // Toggle password visibility
    const togglePassword = document.getElementById('togglePassword');
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const passwordField = document.getElementById('password');
            if (passwordField.type === "password") {
                passwordField.type = "text";
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
            } else {
                passwordField.type = "password";
                this.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#aaaaaa" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle><line x1="1" y1="1" x2="23" y2="23"></line></svg>';
            }
        });
    }
});