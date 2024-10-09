document.addEventListener("DOMContentLoaded", function () {
    // Elements for login and personalization pages
    const gmailBtn = document.getElementById("gmail-btn");
    const phoneBtn = document.getElementById("phone-btn");
    const gmailForm = document.querySelector(".gmail-form");
    const phoneForm = document.querySelector(".phone-form");
    const signInBtn = document.getElementById("sign-in-btn");

    
    // Show Gmail form and hide phone form when Gmail button is clicked
    gmailBtn.addEventListener("click", function () {
        gmailForm.style.display = "block";
        phoneForm.style.display = "none";
    });

    // Show phone form and hide Gmail form when phone button is clicked
    phoneBtn.addEventListener("click", function () {
        phoneForm.style.display = "block";
        gmailForm.style.display = "none";
    });

    // Sign-in button click logic
    signInBtn.addEventListener("click", function () {
        if (gmailForm.style.display === "block") {
            const email = document.getElementById("mail").value;
            const otp = document.getElementById("gmail-otp").value;
            if (validateEmail(email) && otp) {
                console.log("Logging in with Gmail");
                transitionToPersonalization();
            } else {
                alert("Please enter a valid email and OTP.");
            }
        } else if (phoneForm.style.display === "block") {
            const phone = document.getElementById("phone").value;
            const otp = document.getElementById("phone-otp").value;
            if (validatePhone(phone) && otp) {
                console.log("Logging in with Phone");
                transitionToPersonalization();
            } else {
                alert("Please enter a valid phone number and OTP.");
            }
        }
    });

    function validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    function validatePhone(phone) {
        const phoneRegex = /^[0-9]{10}$/;
        return phoneRegex.test(phone);
    }

    // Transition to personalization page after login
    function transitionToPersonalization() {
        const loginSection = document.getElementById("login-section");
        loginSection.style.display = "none";
        page1.style.display = "block";
    }

    next1.addEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "block";
    });

    back1.addEventListener("click", function () {
        page2.style.display = "none";
        page1.style.display = "block";
    });
});  