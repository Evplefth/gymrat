
window.onload = function() {

    // Check if user is logged in
    function isLoggedIn() {
        if(localStorage.getItem('authUser')) return true; // Check if authUser exists in localStorage
        return false; // If not, return false
       
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
        const loginButton = document.querySelector('.login-btn');
        const logoutButton = document.querySelector('.logout-btn');
        if (isLoggedIn()) {
           
            logoutButton.onclick = function(){
                logout(); // Call the logout function

            };
            loginButton.style.visibility = 'hidden'; // Hide login button
            logoutButton.style.visibility = 'visible'; // Show logout button 
        
             }
         else {
            loginButton.style.visibility = 'visible'; // Show login button
            logoutButton.style.visibility = 'hidden'; // Hide logout button
            loginButton.onclick = function() {
                window.location.href = 'login.html'; // Redirect to login page
            };
             
        }
    }
    function logout() {
        console.log('Logging out...',isLoggedIn()); // Debugging line
        localStorage.removeItem('authUser'); // Remove authUser from localStorage
        window.location.href = './index.html'; // Redirect to index page
        console.log('Logged out.',isLoggedIn()); // Debugging line
        
    }

};