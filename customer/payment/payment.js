document.addEventListener("DOMContentLoaded", function () {
    // Logout functionality
    document.getElementById("logout").addEventListener("click", function () {
        let confirmLogout = confirm("Are you sure you want to log out?");
        if (confirmLogout) {
            sessionStorage.clear();
            alert("Logout successful!");
            window.location.href = "../login.html";
        }
    });

    // Navigate to payment processing page
    document.getElementById("payNow")?.addEventListener("click", function () {
        window.location.href = "card_payment.html";
    });

    // Navigate back to booking service
    document.getElementById("backToHome")?.addEventListener("click", function () {
        window.location.href = "../booking_service/booking.html";
    });

    // Payment form validation and processing
    document.getElementById("cardForm")?.addEventListener("submit", function (event) {
        event.preventDefault();

        let cardNumber = document.getElementById("cardNumber").value.trim();
        let cardHolderName = document.getElementById("cardHolderName").value.trim();
        let expiryDate = document.getElementById("expiryDate").value.trim();
        let cvv = document.getElementById("cvv").value.trim();

        // Validation
        if (!/^\d{16}$/.test(cardNumber)) {
            alert("Invalid Card Number! It must be 16 digits.");
            return;
        }
        if (cardHolderName === "") {
            alert("Card Holder Name cannot be empty.");
            return;
        }
        if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
            alert("Invalid Expiry Date! Use MM/YY format.");
            return;
        }
        if (!/^\d{3}$/.test(cvv)) {
            alert("Invalid CVV! It must be 3 digits.");
            return;
        }

        // Simulating payment processing and redirection to invoice page
        alert("Payment Successful!\nBooking ID: " + Math.floor(100000 + Math.random() * 900000));
        window.location.href = "invoice.html";
    });
});
