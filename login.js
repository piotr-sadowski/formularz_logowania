// creating 3 cons variable to have reference to elements which we will track
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {				// Event listener to handle what happen when Login button is click. e is a parameter for mouse click
    e.preventDefault();										// preventing default action for click which is submit a data
    const username = loginForm.username.value;				// store value inputed username field on form into username variable
    const password = loginForm.password.value;				// store value inputed password field on form into password variable

    if (username === "piotr" && password === "Test@123#") { // if user provided correct username and password
        alert("You have successfully logged in.");			// display alert that user logged in
        location.reload();									// page is reload
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})