document.addEventListener("DOMContentLoaded", function () {
    // Elements for login and personalization pages
    const gmailBtn = document.getElementById("gmail-btn");
    const phoneBtn = document.getElementById("phone-btn");
    const gmailForm = document.querySelector(".gmail-form");
    const phoneForm = document.querySelector(".phone-form");
    const signInBtn = document.getElementById("sign-in-btn");

    const page1 = document.getElementById("page1");
    const page2 = document.getElementById("page2");
    const page3 = document.getElementById("page3");
    const page4 = document.getElementById("page4");

    const next1 = document.getElementById("next1");
    const next2 = document.getElementById("next2");
    const back2 = document.getElementById("back2");
    const back3 = document.getElementById("back3");
    const finish = document.getElementById("finish");

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

    // Page transitions
    next1.addEventListener("click", function () {
        page1.style.display = "none";
        page2.style.display = "block";
    });

    next2.addEventListener("click", function () {
        page2.style.display = "none";
        page3.style.display = "block";
    });

    back2.addEventListener("click", function () {
        page2.style.display = "none";
        page1.style.display = "block";
    });

    back3.addEventListener("click", function () {
        page3.style.display = "none";
        page2.style.display = "block";
    });

    back4.addEventListener("click", function () {
        page4.style.display = "none";
        page3.style.display = "block";
    });

    finish.addEventListener("click", function () {
        page3.style.display = "none";
        page4.style.display = "block";
    });
    // Utility functions to validate email and phone number
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

    document.addEventListener('DOMContentLoaded', function () {
        const searchInput = document.getElementById('searchInput');
        const stateList = document.getElementById('stateList');
        
        searchInput.addEventListener('focus', function() {
            stateList.style.display = 'block';
        });
    
        searchInput.addEventListener('blur', function() {
            setTimeout(() => stateList.style.display = 'none', 200); // Delay hiding to allow clicking
        });
    
        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase();
            const items = stateList.getElementsByTagName('li');
            
            for (let i = 0; i < items.length; i++) {
                const text = items[i].textContent || items[i].innerText;
                if (text.toLowerCase().indexOf(filter) > -1) {
                    items[i].style.display = "";
                } else {
                    items[i].style.display = "none";
                }
            }
        });
    
        // Click event to select a state
        stateList.addEventListener('click', function(e) {
            if (e.target.tagName === 'LI') {
                searchInput.value = e.target.textContent;
                stateList.style.display = 'none';
            }
        });
    });
    
});