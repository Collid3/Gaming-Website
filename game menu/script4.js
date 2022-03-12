let username = document.getElementById("username");
let password2 = document.getElementById("password");
let errorMsg = document.getElementById("error");

let back = document.getElementById("back");
let logInbtn = document.getElementById("logIn");

logInbtn.addEventListener("click", function () {
    if (username.value.toLowerCase() === localStorage.getItem("email") || username.value.toLowerCase() === localStorage.getItem("inGameName") ) {
        if (password2.value === localStorage.getItem("password") ) {
            alert("success");
        }
    } else {
        errorMsg.innerHTML = `
        <p>Incorrect usernamme or password</p>
        <p>Try again</p>
        `
        event.preventDefault();
    }
})

