// About Us Modal Functionality
document.getElementById('about-us-btn').addEventListener('click', function () {
    document.getElementById('about-us-modal').style.display = 'block';
});

document.querySelector('.close').addEventListener('click', function () {
    document.getElementById('about-us-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('about-us-modal')) {
        document.getElementById('about-us-modal').style.display = 'none';
    }
});

// Service Modal Functionality
document.getElementById('service-btn').addEventListener('click', function () {
    document.getElementById('service-modal').style.display = 'block';
});

document.querySelector('.close-service').addEventListener('click', function () {
    document.getElementById('service-modal').style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('service-modal')) {
        document.getElementById('service-modal').style.display = 'none';
    }
});

// Example user data (replace this with your actual data source)
const userData = {
    loginMethod: 'john.doe@gmail.com',  // Could be an email, phone number, or username
    profilePicUrl: '',  // Empty string means no profile picture available; otherwise, provide a URL
};

// Function to update the profile button with a picture or initial
function updateProfileButton(userData) {
    const profilePicElement = document.getElementById('profile-pic');
    const profileInitialElement = document.getElementById('profile-initial');
    
    if (userData.profilePicUrl) {
        // If a profile picture URL is provided, display the image
        profilePicElement.src = userData.profilePicUrl;
        profilePicElement.style.display = 'block';
        profileInitialElement.style.display = 'none';  // Hide the initial text
    } else {
        // If no profile picture, display the initial
        let initial;
        if (userData.loginMethod.includes('@')) {
            // Assuming it's an email login
            initial = userData.loginMethod.charAt(0).toUpperCase();  // First letter of the email
        } else if (!isNaN(userData.loginMethod)) {
            // Assuming it's a phone number login
            initial = 'P';  // Fixed letter for phone login
        } else {
            // Any other type of login (e.g., username)
            initial = userData.loginMethod.charAt(0).toUpperCase();
        }

        // Update the profile button with the initial
        profileInitialElement.textContent = initial;
        profilePicElement.style.display = 'none';  // Hide the image
        profileInitialElement.style.display = 'block';  // Show the initial text
    }
}

// Update the profile button on page load
document.addEventListener('DOMContentLoaded', function() {
    updateProfileButton(userData);
});


