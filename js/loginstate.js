

document.addEventListener('DOMContentLoaded', function() {
    // Find all protected elements
    const protectedElements = document.querySelectorAll('[data-protected="true"]');
    
    // Function to check if user is logged in
    function isLoggedIn() {
        return localStorage.getItem('isLoggedIn') === 'true';
    }
    
    // Add click handlers to all protected elements
    protectedElements.forEach(element => {
        element.addEventListener('click', function(event) {
            if (!isLoggedIn()) {
                event.preventDefault();
                alert('You have to login first to access this page.');
                window.location.href = 'login.html';
            }
        });
    });
});