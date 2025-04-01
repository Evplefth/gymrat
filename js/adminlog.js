function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    var username = document.getElementById("inputEmail").value;
    var password = document.getElementById("inputPassword").value;

    // Check if the username and password are "admin"
    if (username === "admin" && password === "admin") {
        // Save login state to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        
        // Redirect to the next page
        window.location.href = "account.html";
    } else {
        // Show an error message
        alert("Invalid username or password");
    }
}