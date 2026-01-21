
//PASSWORD SHOW-HIDDEN//

const togglePassword = document.getElementById('togglePassword');
const password = document.getElementById('password');

togglePassword.onclick = function ()
{
    if(password.type === "password")
    {
        password.type = "text";
        this.textContent = "🙈";
    }
    else
    {
        password.type = "password";
        this.textContent = '👁️';
    }
};



const signInButton = document.getElementById('signInButton');
const username = document.getElementById('username');
const usernameMessage = document.getElementById('usernameMessage');
const passwordMessage = document.getElementById('passwordMessage');


signInButton.onclick = function(event)
{
    event.preventDefault();
    usernameMessage.textContent = "";
    passwordMessage.textContent = "";

    if(username.value === "" && password.value === "")
    {
        alert('Enter username and password');
    }
    else if(username.value === "")
    {
        usernameMessage.textContent = "Enter your username";
    }
    else if(password.value === "")
    {
        passwordMessage.textContent = "Enter your password";
    }
    else
    {
        signInButton.textContent = "You are now signed in!";
    }

};

