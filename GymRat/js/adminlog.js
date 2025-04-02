//Object to store user information
var user = {
    username: "admin",
    password: "admin",  
    email: "test@example.com",
    icon: "./img/ougabouga.jpg",
    phone: "123-456-7890",
    address: "123 Main St, City, Country",
};

function login(event) {
    event.preventDefault(); // Prevent form submission

    // Get the username and password values
    var inputUsername = document.getElementById("inputEmail").value;
    var inputPassword = document.getElementById("inputPassword").value;
    
    // Check if the username and password are "admin"
    if (inputUsername === user.username && inputPassword === user.password) {
        // Save login state to localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('authUser', JSON.stringify(user)); //Creating Cookie for the user object
        authUser = user; // Set the authenticated user object
        console.log("User authenticated:", authUser); //debugging line
        
        // Redirect to the next page
        window.location.href = "account.html";
    } else {
        // Show an error message
        alert("Invalid username or password");
    }
}
