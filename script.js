// Contact form alert
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    alert("✅ Thank you for contacting Brew Haven! We’ll get back to you soon ☕");
    this.reset(); // clear form
});

// Order form alert
document.getElementById("order-form").addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload
    alert("🛒 Your order has been placed successfully! Coffee is on the way ☕🚀");
    this.reset(); // clear form
});

