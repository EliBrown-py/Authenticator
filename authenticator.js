function checkLoginCredential(userName, password) {
    let displayStr = "";
    if (userName === "admin" && password === "secret") {
        displayStr = "Welcome admin!";
        console.log("Welcome admin!");
        let refLoginSuccess = document.querySelector(".loginSuccess");
        refLoginSuccess.innerHTML = displayStr;
    } else {
        displayStr = "BAD LOGIN CREDENTIALS";
        console.log("BAD LOGIN CREDENTIALS");
        let refLoginFailed = document.querySelector(".loginFailed");
        refLoginFailed.innerHTML = displayStr;
    }
}

// Prompt user for input
const enterUserName = prompt("Enter your username:");
const enterPassword = prompt("Enter your Password:");

// Calling the function
checkLoginCredential(enterUserName, enterPassword);
