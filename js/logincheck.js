
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
    
    // Check if we're on a page that requires login
    const currentPage = window.location.pathname.split('/').pop();
    const protectedPages = ['account.html', 'weeklycal.html', 'bmi.html'];
    
    // Update UI based on login state on Index
    updateUI();
    
    // Handle protected pages
    if (protectedPages.includes(currentPage) && !isLoggedIn()) {
        // Redirect to login page if not logged in and trying to access protected page
        window.location.href = 'login.html';
        alert('Please log in to access this page');
    }
    
    // Function to update UI elements based on login state
    function updateUI() {
        // Find login/logout buttons
        const loginButtons = document.querySelectorAll('.red-btn');
        
        if (isLoggedIn()) {
            // User is logged in
            loginButtons.forEach(button => {
                if (button.textContent === 'Sign up') {
                    button.textContent = 'Log out';
                    button.onclick = function() {
                        localStorage.removeItem('isLoggedIn');
                        localStorage.removeItem('username');
                        window.location.href = './index.html';
                    };
                }
            });
            
            // Display username if available
            const username = localStorage.getItem('username');
            if (username) {
                // Optional: You could add a welcome message here
                // const welcomeElement = document.querySelector('.welcome-message');
                // if (welcomeElement) welcomeElement.textContent = `Welcome, ${username}!`;
            }
        } else {
            // User is not logged in
            loginButtons.forEach(button => {
                if (button.textContent === 'Log out') {
                    button.textContent = 'Sign up';
                    button.onclick = function() {
                        window.location.href = './login.html';
                    };
                }
            });
        }
    }
});