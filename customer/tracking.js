function trackParcel() {
    const bookingId = document.getElementById("bookingId").value.trim();
    const trackingResult = document.getElementById("tracking-result");

    // Basic validation
    if (!/^\d{12}$/.test(bookingId)) {
        trackingResult.style.color = "red";
        trackingResult.textContent = "Invalid Booking ID. It must be a 12-digit number.";
        return;
    }

    // Simulate API call (Replace with actual backend API)
    const trackingData = {
        "123456789012": "In Transit",
        "987654321098": "Delivered",
        "112233445566": "Out for Delivery",
    };

    // Check if Booking ID exists
    if (trackingData[bookingId]) {
        trackingResult.style.color = "green";
        trackingResult.textContent = `Status: ${trackingData[bookingId]}`;
    } else {
        trackingResult.style.color = "red";
        trackingResult.textContent = "Tracking ID not found. Please check again.";
    }
}
