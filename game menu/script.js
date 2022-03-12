let fNameEl = document.getElementById("firstName");
let lNameEl = document.getElementById("lastName");
let inGameNameEl = document.getElementById("inGameName");
let emailEl = document.getElementById("email");
let passwordEl = document.getElementById("password");
let passwordConEl = document.getElementById("password2")
let submit = document.getElementById("signUp");

function save() {

    localStorage.setItem("firstName", fNameEl.value);
    localStorage.setItem("lastName", lNameEl.value);
    localStorage.setItem("inGameName", inGameNameEl.value.toLowerCase());
    localStorage.setItem("email", emailEl.value.toLowerCase());
    localStorage.setItem("password", passwordEl.value);
}

submit.addEventListener("click", function() {
    if (passwordEl.value === passwordConEl.value || passwordConEl.value === passwordEl.value) {
        if (passwordEl.value.length < 6) {
            alert("Passwords too small. Must be a minimum 0f 6 characters");
            event.preventDefault();
        } else {
            save();
        }
    } else {
        alert("Passwords don't match");
        event.preventDefault();
    }
})

