// Function to handle login
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Hardcoded username and password for demonstration
    const hardcodedUsername = 'admin';
    const hardcodedPassword = 'password';

    if (username === hardcodedUsername && password === hardcodedPassword) {
        window.location.href = 'instaHome.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}

// Add event listener when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});
