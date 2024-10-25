document.getElementById('show-signup').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('signup-form').style.display = 'block';
});

document.getElementById('show-login').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('signup-form').style.display = 'none';
    document.getElementById('login-form').style.display = 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate login process
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === "user@example.com" && password === "password") {
        showPopup("Login successful!", function() {
            window.location.href = "testing.html"; // Redirect to homepage
        });
    } else {
        showPopup("Login failed. Please check your credentials.");
    }
});

document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Simulate signup process
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email && password) {
        showPopup("Signup successful! Please check your email to confirm your account.");
        // Simulate email confirmation (in a real scenario, an email will be sent)
        setTimeout(function() {
            showPopup("Email confirmed! Your account has been created.", function() {
                document.getElementById('signup-form').reset();
                document.getElementById('signup-form').style.display = 'none';
                document.getElementById('login-form').style.display = 'block';
            });
        }, 2000);
    } else {
        showPopup("Signup failed. Please try again.");
    }
});

document.getElementById('close-popup').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

function showPopup(message, callback) {
    document.getElementById('popup-message').textContent = message;
    document.getElementById('popup').style.display = 'flex';
    if (callback) {
        document.getElementById('close-popup').onclick = function() {
            document.getElementById('popup').style.display = 'none';
            callback();
        };
    }
}
