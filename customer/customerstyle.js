function logoutUser() {
    // Show a confirmation dialog
    let confirmLogout = confirm("Are you sure you want to log out?");
    
    if (confirmLogout) {
        // Clear any stored session (if applicable)
        localStorage.removeItem("customerId");  // Example for clearing stored session data
        sessionStorage.clear();  // Clears session data

        // Show an alert for successful logout
        alert("Logout successful!");

        // Redirect to the login page (update the path as needed)
        window.location.href = "../user/loginindex.html";  
    }
}
