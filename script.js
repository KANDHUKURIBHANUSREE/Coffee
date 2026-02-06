document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const contactForm = document.getElementById("contact-form");
    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("✅ Thank you for contacting Brew Haven! We’ll get back to you soon ☕");
            contactForm.reset();
        });
    }

    // Order form
    const orderForm = document.getElementById("order-form");
    if (orderForm) {
        orderForm.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("🛒 Your order has been placed successfully! Coffee is brewing ☕");
            orderForm.reset();
        });
    }

});

