let buttons = document.getElementById("buttons");
let playNow = document.getElementById("playNow-btn");

playNow.addEventListener("click", function() {
    buttons.innerHTML = `
    <div id="buttons2" >
        <form action="signIn.html" >
            <button id="logIn-btn" >LOG IN</button>
        </form>

        <form action="signUp.html" >
            <button id="signUp-btn" >Sign Up</button>
        </form>
    </div>
    `
})




